import React from 'react'
import '../../../../css/UserInfo.css'
import { IUserInfo } from '../../../../interfaces/ProfileInterfaces'
import EntryUserInfo from './EntryUserInfo'
import UserInformation from './UserInformation'

const UserInfo = ({name, mail}: IUserInfo) => {
   return (
      <article className="content-state user-info">

         <EntryUserInfo />

         <section className="details">

            <UserInformation what='Username' value={name} inputClass='username input-select' />
            <UserInformation divClass='margin' what='Mail address' value={mail} inputClass='mail input-select' />
            <UserInformation what='New password' value='' type='password' inputClass='password input-select' />
            <UserInformation what='Confirm password' value='' type='password' inputClass='password input-select' />

         </section>

      </article>
   )
}

export default UserInfo