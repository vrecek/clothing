import React from 'react'
import FooterBar from './FooterBar'
import FooterLists from './FooterLists'
import FooterLogo from './FooterLogo'
import RightSection from './RightSection'
import '../../../css/LayoutFooter.css'

const LayoutFooter = () => {
   return (
      <footer className="layout-footer">

         <FooterLogo />

         <section className="wrap">

            <FooterLists />
            <RightSection />

         </section>

         <FooterBar />

      </footer>
   )
}

export default LayoutFooter