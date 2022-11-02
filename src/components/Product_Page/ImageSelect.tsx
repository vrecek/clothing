import React from 'react'
import { IMainImage } from '../../interfaces/ProductPageInterfaces'
import FigureImage from '../Common/FigureImage'

const ImageSelect = ({image, additionalImages}: IMainImage) => {
   const changeImage = (e: React.MouseEvent, src: string): void => {
      const t: HTMLElement = e.target as HTMLElement
      const allImgs: Element[] = Array.from(t.parentElement!.children)
      const imgContainer: HTMLImageElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLImageElement

      for(let x of allImgs) x.className = ''
      t.className = 'active'

      imgContainer.src = src
   }

   return (
      <section className="all-images">

         <FigureImage clickAction={changeImage} cname='active' source={image} altTxt='Product' />

         {
            additionalImages.map((x, i) => (
               <FigureImage clickAction={changeImage} key={i} source={x} altTxt='Product' />
            ))
         }

      </section>
   )
}

export default ImageSelect