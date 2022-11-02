import React from 'react'
import { IMainProduct } from '../../interfaces/ProductPageInterfaces'
import Dropdowns from './MainContent/Dropdowns/Dropdowns'
import MainInfo from './MainContent/MainInfo'
import Opinions from './MainContent/Opinions/Opinions'

const RightContent = ({product}: {product: IMainProduct}) => {
   const {name, company, discountPercent, price, description, materials, details, totalVotes, starsSum, rating, _id, inStock} = product

   return (
      <article className="content">

         <MainInfo 
            name={name}
            company={company}
            price={price}
            discount={discountPercent}
            sizes={product.sizes}
            starSum={starsSum}
            totalVotes={totalVotes}
            id={_id}
            inStock={inStock}
         />

         <Dropdowns 
            description={description}
            materials={materials}
            details={details}
         />

         <Opinions id={_id} rating={rating} />

      </article>
   )
}

export default RightContent