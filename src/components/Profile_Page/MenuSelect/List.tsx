import React from 'react'
import { IMenuList, IProfileMenu } from '../../../interfaces/ProfileInterfaces'
import DeleteAccount from '../ProfileContent/DeleteAccount/DeleteAccount'
import UserInfo from '../ProfileContent/UserInfo/UserInfo'

const List = ({componentHook}: IProfileMenu) => {
   const listArr: IMenuList[] = [
      { name: 'Profile', componentToSet: <UserInfo /> },
      { name: 'Delete account', componentToSet: <DeleteAccount /> }
   ]

   const changeComponent = (e: React.MouseEvent, component: JSX.Element): void => {
      const t: HTMLElement = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)

      for(let x of children) x.className = ''
      t.className = 'active'

      componentHook(component)
   }

   return (
      <ul>

         {
            listArr.map((x, i) => (
               <li className={i === 0 ? 'active' : ''} onClick={(e) => changeComponent(e, x.componentToSet)} key={i}>
                  {x.name}
               </li>
            ))
         }

      </ul>
   )
}

export default List