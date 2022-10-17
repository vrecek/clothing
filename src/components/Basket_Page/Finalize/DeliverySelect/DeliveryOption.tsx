import React from 'react'
import { IDeliveryOption } from '../../../../interfaces/BasketInterfaces'

const DeliveryOption = ({name, price}: IDeliveryOption) => {
   return (
      <div className="item">

         <input type="radio" name='delivery' />
         <p className='name'>{name}</p>
         <p className="price">{price} $</p>

      </div>
   )
}

export default DeliveryOption