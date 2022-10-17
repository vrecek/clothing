import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import CurrentSize from './CurrentSize'
import SizeList from './SizeList'

const SelectSize = () => {
   return (
      <section className="size-select">

         <h6>Select size</h6>
         
         <CurrentSize />

         <SizeList />

      </section>
   )
}

export default SelectSize