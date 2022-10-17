import React from 'react'
import { ILayoutWrap } from '../../interfaces/NavigationInterfaces'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'

const LayoutWrap = ({withBar, children}: ILayoutWrap) => {
   return (
      <>
         <LayoutNavigation withUpper={withBar} />

         {children}

         <LayoutFooter />
      </>
   )
}

export default LayoutWrap