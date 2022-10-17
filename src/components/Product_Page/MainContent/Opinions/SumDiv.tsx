import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { ISumDiv } from '../../../../interfaces/ProductPageInterfaces'

const SumDiv = ({totalNumberRating, rateNumber, totalRating}: ISumDiv) => {
   const width: number = (100 * totalNumberRating) / totalRating

   return (
      <div className="wrap">

         <div className='first'>

            <span><AiFillStar /></span>
            <p>{rateNumber}</p>

         </div>

         <div className="line">
            <div style={{width: `${width}%`}} className="fill"></div>
         </div>

         <div className="last">

            <p>{totalNumberRating}</p>

         </div>

      </div>
   )
}

export default SumDiv