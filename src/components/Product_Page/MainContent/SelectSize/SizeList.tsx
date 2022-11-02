import React from 'react'
import { ISizeList } from '../../../../interfaces/ProductPageInterfaces'

const SizeList = ({sizes, setSize, dd}: ISizeList) => {
   const changeSize = (size: string): void => {
      dd.switchActive()
      dd.shrinkMenu(.3)

      setSize(size)
   }

   return (
      <ul>
         
         {
            sizes.map((x, i) => (
               <li onClick={() => changeSize(x)} key={i}>
                  {x}
               </li>
            ))
         }

      </ul>
   )
}

export default SizeList