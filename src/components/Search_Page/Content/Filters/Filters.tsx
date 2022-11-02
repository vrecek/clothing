import React from 'react'
import Button from '../../../Common/Button'
import {TbAdjustmentsHorizontal} from 'react-icons/tb'
import DropDown from '../../../../functions/DropdownClass'
import FilterMenu from './FilterMenu'
import { IFilterState } from '../../../../interfaces/SearchpageInterfaces'

const Filters = ({filtersState}: IFilterState) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const toggleMenu = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const menu: HTMLElement = t.parentElement!.children[1] as HTMLElement
      const icon: HTMLElement = t.children[1] as HTMLElement

      dd.switchActive()

      if(dd.getActive) {
         dd.expandMenu(.3, menu)
         icon.style.rotate = '90deg 0'

         return
      }

      dd.shrinkMenu(.3)
      icon.style.rotate = '0deg 0'
   }

   return (
      <section className="filters">

         <Button action={toggleMenu} additional={<TbAdjustmentsHorizontal />} cname='toggler' text='' />

         <FilterMenu filtersState={filtersState} />

      </section>
   )
}

export default Filters