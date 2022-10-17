import React from 'react'
import FigureImage from '../../../Common/FigureImage'

const OneItem = () => {
   return (
      <article className='item'>

         <FigureImage source='https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767' altTxt='Conclusion product' />

         <div className="text">

            <p className="company">Company</p>
            <p className="name">Lorem ispum doloirsit</p>

         </div>

         <div className="price">

            <p>999 $</p>

         </div>

         <div className="quantity">

            <p className="info">Quantity:</p>
            <p className="value">1</p>

         </div>

      </article>
   )
}

export default OneItem