import React from 'react'
import FigureImage from '../Common/FigureImage'
import ImageSelect from './ImageSelect'

const ImageSection = () => {
   return (
      <section className="image-container">

         <FigureImage source='https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767' cname='main' altTxt='Image' />

         <ImageSelect />

      </section>
   )
}

export default ImageSection