import React from 'react'
import { IFilterDropdown } from '../../../../interfaces/SearchpageInterfaces'
import FilterDropdown from './FilterDropdown'
import PriceFilter from './PriceFilter'

const FilterMenu = () => {
   const filters: IFilterDropdown[] = [
      {  
         defaultVal: 'Alphabetical',
         list: [{ str: 'A - Z', status: 0 }, { str: 'Z - A', status: 1 }],
         pCname: 'alphabet'
      },

      {  
         defaultVal: 'Rating',
         list: [{ str: 'Lowest rating', status: 0 }, { str: 'Highest rating', status: 1 }],
         pCname: 'rating'
      },

      {  
         defaultVal: 'Views',
         list: [{ str: 'Least viewed', status: 0 }, { str: 'Most viewed', status: 1 }],
         pCname: 'views'
      }
   ]

   return (
      <section className="filter-menu">

         <PriceFilter />
         
         <div className="wrap-dd">
            {
               filters.map((x, i) => (
                  <FilterDropdown pCname={x.pCname} key={i} list={x.list} defaultVal={x.defaultVal} />
               ))
            }
         </div>

      </section>
   )
}

export default FilterMenu