import React from 'react'
import { IFilterState } from '../../../../interfaces/SearchpageInterfaces'
import ActiveFilters from './ActiveFilters'
import Filters from './Filters'

const FiltersWrap = ({filtersState}: IFilterState) => {
   return (
      <>
         <ActiveFilters />

         <Filters filtersState={filtersState} />
      </>
   )
}

export default FiltersWrap