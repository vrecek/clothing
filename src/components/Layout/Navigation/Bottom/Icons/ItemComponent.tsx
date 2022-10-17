import React from 'react'
import { IListIcon } from '../../../../../interfaces/NavigationInterfaces'

const ItemComponent = ({icon, hiddenComponent}: IListIcon) => {
   return (
      <li>

         <span className="icon-entry">{icon}</span>
         {hiddenComponent}

      </li>
   )
}

export default ItemComponent