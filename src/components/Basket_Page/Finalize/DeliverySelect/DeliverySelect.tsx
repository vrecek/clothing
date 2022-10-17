import React from 'react'
import InfoPara from '../InfoPara'
import DeliveryOption from './DeliveryOption'

const DeliverySelect = () => {
   return (
      <section className="delivery-select">

         <InfoPara>Select delivery method</InfoPara>
         
         <div className="wrap">

            <DeliveryOption name='Courier 1' price={2} />
            <DeliveryOption name='Courier 1' price={2} />
            <DeliveryOption name='Courier 1' price={2} />
            <DeliveryOption name='Courier 1' price={2} />

         </div>

      </section>
   )
}

export default DeliverySelect