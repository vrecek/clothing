import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../../../functions/DropdownClass'
import DropdownInfo from './DropdownInfo'

const DropdownItem = () => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const expandMenu = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement

      dd.switchActive()
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <li>

         <div onClick={expandMenu} className="header">

            <p>Product info</p>
            <span><MdArrowDropDown /></span>

         </div>

         <div className="inner">
            
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, officia deleniti qui rem earum quisquam. Illo commodi at voluptatem a! Culpa molestiae perferendis magnam, commodi dolorum fugit nobis unde ratione.</p> */}

            <DropdownInfo />
            <DropdownInfo />
            <DropdownInfo />
            <DropdownInfo />

         </div>

      </li>
   )
}

export default DropdownItem