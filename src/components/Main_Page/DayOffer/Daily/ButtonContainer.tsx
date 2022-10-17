import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../../Common/Button'

const ButtonContainer = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="buttons">

         <Button cname='cart' text='Add to cart' />
         <Button action={() => n('/product/idname')} cname='page' text='Product page' />

      </section>
   )
}

export default ButtonContainer