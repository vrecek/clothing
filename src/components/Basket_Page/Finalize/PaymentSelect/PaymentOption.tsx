import React from 'react'
import { IPaymentOption } from '../../../../interfaces/BasketInterfaces'
import FigureImage from '../../../Common/FigureImage'

const PaymentOption = ({source, text}: IPaymentOption) => {
   const changePayment = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const allPayments: Element[] = Array.from(t.parentElement!.children)

      for(let x of allPayments) x.classList.remove('active')
      t.classList.add('active')
   }

   return (
      <div onClick={changePayment} className="payment">

         <FigureImage source={source} altTxt='Payment' />
         <p>{text}</p>

      </div>
   )
}

export default PaymentOption