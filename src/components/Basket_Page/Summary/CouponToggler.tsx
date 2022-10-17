import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../../functions/DropdownClass'

const CouponToggler = () => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const toggleCoupon = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const section: HTMLElement = t.parentElement!.parentElement!.children[1] as HTMLElement
      const arrow: HTMLElement = t.children[0] as HTMLElement

      dd.switchActive()
      dd.rotateArrow(arrow)
      dd.getActive ? dd.expandMenu(.3, section) : dd.shrinkMenu(.3)
   }

   return (
      <p onClick={toggleCoupon} className="value coupon">

         Add coupon 
         <span><MdArrowDropDown /></span>

      </p>
   )
}

export default CouponToggler