import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../../../functions/DropdownClass'

const CurrentCountry = () => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const expandList = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list = t.parentElement!.children[2] as HTMLElement
      const arrow: HTMLElement = t.children[1] as HTMLElement

      dd.switchActive()
      dd.rotateArrow(arrow)
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return ( 
      <div onClick={expandList} className="current">

         <p>Select delivery</p>
         <span><MdArrowDropDown /></span>

      </div>
   )
}

export default CurrentCountry