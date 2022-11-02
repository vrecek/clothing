import React from 'react'
import FigureImage from '../../Common/FigureImage'
import Price from '../../Main_Page/ItemsContainer/Price'
import ProductRate from '../../Main_Page/ItemsContainer/ProductRate'
import ListInfo from './ListInfo'
import ButtonsWrap from './ButtonsWrap'
import { ISearchedItem } from '../../../interfaces/SearchpageInterfaces'

const SearchedItem = ({image, name, price, details, discountPercent, starsSum, totalVotes, _id}: ISearchedItem) => {
   
   return (
      <article className="item">

         <FigureImage source={image} altTxt='Product' />

         <section className="first">

            <h2>{name}</h2>
            <ProductRate starsSum={starsSum} totalVotes={totalVotes} />
            <ListInfo details={details} />

         </section>

         <section className="second">

            <Price price={price} discount={discountPercent} />

            <ButtonsWrap id={_id} />

         </section>

      </article>
   )
}

export default SearchedItem