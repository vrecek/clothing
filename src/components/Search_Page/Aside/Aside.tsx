import React from 'react'
import { IAsideType } from '../../../interfaces/SearchpageInterfaces'
import Categories from './Categories'
import Searched from './Searched'

const Aside = ({categories, query, setFilters}: IAsideType) => {
   return (
      <aside className="search-aside">

         <div className="wrap">

            <Searched query={query} />

            <Categories categories={categories} setFilters={setFilters} />

         </div>

      </aside>
   )
}

export default Aside