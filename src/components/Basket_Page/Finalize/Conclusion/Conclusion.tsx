import React from 'react'
import Button from '../../../Common/Button'
import InfoHeader from '../InfoHeader'
import InfoPara from '../InfoPara'
import ConclusionInfo from './ConclusionInfo'
import ConclusionItems from './ConclusionItems'

const Conclusion = () => {
   return (
      <section className="conclusion">

         <div className="info-wrap">

            <ConclusionInfo name='Country' value='Poland' />
            <ConclusionInfo name='Delivery method' value='Courier 1' />
            <ConclusionInfo name='Payment method' value='PayPal' />

         </div>

         <InfoPara>Items (999)</InfoPara>

         <ConclusionItems />

         <InfoHeader>Total: 999 $</InfoHeader>

         <Button text='Order and pay' />

      </section>
   )
}

export default Conclusion