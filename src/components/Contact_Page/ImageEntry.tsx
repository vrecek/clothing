import React from 'react'
import FigureImage from '../Common/FigureImage'
import contact from '../../images/contact.jpg'

const ImageEntry = () => {
   return (
      <section className="entry">

         <FigureImage source={contact} altTxt='Contact' />

         <div className="text">

            <h2>Contact us</h2>
            <p>Contact us if you have got any issues</p>

         </div>

      </section>
   )
}

export default ImageEntry