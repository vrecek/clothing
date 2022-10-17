import React from 'react'
import '../../../css/DayOffer.css'
import DailyOffer from './Daily/DailyOffer'
import Expiry from './Expiry/Expiry'
import FirstSection from './FirstSection/FirstSection'

const DayOffer = () => {
   return (
      <section className="offer">

         <section className='wrap'>

            <FirstSection />
            <Expiry />

         </section>

         <DailyOffer />

      </section>
   )
}

export default DayOffer