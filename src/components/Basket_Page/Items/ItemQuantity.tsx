import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const ItemQuantity = () => {
   return (
      <section className="quantity">

         <span><AiOutlinePlus /></span>
         <p>1</p>
         <span><AiOutlineMinus /></span>

      </section>
   )
}

export default ItemQuantity