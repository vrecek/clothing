import React from 'react'
import { IProductRating } from '../../../../interfaces/ProductType'
import SumDiv from './SumDiv'

const StarSumSection = ({rating}: {rating: IProductRating}) => {
   const {one, two, three, four, five} = rating
   const sum: number = Object.values(rating).slice(0, 5).reduce((p, c) => p + c)
   
   return (
      <section className="sum-rating">

         <SumDiv rateNumber={5} totalNumberRating={five} totalRating={sum} />
         <SumDiv rateNumber={4} totalNumberRating={four} totalRating={sum} />
         <SumDiv rateNumber={3} totalNumberRating={three} totalRating={sum} />
         <SumDiv rateNumber={2} totalNumberRating={two} totalRating={sum} />
         <SumDiv rateNumber={1} totalNumberRating={one} totalRating={sum} />

      </section>
   )
}

export default StarSumSection