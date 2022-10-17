import React from 'react'
import { BiRightArrowAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import FigureImage from '../../../Common/FigureImage'
import Price from '../../ItemsContainer/Price'
import ButtonContainer from './ButtonContainer'

const DailyOffer = () => {
   return (
      <section className="daily">

         <h1>Daily offer</h1>

         <FigureImage source='https://hibou.pl/pol_pl_T-shirt-Meski-Bialy-248_1.png' altTxt='Offer' />

         <h3 className='name'>Product name loremips</h3>
         <Price price={999} discount={20} />

         <ButtonContainer />

         <Link to='/'>
            More discounts
            <span><BiRightArrowAlt /></span>
         </Link>

      </section>
   )
}

export default DailyOffer