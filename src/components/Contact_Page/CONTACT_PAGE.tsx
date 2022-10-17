import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Contact.css'
import ImageEntry from './ImageEntry'
import MainContent from './MainContent/MainContent'

const CONTACT_PAGE = () => {
   window.scrollTo(0, 0)
   
   return (
      <LayoutWrap>

         <main className="contact">

            <ImageEntry />
            <MainContent />

         </main>

      </LayoutWrap>
   )
}

export default CONTACT_PAGE