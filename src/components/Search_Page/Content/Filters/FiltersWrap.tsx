import React from 'react'
import ActiveFilters from './ActiveFilters'
import Filters from './Filters'

const FiltersWrap = () => {
   return (
      <>
         <ActiveFilters />

         <Filters />
      </>
   )
}

export default FiltersWrap