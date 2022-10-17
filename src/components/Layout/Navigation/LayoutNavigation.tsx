import React from 'react'
import '../../../css/LayoutNavigation.css'
import { INavigation } from '../../../interfaces/NavigationInterfaces'
import NavigationBottomBar from './Bottom/NavigationBottomBar'
import NavigationUpperBar from './Upper/NavigationUpperBar'

const LayoutNavigation = ({withUpper}: INavigation) => {
   return (
      <nav className="layout-navigation">

         {withUpper && <NavigationUpperBar />}
         
         <NavigationBottomBar />

      </nav>
   )
}

export default LayoutNavigation