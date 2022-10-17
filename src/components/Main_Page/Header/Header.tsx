import React from 'react'
import '../../../css/Header.css'
import FigureImage from '../../Common/FigureImage'
import ArrowsWrap from './ArrowsWrap'
import slide1 from '../../../images/Homepage header/slide1.jpg'
import slide2 from '../../../images/Homepage header/slide2.jpg'
import slide3 from '../../../images/Homepage header/slide3.jpg'

const Header = () => {
   return (
      <header className="homepage-header">

         <ArrowsWrap imagesNum={3}>

            <div data-counter='1' className="moving">

               <FigureImage source={slide3} altTxt='Slider' />
               <FigureImage source={slide1} altTxt='Slider' />
               <FigureImage source={slide2} altTxt='Slider' />
               <FigureImage source={slide3} altTxt='Slider' />
               <FigureImage source={slide1} altTxt='Slider' />

            </div>

         </ArrowsWrap>

      </header>
   )
}

export default Header