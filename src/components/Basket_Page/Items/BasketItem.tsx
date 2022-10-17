import React from 'react'
import FigureImage from '../../Common/FigureImage'
import ItemPrice from './ItemPrice'
import ItemQuantity from './ItemQuantity'
import ItemText from './ItemText'

const BasketItem = () => {
   return (
      <article className="item">

         <FigureImage source='https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767' altTxt='Product' />

         <ItemText />

         <ItemPrice />

         <ItemQuantity />

      </article>
   )
}

export default BasketItem