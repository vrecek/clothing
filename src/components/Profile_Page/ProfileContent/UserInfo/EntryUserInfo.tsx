import React from 'react'
import Button from '../../../Common/Button'
import FigureImage from '../../../Common/FigureImage'
import avatar from '../../../../images/blank.png'
import Text from './Text'
import Fetches from '../../../../functions/Fetches'
import { LoadingCss } from '../../../../functions/Loading'
import AppendResult from '../../../../functions/AppendText'
import { Inputs } from '../../../../interfaces/CommonInterfaces'
import { UserContext } from '../../../../App'

const EntryUserInfo = () => {
   const {_id} = React.useContext(UserContext)!
   
   const updateChanges = async (e: React.MouseEvent): Promise<void> => {
      const t: HTMLElement = e.target as HTMLElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({
         position: 'containerWidth',
         backgroundClr: 'rgba(230, 230, 230, .9)'
      })
      l.append(t.parentElement!.parentElement!.parentElement!)

      const ar: AppendResult = new AppendResult('h6')

      const [newUsername, newMail, newPassword, newConfPass] 
      = Array.from(document.getElementsByClassName('input-select') as Inputs).map(x => x.value)

      try {
         const data = await Fetches.mix<{msg: string}>(process.env.REACT_APP_USER_UPDATE!, 'PATCH', {
            userId: _id,
            newUsername,
            newMail,
            newPassword,
            newConfPass
         })

         ar.setMessage = data.json.msg
         ar.setClass = 'true'

         if(data.json.msg.length) window.location.reload()

      }catch(err: any) {
         ar.setMessage = err.json.msg
         ar.setClass = 'false'

      }finally {
         l.remove()
         ar.appendTo(t.parentElement!, 2.5)
      }
   }

   return (
      <section className="entry-informations">

         <FigureImage source={avatar} altTxt='User' />

         <div className="wrap">

            <Text />

            <Button action={updateChanges} text='Save' />

         </div>

      </section>
   )
}

export default EntryUserInfo