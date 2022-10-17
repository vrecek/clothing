import React from 'react'
import InfoPara from '../InfoPara'
import paypal from '../../../../images/paypal.png'
import creditcard from '../../../../images/creditcard.png'
import advancepay from '../../../../images/advancepay.png'
import PaymentOption from './PaymentOption'

const PaymentSelect = () => {
   return (
      <section className="payment-select">

         <InfoPara>Select payment type</InfoPara>

         <div className="wrap">

            <PaymentOption source={paypal} text='PayPal' />
            <PaymentOption source={creditcard} text='Credit card' />
            <PaymentOption source={advancepay} text='Pay in advance' />

         </div>

      </section>
   )
}

export default PaymentSelect