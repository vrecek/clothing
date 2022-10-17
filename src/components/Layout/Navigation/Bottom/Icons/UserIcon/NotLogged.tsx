import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../../../../Common/Button'
import Line from './Line'

const NotLogged = () => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="not-logged">

         <Button action={() => n('/credentials/register')} text='Join us' cname='join' />

         <Line />

         <Button action={() => n('/credentials/login')} text='Log in' cname='login' />
            
      </section>
   )
}

export default NotLogged