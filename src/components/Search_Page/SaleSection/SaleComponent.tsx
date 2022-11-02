import React from 'react'
import { TbShoppingCartDiscount } from 'react-icons/tb'
import '../../../css/SaleInfo.css'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const SaleComponent = () => {
   return (
      <article className="sale-info">

         <LeftContainer />

         <RightContainer />

         <span className="icon"><TbShoppingCartDiscount /></span>

      </article>
   )
}

export default SaleComponent