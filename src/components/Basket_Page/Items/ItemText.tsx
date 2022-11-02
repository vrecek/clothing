import React from 'react'
import { IItemText } from '../../../interfaces/BasketInterfaces'

const ItemText = ({company, name}: IItemText) => {
   return (
      <section className="text">

         <p className="company">{company}</p>
         <p className='name'>{name}</p>

      </section>
   )
}

export default ItemText