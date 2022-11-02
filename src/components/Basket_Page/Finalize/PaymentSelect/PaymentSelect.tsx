import React from 'react'
import InfoPara from '../InfoPara'
import paypal from '../../../../images/paypal.png'
import creditcard from '../../../../images/creditcard.png'
import advancepay from '../../../../images/advancepay.png'
import PaymentOption from './PaymentOption'
import { ISetState } from '../../../../interfaces/BasketInterfaces'

const PaymentSelect = ({setState}: ISetState) => {
   return (
      <section className="payment-select">

         <InfoPara>Select payment type</InfoPara>

         <div className="wrap">

            <PaymentOption setState={setState} source={paypal} text='PayPal' />
            <PaymentOption setState={setState} source={creditcard} text='Credit card' />
            <PaymentOption setState={setState} source={advancepay} text='Pay in advance' />

         </div>

      </section>
   )
}

export default PaymentSelect