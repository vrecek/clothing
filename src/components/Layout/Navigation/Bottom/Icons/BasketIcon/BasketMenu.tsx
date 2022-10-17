import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'
import SummaryInfo from './SummaryInfo'

const BasketMenu = () => {
   return (
      <section className="nav-menu basket-menu">

         <SummaryInfo />

         {/* <h2 className="empty">No products</h2> */}

         <section className="items">

            <Item />
            <Item />

            <p className="rest">And 3 more...</p>

         </section>
         
         <Link to='/basket'>Basket</Link>

      </section>
   )
}

export default BasketMenu