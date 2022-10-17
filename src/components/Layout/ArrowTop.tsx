import React, { useRef } from 'react'
import { MdArrowCircleUp } from 'react-icons/md'
import { Ref } from '../../interfaces/CommonInterfaces'

const ArrowTop = () => {
   const arrRef: Ref = useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      const c: HTMLElement = arrRef.current!
      let visible: boolean = false

      window.addEventListener('scroll', () => {
         if(window.scrollY > 400 && !visible) {
            c.style.opacity = '1'
            c.style.pointerEvents = 'all'
            visible = true
         }
         else if(window.scrollY <= 400 && visible) {
            c.style.opacity = '0'
            c.style.pointerEvents = 'none'
            visible = false
         }
      })
   }, [])

   return (
      <div ref={arrRef} className="arrow-top">

         <span onClick={() => window.scrollTo(0, 0)}><MdArrowCircleUp /></span>

      </div>
   )
}

export default ArrowTop