import React from 'react'
import { BsExclamationLg } from 'react-icons/bs'
import { IItemsComponent } from '../../../interfaces/BasketInterfaces'
import BasketItem from './BasketItem'

const Items = ({products, setPrice, setProducts, stockInfo}: IItemsComponent) => {
   const checkStockInaccuracies = (): JSX.Element => {
      if(stockInfo) return (
         <p className="stock-info">
            <span><BsExclamationLg /></span>
            {stockInfo}
         </p>
      )

      return <></>
   }

   return (
      <section className="items">

         { checkStockInaccuracies() }

         <h1>Basket</h1>

         <div className="container">

            {
               products.length
               ?
                  products.map(x => (
                     <BasketItem
                        inStock={x.inStock}
                        key={x._id}
                        product={x}
                        setPrice={setPrice}
                        setProducts={setProducts}
                     />
                  ))
               :
               <p className="empty">Cart is empty</p>
            }

         </div>

      </section>
   )
}

export default Items