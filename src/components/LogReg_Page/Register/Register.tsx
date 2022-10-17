import React from 'react'
import Button from '../../Common/Button'
import InputDiv from '../InputDiv'
import ReCaptcha from 'react-google-recaptcha'
import { LoadingCss } from '../../../functions/Loading'
import AppendResult from '../../../functions/AppendText'
import Fetches from '../../../functions/Fetches'

const Register = () => {
   const captchaRef = React.useRef(null)

   const submitRegister = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()

      const t: HTMLFormElement = e.target as HTMLFormElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({
         position: 'containerWidth',
         backgroundClr: 'rgba(255, 255, 255, .8)',
         
      })
      l.append(t.parentElement!.parentElement!)

      const at: AppendResult = new AppendResult('h6', 'result true')
      at.setMessage = 'Successfully created an account. You can login now.'

      // credentials form

      try {
         const data = await Fetches.mix(process.env.REACT_APP_USER_REGISTER!, 'POST', {
            username: 'user',
            mail: 'mail',
            pass: 'pas',
            confPass: 'confpass'
         })

         console.log(data)

      }catch(err: any) {
         at.setClass = 'result false'
         at.setMessage = err.json.msg

      }finally {
         l.remove()
         at.appendTo(t, 2)
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