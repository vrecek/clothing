import React from 'react'
import { ISetState } from '../../../../interfaces/BasketInterfaces'
import InfoPara from '../InfoPara'
import DeliveryOption from './DeliveryOption'

const DeliverySelect = ({setState}: ISetState) => {
   return (
      <section className="delivery-select">

         <InfoPara>Select delivery method</InfoPara>
         
         <div className="wrap">

            <DeliveryOption setState={setState} name='Courier 1' price={1} />
            <DeliveryOption setState={setState} name='Courier 2' price={2} />
            <DeliveryOption setState={setState} name='Courier 3' price={3} />
            <DeliveryOption setState={setState} name='Courier 4' price={4} />

         </div>

      </section>
   )
}

export default DeliverySelect