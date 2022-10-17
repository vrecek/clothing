import React from 'react'
import {MdArrowForwardIos, MdArrowBackIos} from 'react-icons/md'

const MoveArrows = () => {
   let currX: number = 0

   const moveContainer = (e: React.MouseEvent, dir: 'left' | 'right'): void => {
      const t: HTMLElement = e.target as HTMLElement
      const cont: HTMLElement = t.parentElement!.parentElement!.children[2].children[0] as HTMLElement
      const width: number = cont.children[0].clientWidth

      const newX: number = currX + (dir === 'left' ? width : -width)

      if(newX > 0 || -newX >= cont.clientWidth) return

      currX = newX
      cont.style.translate = `${currX}px 0`
   }

   return (
      <section className="arrows">

         <span onClick={(e) => moveContainer(e, 'left')}><MdArrowBackIos /></span>
         <span onClick={(e) => moveContainer(e, 'right')}><MdArrowForwardIos /></span>

      </section>
   )
}

export default MoveArrows