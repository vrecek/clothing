import React from 'react'
import addFilter from '../../../../functions/addFilter'
import DropDown from '../../../../functions/DropdownClass'
import { IFilterDropdown, IFilterList } from '../../../../interfaces/SearchpageInterfaces'
import FilterDefaultValue from './FilterDefaultValue'

const FilterDropdown = ({defaultVal, list, pCname, filtersState}: IFilterDropdown) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const deleteCallback = (): void => {
      filtersState((curr: any) => {
         curr[pCname] = null

         return {...curr}
      })
   }

   const changeFilter = (e: React.MouseEvent, obj: IFilterList): void => {
      const t: HTMLElement = e.target as HTMLElement
      const p: HTMLElement = t.parentElement!.parentElement!.children[0].children[0] as HTMLElement

      const {str, status} = obj
      p.textContent = str
      
      const activeCont = t.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.children[0] as HTMLElement
      addFilter(
         {
            activeCont, 
            id: pCname,
            filterText: str,
            deleteCb: deleteCallback 
         },
         {
            defaultVal,
            currentPara: p,
            listObj: obj,
         }
      )

      dd.switchActive()
      dd.shrinkMenu(.3)

      filtersState((curr: any) => {
         curr[pCname] = status

         return {...curr}
      })
   }

   return (
      <div id={pCname} className="filter dropdown">

         <FilterDefaultValue dd={dd} pCname={pCname} defaultVal={defaultVal} />

         <ul>
            {
               list.map((x, i) => (
                  <li onClick={(e) => changeFilter(e, x)} key={i}>
                     {x.str}
                  </li>
               ))
            }
         </ul>

      </div>
   )
}

export default FilterDropdown