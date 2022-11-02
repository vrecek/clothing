import React from 'react'
import '../../../css/DayOffer.css'
import { IDailyOffer } from '../../../interfaces/HomepageInterfaces'
import DailyOffer from './Daily/DailyOffer'
import Expiry from './Expiry/Expiry'
import FirstSection from './FirstSection/FirstSection'

const DayOffer = ({product}: {product: IDailyOffer}) => {
   const { name, image, price, discountPercent, _id } = product

   return (
      <section className="offer">

         <section className='wrap'>

            <FirstSection />
            <Expiry />

         </section>

         <DailyOffer
            _id={_id}
            name={name}
            price={price}
            image={image}
            discountPercent={discountPercent}
         />

      </section>
   )
}

export default DayOffer