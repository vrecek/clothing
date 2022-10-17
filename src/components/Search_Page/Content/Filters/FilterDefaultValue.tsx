import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { IFilterDefault } from '../../../../interfaces/SearchpageInterfaces'

const FilterDefaultValue = ({defaultVal, dd}: IFilterDefault) => {
   const toggleFilter = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement

      dd.switchActive()
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <div onClick={toggleFilter} className="current">

         <p>{defaultVal}</p>
         <span><RiArrowDropDownLine /></span>

      </div>
   )
}

export default FilterDefaultValue