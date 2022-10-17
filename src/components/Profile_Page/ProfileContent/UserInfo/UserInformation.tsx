import React from 'react'
import { IUserDetail } from '../../../../interfaces/ProfileInterfaces'

const UserInformation = ({what, value, inputClass, type, divClass}: IUserDetail) => {
   return (
      <article className={`user-info ${divClass ?? ''}`}>

         <p className="what">{what}</p>

         <div>

            <input className={inputClass} type={type ?? 'text'} spellCheck='false' defaultValue={value} />

         </div>


      </article>
   )
}

export default UserInformation