import React from 'react'
import { FaHatCowboy, FaTshirt } from 'react-icons/fa'
import {GiArmoredPants, GiHoodie, GiUnderwearShorts, GiConverseShoe} from 'react-icons/gi'

const HiddenMenu = () => {
   return (
      <aside className="categories-menu">

         <ul>

            <li>Shoes <span><GiConverseShoe /></span></li>
            <li>T-shirts <span><FaTshirt /></span></li>
            <li>Hoodies <span><GiHoodie /></span></li>
            <li>Pants <span><GiArmoredPants /></span></li>
            <li>Hats <span><FaHatCowboy /></span></li>
            <li>Underwear <span><GiUnderwearShorts /></span></li>

         </ul>

      </aside>
   )
}

export default HiddenMenu