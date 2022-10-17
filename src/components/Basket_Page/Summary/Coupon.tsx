import React from 'react'
import CouponInput from './CouponInput'
import CouponToggler from './CouponToggler'

const Coupon = () => {
   return (
      <li className='coupon'>

         <div>

            <p className="what">Coupon</p>
            <CouponToggler />

         </div>

         <CouponInput />

      </li>
   )
}

export default Coupon