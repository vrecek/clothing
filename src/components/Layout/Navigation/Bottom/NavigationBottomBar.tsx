import React from 'react'
import Icons from './Icons/Icons'
import Logo from './Logo'
import Searchbar from './Searchbar/Searchbar'

const NavigationBottomBar = () => {
   return (
      <section className="bottom-bar">

         <Logo />
         <Searchbar />
         <Icons />

      </section>
   )
}

export default NavigationBottomBar