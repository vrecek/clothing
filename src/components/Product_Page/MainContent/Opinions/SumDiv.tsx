import React from 'react'
import { ISumDiv } from '../../../../interfaces/ProductPageInterfaces'
import StarLine from './StarLine'
import StarTotalVotes from './StarTotalVotes'
import StarTypeInfo from './StarTypeInfo'

const SumDiv = ({totalNumberRating, rateNumber, totalRating}: ISumDiv) => {
   const width: number = totalNumberRating === 0 ? 0 : (100 * totalNumberRating) / totalRating

   return (
      <div className="wrap">

         <StarTypeInfo number={rateNumber} />

         <StarLine width={width} />

         <StarTotalVotes votesTotal={totalNumberRating} />

      </div>
   )
}

export default SumDiv