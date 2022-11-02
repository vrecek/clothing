import React from 'react'
import TimeRefresh from './TimeRefresh'

const LeftContainer = () => {
   return (
      <section className="left">

         <h1>New quality discounts</h1>
         <p className='para'>New offer every:</p>
         <TimeRefresh />
         
      </section>
   )
}

export default LeftContainer