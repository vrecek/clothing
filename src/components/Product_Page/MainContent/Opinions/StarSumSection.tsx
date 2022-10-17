import React from 'react'
import SumDiv from './SumDiv'

const StarSumSection = () => {
   const allRatings: number = 100

   return (
      <section className="sum-rating">

         <SumDiv rateNumber={5} totalNumberRating={29} totalRating={allRatings} />
         <SumDiv rateNumber={4} totalNumberRating={29} totalRating={allRatings} />
         <SumDiv rateNumber={3} totalNumberRating={31} totalRating={allRatings} />
         <SumDiv rateNumber={2} totalNumberRating={8} totalRating={allRatings} />
         <SumDiv rateNumber={1} totalNumberRating={3} totalRating={allRatings} />

      </section>
   )
}

export default StarSumSection