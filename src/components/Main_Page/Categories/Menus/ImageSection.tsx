import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ICategoryImage } from '../../../../interfaces/HomepageInterfaces'
import FigureImage from '../../../Common/FigureImage'

const ImageSection = ({source, header, url}: ICategoryImage) => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className='image'>

         <FigureImage source={source} altTxt='Category' />

         <div onClick={() => n(url)}>
            <h2>{header}</h2>
            <span><BsArrowRight /></span>
         </div>

      </section>
   )
}

export default ImageSection