import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Basket.css'
import Items from './Items/Items'
import Summary from './Summary/Summary'

const BASKET_PAGE = () => {
   return (
      <LayoutWrap>

         <main className="basket-page">

            <Items />
            <Summary />

         </main>

      </LayoutWrap>
   )
}

export default BASKET_PAGE