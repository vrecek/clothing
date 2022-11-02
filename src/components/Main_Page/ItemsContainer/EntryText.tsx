import React from 'react'
import { IItemsContainerText } from '../../../interfaces/HomepageInterfaces'

const EntryText = ({hSmall, hBig}: IItemsContainerText) => {
   return (
      <section className="entry-text">

         <h2>{hBig}</h2>
         <h3>{hSmall}</h3>

      </section>
   ) 
}

export default EntryText