import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../../../App'
import AppendResult from '../../../../functions/AppendText'
import Fetches from '../../../../functions/Fetches'
import getDiscountPrice from '../../../../functions/getDiscountPrice'
import { LoadingCss } from '../../../../functions/Loading'
import { IConclusion } from '../../../../interfaces/BasketInterfaces'
import { PossibleUser } from '../../../../interfaces/UserType'
import Button from '../../../Common/Button'
import InfoHeader from '../InfoHeader'
import InfoPara from '../InfoPara'
import ConclusionInfo from './ConclusionInfo'
import ConclusionItems from './ConclusionItems'

const Conclusion = ({products, orderInfo}: IConclusion) => {
   const n: NavigateFunction = useNavigate()

   const userId: string = React.useContext(UserContext)!._id

   const {country, delivery, payment} = orderInfo
   const totalPrice: number = products.reduce((p, c) => p + getDiscountPrice(c.price, c.discountPercent) * c.quantity, 0) + (delivery?.price ?? 0)
   const ar: AppendResult = new AppendResult('h6')

   const finishOrder = async (e: React.MouseEvent): Promise<void> => {
      const t: HTMLElement = e.target as HTMLElement

      if(!country) ar.setMessage = 'Please select country'
      else if(!delivery) ar.setMessage = 'Please select delivery method'
      else if(!payment) ar.setMessage = 'Please select payment method'

      if(ar.hasMessageSet) {
         ar.appendTo(t, 2)
         ar.setMessage = null

         return
      }

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({ position: 'containerHeight' })
      l.append(t)

      try {
         Fetches.disableButton(t)
         await Fetches.mix(process.env.REACT_APP_PRODUCT_FINALIZE_ORDER!, 'POST', {
            userId,
            products: products.map(x => {
               return {
                  size: x.size,
                  quantity: x.quantity,
                  id: x._id,
                  price: getDiscountPrice(x.price, x.discountPercent)
               }
            }),
            orderInfo,
            totalPrice
         })

         n('/successfully-ordered', {
            replace: true,
            state: { allow: true }
         })

      }catch(err: any) {
         ar.setMessage = Fetches.returnFetchErrorState(err).msg
         ar.appendTo(t, 2)

         Fetches.enableButton(t)

         l.remove()
      }
   }

   return (
      <section className="conclusion">

         <div className="info-wrap">

            <ConclusionInfo name='Country' value={country} />
            <ConclusionInfo name='Delivery method' value={delivery?.name ?? null} />
            <ConclusionInfo name='Payment method' value={payment} />

         </div>

         <InfoPara>Items ({products.length})</InfoPara>

         <ConclusionItems products={products} />

         <InfoHeader>Total: {totalPrice} $</InfoHeader>

         <Button action={finishOrder} text='Order and pay' />

      </section>
   )
}

export default Conclusion