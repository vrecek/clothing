import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { IDailyOffer } from '../../../../interfaces/HomepageInterfaces'
import FigureImage from '../../../Common/FigureImage'
import Price from '../../ItemsContainer/Price'
import ButtonContainer from './ButtonContainer'

const DailyOffer = ({name, image, price, discountPercent, _id}: IDailyOffer) => {
   return (
      <section className="daily">

         <h1>Daily offer</h1>

         <FigureImage source={image} altTxt='Offer' />

         <h3 className='name'>{name}</h3>
         <Price price={price} discount={discountPercent} />

         <ButtonContainer id={_id} />

         <Link to='/search/all/sale'>
            More discounts
            <span><BiRightArrowAlt /></span>
         </Link>

      </section>
   )
}

export default DailyOffer