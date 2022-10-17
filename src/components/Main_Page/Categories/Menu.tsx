import React from 'react'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import HiddenMenu from './HiddenMenu'

const Menu = () => {
   const expandMenu = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const menu: HTMLElement = t.parentElement!.children[1] as HTMLElement

      menu.classList.toggle('active')

      const isActive: boolean = menu.classList.contains('active')
      
      menu.style.translate = isActive ? '0 0' : '-105% 0'
      t.style.transform = isActive ? 'rotateY(180deg)' : 'rotateY(0deg)'
   }

   return (
      <section className="menu">

         <span onClick={expandMenu} className="menu-icon"><HiOutlineMenuAlt1 /></span>

         <HiddenMenu />

      </section>
   )
}

export default Menu