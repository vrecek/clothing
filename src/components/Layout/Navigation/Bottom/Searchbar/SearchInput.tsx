import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import NavigateClass from '../../../../../functions/NavigateClass'

const SearchInput = () => {
   const n: NavigateFunction = useNavigate()

   const keyDown = (e: React.ChangeEvent): void => {
      const t: HTMLFormElement = e.target as HTMLFormElement
      const iconDel: HTMLElement = t.parentElement!.children[2] as HTMLElement
      const iconSrch: HTMLElement = t.parentElement!.children[1].children[0] as HTMLElement
      const {length} = t.value

      if(length > 0) {
         iconSrch.style.opacity = '0'
         iconDel.style.opacity = '1'
         iconDel.style.pointerEvents = 'all'

         return
      }

      iconSrch.style.opacity = '1'
      iconDel.style.opacity = '0'
      iconDel.style.pointerEvents = 'none'
   }
   
   return (
      <input 
         placeholder='Search products...' 
         onKeyDown={(e) => NavigateClass.searchNavigateEnter(e, n, '/search/bar/[value]')} 
         onChange={keyDown} 
         type="text" 
         spellCheck='false' 
      />
   )
}

export default SearchInput