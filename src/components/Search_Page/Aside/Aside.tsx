import React from 'react'
import Categories from './Categories'
import Searched from './Searched'

const Aside = () => {
   return (
      <aside className="search-aside">

         <div className="wrap">

            <Searched />

            <Categories />

         </div>

      </aside>
   )
}

export default Aside