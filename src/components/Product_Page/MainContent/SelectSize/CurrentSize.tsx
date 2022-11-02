import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../../../functions/DropdownClass'
import { ISizeCurrent } from '../../../../interfaces/ProductPageInterfaces'

const CurrentSize = ({dd, currentSize}: ISizeCurrent) => {
   const expandMenu = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[2] as HTMLElement

      dd.switchActive()
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <div onClick={expandMenu} className="current">

         <p>{currentSize}</p>
         <span>{<MdArrowDropDown />}</span>

      </div>
   )
}

export default CurrentSize