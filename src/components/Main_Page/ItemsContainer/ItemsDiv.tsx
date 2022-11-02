import React from 'react'
import { IItemsContainerProducts } from '../../../interfaces/HomepageInterfaces'
import Product from './Product'

const ItemsDiv = ({products}: IItemsContainerProducts) => {
   return (
      <section className="container">

         <div className="move">

            {
               products.map((x, i) => (
                  <Product 
                     key={i}
                     name={x.name}
                     discount={x.discount}
                     price={x.price}
                     starsSum={x.starsSum}
                     totalVotes={x.totalVotes}
                     _id={x._id}
                     image={x.image}
                  />
               ))
            }

         </div>

      </section>
   )
}

export default ItemsDiv