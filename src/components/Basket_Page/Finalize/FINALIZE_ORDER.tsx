import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import '../../../css/Finalize.css'
import { DefaultOrderInfo, IOrderInfoState } from '../../../interfaces/BasketInterfaces'
import { IBasketProduct } from '../../../interfaces/ProductType'
import LayoutWrap from '../../Layout/LayoutWrap'
import Conclusion from './Conclusion/Conclusion'
import CountrySelect from './CountrySelect/CountrySelect'
import DeliverySelect from './DeliverySelect/DeliverySelect'
import InfoHeader from './InfoHeader'
import PaymentSelect from './PaymentSelect/PaymentSelect'

const FINALIZE_ORDER = () => {
   const [orderInfo, setOrderInfo] = React.useState<IOrderInfoState>(DefaultOrderInfo)
   const n: NavigateFunction = useNavigate()
   const products: IBasketProduct[] = useLocation().state?.products as IBasketProduct[]
   
   React.useEffect(() => {
      if(!products) n('/', { replace: true })
   }, [])
   
   if(products)
   return (
      <LayoutWrap>

         <main className="finalize-order">

            <InfoHeader>Finalize your order</InfoHeader>

            <CountrySelect setState={setOrderInfo} />

            <DeliverySelect setState={setOrderInfo} />

            <PaymentSelect setState={setOrderInfo} />

            <InfoHeader>Conclusion</InfoHeader>

            <Conclusion orderInfo={orderInfo} products={products} />

         </main>

      </LayoutWrap>
   )

   return <></>
}

export default FINALIZE_ORDER