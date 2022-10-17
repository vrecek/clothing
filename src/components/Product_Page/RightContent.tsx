import React from 'react'
import Dropdowns from './MainContent/Dropdowns/Dropdowns'
import MainInfo from './MainContent/MainInfo'
import Opinions from './MainContent/Opinions/Opinions'

const RightContent = () => {
   return (
      <article className="content">

         <MainInfo />
         <Dropdowns />
         <Opinions />

      </article>
   )
}

export default RightContent