import React from 'react'
import '../../../css/OtherProducts.css'
import ShowedItem from './ShowedItem'

const ShowOtherProducts = () => {
   return (
      <section className="show-products">

         <h2>Recommended</h2>

         <section className="container">

            <ShowedItem />
            <ShowedItem />
            <ShowedItem />
            <ShowedItem />
            <ShowedItem />
            <ShowedItem />

         </section>

      </section>
   )
}

export default ShowOtherProducts