import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IHomepageProduct } from '../../../interfaces/HomepageInterfaces'
import FigureImage from '../../Common/FigureImage'
import Price from './Price'
import ProductRate from './ProductRate'

const Product = ({image, price, id, rating, discount, name}: IHomepageProduct) => {
   const n: NavigateFunction = useNavigate()
   
   return (
      <article onClick={() => n(`/product/${id}`)} className="product">

         <div>

            <FigureImage source={image} altTxt='Product' />

            <h3 className='name'>{name}</h3>

         </div>

         <div>

            <ProductRate rate={rating} />
            
            <Price price={price} discount={discount} />

         </div>

      </article>
   )
}

export default Product