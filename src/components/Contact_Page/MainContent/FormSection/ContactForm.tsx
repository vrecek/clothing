import React from 'react'
import Button from '../../../Common/Button'
import InputDiv from './InputDiv'

const ContactForm = () => {
   const submitContact = (e: React.FormEvent): void => {
      e.preventDefault()

      
   }

   return (
      <form onSubmit={submitContact}>

         <InputDiv text='Username' />
         <InputDiv text='Mail address'/>
         <textarea spellCheck='false'></textarea>

         <Button text='Submit' />

      </form>
   )
}

export default ContactForm