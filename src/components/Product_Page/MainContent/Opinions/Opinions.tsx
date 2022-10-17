import React from 'react'
import StarSumSection from './StarSumSection'
import '../../../../css/Opinions.css'
import Button from '../../../Common/Button'
import DropDown from '../../../../functions/DropdownClass'
import CommentForm from './Comments/CommentForm'

const Opinions = () => {
   const [dd] = React.useState<DropDown>(new DropDown())

   const toggleComments = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement
      const comments: HTMLElement = t.parentElement!.parentElement!.parentElement!.parentElement!.children[1] as HTMLElement
      const label: HTMLElement = t.children[0] as HTMLElement

      dd.switchActive()

      dd.getActive ? dd.expandMenu(.3, comments) : dd.shrinkMenu(.3)
      label.textContent = dd.getActive ? 'Hide opinions' : 'Show opinions'
   }

   return (
      <section className="opinions">

         <StarSumSection />
         <CommentForm />
         <Button cname='toggler' action={toggleComments} text='Show opinions' />

      </section>
   )
}

export default Opinions