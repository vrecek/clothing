import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import FigureImage from '../../../Common/FigureImage'
import logo from '../../../../images/logo.png'

const Logo = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <section onClick={() => n('/')} className="logo">

         <FigureImage source={logo} altTxt='Logo' />

      </section>
   )
}

export default Logo