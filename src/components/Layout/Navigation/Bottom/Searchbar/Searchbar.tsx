import React from 'react'
import ClearInputIcon from './ClearInputIcon'
import SearchIcon from './SearchIcon'
import SearchInput from './SearchInput'

const Searchbar = () => {
   return (
      <section className="searchbar">

         <SearchInput />
         <SearchIcon />
         <ClearInputIcon />

      </section>
   )
}

export default Searchbar