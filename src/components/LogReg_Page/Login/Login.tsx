import React from 'react'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import { Inputs } from '../../../interfaces/CommonInterfaces'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import ForgotAndRemember from './ForgotAndRemember'

const Login = () => {
   const submitLogin = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()

      const t: HTMLFormElement = e.target as HTMLFormElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({
         position: 'containerWidth',
         backgroundClr: 'rgba(255, 255, 255, .8)'   
      })
      l.append(t.parentElement!.parentElement!)

      const at: AppendResult = new AppendResult('h6', 'result false')
      at.setMessage = 'Unkown error. Try again.'
      
      const elements: HTMLInputElement[] = Array.from(t.elements as Inputs)
      const btn: HTMLElement = elements.slice(-1)[0]

      try {
         Fetches.disableButton(btn)

         await Fetches.mix(process.env.REACT_APP_USER_LOGIN!, 'POST', {
            username: elements[0].value,
            password: elements[1].value,
            remember: elements[2].checked
         })

         at.setClass = 'result true'
         at.setMessage = 'Successfully logged in'

         for(let x of elements.slice(0, 2)) x.value = ''

         setTimeout(() => window.location.href = '/', 1000)

      }catch(err: any) {
         at.setMessage = Fetches.returnFetchErrorState(err).msg
         Fetches.enableButton(btn)

      }finally {
         l.remove()
         at.appendTo(t, 2.5)
      }
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