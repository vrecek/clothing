import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../Common/Button'

const ButtonsWrap = ({id}: {id: string}) => {
   const n: NavigateFunction = useNavigate()

   return (
      <div className="buttons">

         <Button cname='page' action={() => n(`/product/${id}`)} text='Product page' />

      </div>
   )
}

export default ButtonsWrap