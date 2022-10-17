import React from 'react'
import getDiscountPrice from '../../../functions/getDiscountPrice'
import { IPrice } from '../../../interfaces/HomepageInterfaces'

const Price = ({price, discount}: IPrice) => {
   const priceClass: string = discount ? 'active' : ''
   const priceFix: number = getDiscountPrice(price, discount)

   return (
      <div className={`price ${priceClass}`}>

         <h4>{price} $</h4>
         {
            discount && 
            <>
               <h5>{priceFix} $</h5>
               <h6 className="percent-discount">-{discount} %</h6>
            </>
         }

      </div>
   )
}

export default Price