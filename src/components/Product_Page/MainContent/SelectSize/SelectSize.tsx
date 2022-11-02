import React from 'react'
import DropDown from '../../../../functions/DropdownClass'
import { ISize } from '../../../../interfaces/ProductPageInterfaces'
import CurrentSize from './CurrentSize'
import SizeList from './SizeList'

const SelectSize = ({sizes, setSize, currentSize}: ISize) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   return (
      <section className="size-select">

         <h6>Select size</h6>
         
         <CurrentSize dd={dd} currentSize={currentSize} />

         <SizeList dd={dd} setSize={setSize} sizes={sizes} />

      </section>
   )
}

export default SelectSize