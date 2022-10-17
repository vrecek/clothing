import React from 'react'
import Button from '../../../Common/Button'
import '../../../../css/DeleteAcc.css'

const DeleteAccount = () => {
   const deleteAccount = (e: React.MouseEvent): void => {

   }

   return (
      <article className="content-state delete-account">

         <h1>Delete account</h1>
         <p className="warn">Are you sure? this process cannot be reversed</p>
         <Button text='Delete' action={deleteAccount} />

      </article>
   )
}

export default DeleteAccount