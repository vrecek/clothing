import React from 'react'
import { FaHatCowboy, FaTshirt } from 'react-icons/fa'
import {GiArmoredPants, GiUnderwearShorts, GiConverseShoe, GiBigDiamondRing} from 'react-icons/gi'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IHiddenMenuList } from '../../../interfaces/HomepageInterfaces'

const HiddenMenu = () => {
   const n: NavigateFunction = useNavigate()

   const list: IHiddenMenuList[] = [
      { name: 'Shoes', icon: <GiConverseShoe />, url: '/search/all/category/footwear' },
      { name: 'Tops', icon: <FaTshirt />, url: '/search/all/category/tops' },
      { name: 'Pants', icon: <GiArmoredPants />, url: '/search/all/category/pants' },
      { name: 'Hats', icon: <FaHatCowboy />, url: '/search/all/category/hats' },
      { name: 'Underwear', icon: <GiUnderwearShorts />, url: '/search/all/category/underwear' },
      { name: 'Accessories', icon: <GiBigDiamondRing />, url: '/search/all/category/accessories' }
   ]

   return (
      <aside className="categories-menu">

         <ul>

            {
               list.map((x, i) => (
                  <li onClick={() => n(x.url)} key={i}>
                     {x.name}
                     <span>{x.icon}</span>
                  </li>
               ))
            }

         </ul>

      </aside>
   )
}

export default HiddenMenu