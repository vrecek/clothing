import React from 'react'
import { IFigureImage } from '../../interfaces/CommonInterfaces'

const FigureImage = ({cname, source, altTxt}: IFigureImage) => {
   return (
      <figure className={cname ?? ''}>

         <img src={source} alt={altTxt ?? 'image'} />

      </figure>
   )
}

export default FigureImage