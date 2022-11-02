import React from 'react'
import { IDropdownsContent } from '../../../../interfaces/ProductPageInterfaces'
import DropdownItem from './DropdownItem'

const Dropdowns = ({description, materials, details}: IDropdownsContent) => {
   return (
      <ul className="dropdowns">

         <DropdownItem content={description} title='Description' />
         <DropdownItem content={details} title='Details' />
         <DropdownItem content={materials} title='Materials' />

      </ul>
   )
}

export default Dropdowns