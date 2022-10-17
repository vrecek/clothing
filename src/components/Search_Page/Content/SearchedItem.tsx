import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import Button from '../../Common/Button'
import FigureImage from '../../Common/FigureImage'
import Price from '../../Main_Page/ItemsContainer/Price'
import ProductRate from '../../Main_Page/ItemsContainer/ProductRate'
import {FaShoppingBasket} from 'react-icons/fa'
import ListInfo from './ListInfo'
import ButtonsWrap from './ButtonsWrap'

const SearchedItem = () => {
   return (
      <article className="item">

         <FigureImage source='https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767' altTxt='Product' />

         <section className="first">

            <h2>Prodct name loremispm</h2>
            <ProductRate rate={3} />
            <ListInfo />

         </section>

         <section className="second">

            <Price price={48} discount={10} />

            <ButtonsWrap />

         </section>

      </article>
   )
}

export default SearchedItem