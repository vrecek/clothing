import React from 'react'
import { MdArrowDropDown } from 'react-icons/md'
import DropDown from '../../../../functions/DropdownClass'
import { IDropdownItem } from '../../../../interfaces/ProductPageInterfaces'
import DropdownInfo from './DropdownInfo'

const DropdownItem = ({title, content}: IDropdownItem) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const expandMenu = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement

      dd.switchActive()
      dd.getActive ? dd.expandMenu(.3, list) : dd.shrinkMenu(.3)
   }

   return (
      <li>

         <div onClick={expandMenu} className="header">

            <p>{title}</p>
            <span><MdArrowDropDown /></span>

         </div>

         <div className='inner'>

            {
               typeof content === 'string'
               ?
               <p>{content}</p>
               :
               content.map((x, i) => (
                  <DropdownInfo key={i} text={x} />
               ))
            }

         </div>

      </li>
   )
}

export default DropdownItem