import React from 'react'
import { IDeliveryOption } from '../../../../interfaces/BasketInterfaces'

const DeliveryOption = ({name, price, setState}: IDeliveryOption) => {
   const updateDelivery = (): void => {
      setState(curr => {
         curr.delivery = {
            price,
            name
         }

         return {...curr}
      })
   }

   return (
      <div className="item">

         <input onChange={updateDelivery} type="radio" name='delivery' />
         <p className='name'>{name}</p>
         <p className="price">{price} $</p>

      </div>
   )
}

export default DeliveryOption