import React from 'react'
import {IChildren} from '../../../interfaces/CommonInterfaces'

const InfoPara = ({children}: IChildren) => {
   return (
      <p className="info">
         {children}
      </p>
   )
}

export default InfoPara