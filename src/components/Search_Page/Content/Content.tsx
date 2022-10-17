import React from 'react'
import CurrentLocation from './CurrentLocation'
import FiltersWrap from './Filters/FiltersWrap'
import SearchedItem from './SearchedItem'

const Content = () => {
   return (
      <section className="search-content">

         <CurrentLocation />

         <FiltersWrap />

         <section className="container">

            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />
            <SearchedItem />

         </section>

      </section>
   )
}

export default Content