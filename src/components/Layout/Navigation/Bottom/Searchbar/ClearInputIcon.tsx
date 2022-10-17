import React from 'react'
import {FaTimes} from 'react-icons/fa'

const ClearInputIcon = () => {
   const clearInput = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const input: HTMLInputElement = t.parentElement!.children[0] as HTMLInputElement

      input.value = ''

      t.style.opacity = '0'
      t.style.pointerEvents = 'none'

      const srchIcon: HTMLElement = t.parentElement!.children[1].children[0] as HTMLElement
      srchIcon.style.opacity = '1'
   }

   return (
      <span onClick={clearInput} className='delete-icon'>
         <FaTimes />
      </span>
   )
}

export default ClearInputIcon