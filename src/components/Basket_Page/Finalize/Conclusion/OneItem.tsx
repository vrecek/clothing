import React from 'react'
import { IConclusionItem } from '../../../../interfaces/BasketInterfaces'
import FigureImage from '../../../Common/FigureImage'
import Price from '../../../Main_Page/ItemsContainer/Price'

const OneItem = ({image, company, name, price, discountPercent, quantity}: IConclusionItem) => {
   return (
      <article className='item'>

         <FigureImage source={image} altTxt='Conclusion product' />

         <div className="text">

            <p className="company">{company}</p>
            <p className="name">{name}</p>

         </div>

         <Price price={price} discount={discountPercent} />

         <div className="quantity">

            <p className="info">Total:</p>
            <p className="value">{quantity}</p>

         </div>

      </article>
   )
}

export default OneItem