import React from 'react'
import { UserContext } from '../../../App'
import { IMenuList, IProfileMenu } from '../../../interfaces/ProfileInterfaces'
import UserType from '../../../interfaces/UserType'
import DeleteAccount from '../ProfileContent/DeleteAccount/DeleteAccount'
import PurchaseHistory from '../ProfileContent/PurchaseHistory/PurchaseHistory'
import UserInfo from '../ProfileContent/UserInfo/UserInfo'

const List = ({componentHook}: IProfileMenu) => {
   const user: UserType = React.useContext(UserContext) as UserType
   
   const listArr: IMenuList[] = [
      { 
         name: 'Profile', 
         componentToSet: <UserInfo mail={user.mail} name={user.username} /> 
      },
      { 
         name: 'Purchase history', 
         componentToSet: <PurchaseHistory userId={user._id} /> 
      },
      { 
         name: 'Delete account', 
         componentToSet: <DeleteAccount userId={user._id} /> 
      }
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