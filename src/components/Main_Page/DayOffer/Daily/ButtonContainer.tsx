import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../../Common/Button'

const ButtonContainer = ({id}: {id: string}) => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="buttons">

         <Button action={() => n(`/product/${id}`)} cname='page' text='Product page' />

      </section>
   )
}

export default ButtonContainer