import React from 'react'
import '../../../css/OtherProducts.css'
import ShowedItem from './ShowedItem'
import {IOtherProducts} from '../../../interfaces/ProductPageInterfaces'

const ShowOtherProducts = ({title, products}: IOtherProducts) => {
   return (
      <section className="show-products">

         <h2>{title}</h2>

         <section className="container">

            {
               products.length
               ?
                  products.map((x, i) => (
                     <ShowedItem 
                        key={i} 
                        _id={x._id}
                        discountPercent={x.discountPercent}
                        mainImage={x.mainImage}
                        name={x.name}
                        price={x.price}
                     />
                  ))
               :
               <h1 className='empty'>No {title.toLowerCase()} products found</h1>
            }

         </section>

      </section>
   )
}

export default ShowOtherProducts