import React from 'react'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import ReCaptcha from 'react-google-recaptcha'
import { LoadingCss } from '../../../functions/Loading'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'
import { Inputs } from '../../../interfaces/CommonInterfaces'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const Register = () => {
   const n: NavigateFunction = useNavigate()
   const captchaRef = React.useRef<any>(null)

   const submitRegister = async (e: React.FormEvent): Promise<void> => {
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
      const btn: HTMLElement = elements.pop() as HTMLElement

      const elementsValues = elements.map(x => x.value)

      try {
         Fetches.disableButton(btn)
         await Fetches.mix(process.env.REACT_APP_USER_REGISTER!, 'POST', {
            username: elementsValues[0],
            mail: elementsValues[1],
            pass: elementsValues[2],
            confPass: elementsValues[3],
            captcha: elementsValues[4]
         })

         at.setClass = 'result true'
         at.setMessage = 'Successfully created an account. You can login now.'

         elements.pop()
         for(let x of elements) x.value = ''

         setTimeout(() => n('/credentials/login'), 1500)

      }catch(err: any) {
         at.setMessage = Fetches.returnFetchErrorState(err).msg
         Fetches.enableButton(btn)

      }finally {
         captchaRef.current?.reset()
         l.remove()
         at.appendTo(t, 2.5)
      }
   }

   return (
      <form onSubmit={submitRegister} className="login">

         <InputDiv type='text' label='Username' />
         <InputDiv type='text' label='Mail' />
         <InputDiv type='password' label='Password' />
         <InputDiv type='password' label='Confirm password' />

         <ReCaptcha 
            sitekey={process.env.REACT_APP_RECAPTCHA_KEY!}
            ref={captchaRef}
         />

         <Button text='Register' />

      </form>
   )
}

export default Register