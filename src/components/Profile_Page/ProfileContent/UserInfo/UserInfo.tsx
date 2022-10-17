import React from 'react'
import '../../../../css/UserInfo.css'
import EntryUserInfo from './EntryUserInfo'
import UserInformation from './UserInformation'

const UserInfo = () => {
   return (
      <article className="content-state user-info">

         <EntryUserInfo />

         <section className="details">

            <UserInformation what='Username' value='vrecek' inputClass='username' />
            <UserInformation divClass='margin' what='Mail address' value='loremispuym@gmail.com' inputClass='mail' />
            <UserInformation what='New password' value='' type='password' inputClass='password' />
            <UserInformation what='Confirm password' value='' type='password' inputClass='password' />

         </section>

      </article>
   )
}

export default UserInfo