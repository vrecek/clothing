import React from 'react'
import '../../../css/ItemsContainer.css'
import { IItemsContainer } from '../../../interfaces/HomepageInterfaces'
import EntryText from './EntryText'
import ItemsDiv from './ItemsDiv'
import MoveArrows from './MoveArrows'

const ItemsContainer = ({hSmall, hBig, products}: IItemsContainer) => {
   return (
      <section className="items-container">

         <EntryText hSmall={hSmall} hBig={hBig} />

         <MoveArrows />
         <ItemsDiv products={products} />

      </section>
   )
}

export default ItemsContainer