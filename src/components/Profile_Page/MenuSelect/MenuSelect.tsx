import React from 'react'
import { IProfileMenu } from '../../../interfaces/ProfileInterfaces'
import List from './List'

const MenuSelect = ({componentHook}: IProfileMenu) => {
   return (
      <aside className="menu-select">

         <p>Settings</p>

         <List componentHook={componentHook} />

      </aside>
   )
}

export default MenuSelect