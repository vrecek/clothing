import React from 'react'
import { LoadingCss } from '../../../functions/Loading'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import ForgotAndRemember from './ForgotAndRemember'

const Login = () => {
   const submitLogin = (e: React.FormEvent): void => {
      e.preventDefault()

      const t: HTMLElement = e.target as HTMLElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({
         position: 'containerWidth',
         backgroundClr: 'rgba(255, 255, 255, .8)',
         
      })
      l.append(t.parentElement!.parentElement!)

      try {
         setTimeout(() => {
            l.remove()
         }, 2000);

      }catch(err) {
         console.log(err)

      }finally {  }
   }

   return (
      <form onSubmit={submitLogin} className="login">

         <InputDiv type='text' label='Username' />
         <InputDiv cname='margin' type='password' label='Password' />
         <ForgotAndRemember />
         <Button text='Sign in' />

      </form>
   )
}

export default Login