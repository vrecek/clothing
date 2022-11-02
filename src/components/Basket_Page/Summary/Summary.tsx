import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ISummary } from '../../../interfaces/BasketInterfaces'
import Button from '../../Common/Button'
import Coupon from './Coupon'
import ListItem from './ListItem'

const Summary = ({products, priceSum}: ISummary) => {
   const n: NavigateFunction = useNavigate()

   const finalizeRedirect = (): void => {
      n('/finalize', {
         state: { products }
      })
   }

   return (
      <section className="summary">

         <ul>

            <ListItem name={`Products`} value={products.length} />
            <ListItem name={`Delivery`} value={`0-5 $`} />

            <Coupon />

            <ListItem cname='big' name={`Total`} value={`${priceSum} $`} />

         </ul>

         {
            products.length ? <Button action={finalizeRedirect} text='Continue' /> : <></>
         }

      </section>
   )
}

export default Summary