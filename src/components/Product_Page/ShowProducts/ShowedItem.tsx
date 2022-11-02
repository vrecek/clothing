import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IShowedItem } from '../../../interfaces/ProductPageInterfaces'
import FigureImage from '../../Common/FigureImage'
import Price from '../../Main_Page/ItemsContainer/Price'

const ShowedItem = ({mainImage, discountPercent, name, price, _id}: IShowedItem) => {
   const n: NavigateFunction = useNavigate()
   
   return (
      <article onClick={() => n(`/product/${_id}`)} className="item">

         <FigureImage source={mainImage.url} altTxt='Product' />

         <p>{name}</p>

         <Price price={price} discount={discountPercent} />

      </article>
   )
}

export default ShowedItem