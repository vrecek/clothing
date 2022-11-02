import React from 'react'
import Fetches from '../../../../../../functions/Fetches'
import { LoadingCss } from '../../../../../../functions/Loading'
import Button from '../../../../../Common/Button'

const Logged = ({username}: {username: string}) => {
   const logoutUser = async (e: React.MouseEvent): Promise<void> => {
      const t: HTMLElement = e.target as HTMLElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({
         position: 'containerHeight',
         height: '15px',
         width: '15px'
      })
      l.append(t)

      Fetches.disableButton(t)

      try {
         await Fetches.mix(process.env.REACT_APP_USER_LOGOUT!, 'POST')
         window.location.href = '/'

         setTimeout(() => l.remove(), 2000)

      }catch(err) { l.remove(); Fetches.enableButton(t) }
   }

   return (
      <section className="logged usr">

         <p className="greet">Welcome, {username}</p>
         <Button action={logoutUser} cname='logout' text='Logout' />

      </section>
   )
}

export default Logged