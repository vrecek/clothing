import React from 'react'
import { IMainProduct } from '../../../interfaces/ProductPageInterfaces'
import ImageSection from '../ImageSection'
import RightContent from '../RightContent'

const MainContent = ({product}: {product: IMainProduct}) => {
   const additionalStrings: string[] = product.additionalImages.map(x => x.url)

   return (
      <section className="main-content">

         <ImageSection image={product.mainImage.url} additionalImages={additionalStrings} />
         <RightContent product={product} />

      </section>
   )
}

export default MainContent