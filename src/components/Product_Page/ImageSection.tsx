import React from 'react'
import { IMainImage } from '../../interfaces/ProductPageInterfaces'
import FigureImage from '../Common/FigureImage'
import ImageSelect from './ImageSelect'

const ImageSection = ({image, additionalImages}: IMainImage) => {
   return (
      <section className="image-container">

         <FigureImage source={image} cname='main' altTxt='Image' />

         <ImageSelect image={image} additionalImages={additionalImages} />

      </section>
   )
}

export default ImageSection