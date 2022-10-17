import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../Common/Button'

const ButtonsWrap = () => {
   const n: NavigateFunction = useNavigate()
   
   return (
      <div className="buttons">

         <Button action={() => n('/product/${id}')} text='Product page' />
         <Button additional={<FaShoppingBasket />} text='Add to cart' />


      </div>
   )
}

export default ButtonsWrap