import React from 'react'
import { IFigureImage } from '../../interfaces/CommonInterfaces'

const FigureImage = ({cname, source, altTxt, clickAction}: IFigureImage) => {
   const blank = ()=>{}

   return (
      <figure onClick={clickAction ? (e) => clickAction(e, source) : blank} className={cname ?? ''}>

         <img src={source} alt={altTxt ?? 'image'} />

      </figure>
   )
}

export default FigureImage