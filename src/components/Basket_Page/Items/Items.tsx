import React from 'react'
import BasketItem from './BasketItem'

const Items = () => {
   return (
      <section className="items">

         <h1>Basket</h1>

         <div className="container">

            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />
            <BasketItem />

         </div>

      </section>
   )
}

export default Items