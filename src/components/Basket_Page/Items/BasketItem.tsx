import React from 'react'
import FigureImage from '../../Common/FigureImage'
import ItemQuantity from './ItemQuantity'
import ItemText from './ItemText'
import Price from '../../Main_Page/ItemsContainer/Price'
import { IOneItemComponent } from '../../../interfaces/BasketInterfaces'

const BasketItem = ({product, setPrice, setProducts, inStock}: IOneItemComponent) => {
   const {name, image, _id, price, discountPercent, company} = product

   return (
      <article className="item">

         <FigureImage source={image} altTxt='Product' />

         <ItemText name={name} company={company} />

         <Price price={price} discount={discountPercent} />

         <ItemQuantity 
            inStock={inStock} 
            setProducts={setProducts} 
            price={price} 
            discountPercent={discountPercent} 
            setPrice={setPrice} id={_id} 
         />

      </article>
   )
}

export default BasketItem