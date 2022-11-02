import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IProductRate } from '../../../interfaces/CommonInterfaces'

const ProductRate = ({starsSum, totalVotes}: IProductRate) => {
   return (
      <div className="rating">

         {
            [...Array(5)].map((x, i) => (
               <span key={i} className={`star ${i < starsSum ? 'active' : ''}`}>
                  <AiFillStar />
               </span>
            ))
         }

         <p className='rate-count'>({totalVotes})</p>

      </div>
   )
}

export default ProductRate