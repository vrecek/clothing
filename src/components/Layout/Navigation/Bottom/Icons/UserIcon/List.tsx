import React from 'react'
import {BiCog, BiMessageAltDetail} from 'react-icons/bi'
import { BsPatchQuestion } from 'react-icons/bs'
import {RiShoppingBasket2Line} from 'react-icons/ri'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IUserMenuList } from '../../../../../../interfaces/NavigationInterfaces'

const List = () => {
   const n: NavigateFunction = useNavigate()
   
   const list: IUserMenuList[] = [
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
      },

      {
         str: 'Privacy policy',
         icon: <BsPatchQuestion />,
         url: '/'
      }
   ]
   
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