import React from 'react'
import TimeRefresh from './TimeRefresh'
import {TbShoppingCartDiscount} from 'react-icons/tb'

const LeftContainer = () => {
   return (
      <section className="left">

         <h1>New quality discounts</h1>
         <p className='para'>New offer every:</p>
         <TimeRefresh />

         <span className="icon"><TbShoppingCartDiscount /></span>
         
      </section>
   )
}

export default LeftContainer