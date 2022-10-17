import React from 'react'
import FormSection from './FormSection/FormSection'
import InfoSection from './InfoSection/InfoSection'

const MainContent = () => {
   return (
      <section className="content">

         <h1>Start a conversation</h1>

         <div className='wrap'>

            <InfoSection />
            <FormSection />

         </div>

      </section>
   )
}

export default MainContent