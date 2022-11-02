import React from 'react'
import Button from '../../../Common/Button'
import '../../../../css/DeleteAcc.css'
import { LoadingCss } from '../../../../functions/Loading'
import Fetches from '../../../../functions/Fetches'

const DeleteAccount = ({userId}: {userId: string}) => {
   const deleteAccount = async (e: React.MouseEvent): Promise<void> => {
      const t: HTMLElement = e.target as HTMLElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({ position: 'containerHeight', backgroundClr: 'rgb(230, 230, 230, .9)' })
      l.append(t.parentElement!)

      Fetches.disableButton(t)
      
      try {
         await Fetches.mix(`${process.env.REACT_APP_USER_DELETE!}/${userId}`, 'DELETE')
         window.location.href = '/'

      }catch(err) { l.remove(); Fetches.enableButton(t) }
   }

   return (
      <article className="content-state delete-account">

         <h1 className='header'>Delete account</h1>
         <p className="warn">Are you sure? this process cannot be reversed</p>
         <Button text='Delete' action={deleteAccount} />

      </article>
   )
}

export default DeleteAccount