import React from 'react'
import {BiUser, BiBasket} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import ItemComponent from './ItemComponent'
import UserMenu from './UserIcon/UserMenu'

const Icons = () => {
   return (
      <section className="icons">

         <ul>

            <ItemComponent hiddenComponent={<></>} icon={<AiOutlineHeart />} />
            <ItemComponent url='/basket' hiddenComponent={<></>} icon={<BiBasket />} />
            <ItemComponent hiddenComponent={<UserMenu />} icon={<BiUser />} />

         </ul>

      </section>
   )
}

export default Icons