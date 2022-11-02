import React from 'react'
import { IFilterDropdown, IFilterState } from '../../../../interfaces/SearchpageInterfaces'
import FilterDropdown from './FilterDropdown'
import PriceFilter from './PriceFilter'

const FilterMenu = ({filtersState}: IFilterState) => {
   const filters: IFilterDropdown[] = [
      {  
         defaultVal: 'Rating',
         list: [{ str: 'Lowest rating', status: 0 }, { str: 'Highest rating', status: 1 }],
         pCname: 'rating',
         filtersState
      }
   ]

   return (
      <section className="filter-menu">

         <PriceFilter filtersState={filtersState} />
         
         <div className="wrap-dd">
            {
               filters.map((x, i) => (
                  <FilterDropdown 
                     filtersState={filtersState}
                     pCname={x.pCname} 
                     key={i} 
                     list={x.list} 
                     defaultVal={x.defaultVal} 
                  />
               ))
            }
         </div>

      </section>
   )
}

export default FilterMenu