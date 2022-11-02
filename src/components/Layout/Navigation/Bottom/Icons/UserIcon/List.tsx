import React from 'react'
import {BiCog, BiHome, BiMessageAltDetail} from 'react-icons/bi'
import { BsPatchQuestion } from 'react-icons/bs'
import { MdAdminPanelSettings } from 'react-icons/md'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IUserMenuList } from '../../../../../../interfaces/NavigationInterfaces'
import { UserRole } from '../../../../../../interfaces/UserType'

const List = ({userRole}: {userRole: UserRole | undefined}) => {
   const n: NavigateFunction = useNavigate()
   
   const list: IUserMenuList[] = [
      {
         str: 'Homepage',
         icon: <BiHome />,
         url: '/'
      },

      {
         str: 'Account',
         icon: <BiCog />,
         url: '/profile'
      },

      {
         str: 'Basket',
         icon: <RiShoppingBasket2Line />,
         url: '/basket'
      },

      {
         str: 'Contact',
         icon: <BiMessageAltDetail />,
         url: '/contact'
      }
   ]

   if(userRole && userRole === 'admin') {
      list.push({
         str: 'Panel',
         icon: <MdAdminPanelSettings />,
         url: `/admin/${process.env.REACT_APP_ADMIN_ROUTE}`
      })
   }
   
   return (
      <ul className="list">

         {
            list.map((x, i) => (
               <li onClick={() => n(x.url)} key={i}>

                  <p>{x.str}</p>
                  <span>{x.icon}</span>

               </li>
            ))
         }

      </ul>
   )
}

export default List