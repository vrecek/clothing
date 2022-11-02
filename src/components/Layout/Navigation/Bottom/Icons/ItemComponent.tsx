import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IListIcon } from '../../../../../interfaces/NavigationInterfaces'

const ItemComponent = ({icon, hiddenComponent, url}: IListIcon) => {
   const n: NavigateFunction = useNavigate()
   const clickFunc = url ? () => n(url) : ()=>{}

   return (
      <li onClick={clickFunc}>

         <span className="icon-entry">{icon}</span>
         {hiddenComponent}

      </li>
   )
}

export default ItemComponent