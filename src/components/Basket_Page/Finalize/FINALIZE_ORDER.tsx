import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../../css/Finalize.css'
import LayoutWrap from '../../Layout/LayoutWrap'
import Conclusion from './Conclusion/Conclusion'
import CountrySelect from './CountrySelect/CountrySelect'
import DeliverySelect from './DeliverySelect/DeliverySelect'
import InfoHeader from './InfoHeader'
import PaymentSelect from './PaymentSelect/PaymentSelect'

const FINALIZE_ORDER = () => {
   const l = useLocation()
   console.log(l);

   return (
      <LayoutWrap>

         <main className="finalize-order">

            <InfoHeader>Finalize your order</InfoHeader>

            <CountrySelect />

            <DeliverySelect />

            <PaymentSelect />

            <InfoHeader>Conclusion</InfoHeader>

            <Conclusion />

         </main>

      </LayoutWrap>
   )
}

export default FINALIZE_ORDER