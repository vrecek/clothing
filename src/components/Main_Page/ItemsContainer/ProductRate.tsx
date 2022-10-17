import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ProductRate = ({rate}: {rate: number}) => {
   return (
      <div className="rating">

         {
            [...Array(5)].map((x, i) => (
               <span key={i} className={`star ${i < rate ? 'active' : ''}`}>
                  <AiFillStar />
               </span>
            ))
         }

         <p className='rate-count'>(99)</p>

      </div>
   )
}

export default ProductRate