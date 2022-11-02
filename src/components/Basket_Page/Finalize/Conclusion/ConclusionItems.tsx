import React from 'react'
import { IBasketProduct } from '../../../../interfaces/ProductType'
import OneItem from './OneItem'

const ConclusionItems = ({products}: {products: IBasketProduct[]}) => {
   return (
      <section className="items">

         {
            products.map(x => (
               <OneItem
                  key={x._id}
                  price={x.price}
                  discountPercent={x.discountPercent}
                  image={x.image}
                  quantity={x.quantity}
                  name={x.name}
                  company={x.company}
               />
            ))
         }

      </section>
   )
}

export default ConclusionItems