import React from 'react'
import { IChildren } from '../../../interfaces/CommonInterfaces'

const InfoHeader = ({children}: IChildren) => {
   return (
      <h1 className='header'>
         {children}
      </h1>
   )
}

export default InfoHeader