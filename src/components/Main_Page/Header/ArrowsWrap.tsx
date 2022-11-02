import React from 'react'
import { Ref } from '../../../interfaces/CommonInterfaces'
import {BsArrowRightCircle, BsArrowLeftCircle} from 'react-icons/bs'
import { ISlider } from '../../../interfaces/HomepageInterfaces'

const ArrowsWrap = ({children, imagesNum}: ISlider) => {
   const contRef: Ref = React.useRef<HTMLDivElement>(null)
   const DELAY: number = 6000
   let hasMoved: boolean = false
   let interval: NodeJS.Timer

   const getCounter = (): number => parseInt(contRef.current!.children[1].getAttribute('data-counter') ?? '0')
   const setCounter = (num: number): number => {
      contRef.current!.children[1].setAttribute('data-counter', num.toString())

      return getCounter()
   }

   const animateClick = (elem: HTMLElement): void => {
      elem.style.background = 'orangered'
      elem.style.color = 'orangered'
      elem.style.scale = '.7'

      setTimeout(() => {
         elem.style.scale = '1'
         elem.style.background = 'none'
         elem.style.color = 'whitesmoke'
      }, 200);
   }

   const moveSlider = (e: React.MouseEvent, direction: 'left' | 'right'): void => {
      if(hasMoved) return
      hasMoved = true

      clearInterval(interval)
      interval = setInterval(intervalFunc, DELAY)

      const t: HTMLElement = e.target as HTMLElement
      const slider: HTMLElement = t.parentElement!.children[1] as HTMLElement

      animateClick(t)

      let counter: number = getCounter()
      if(!counter) return

      direction === 'left' ? counter-- : counter++

      slider.style.transition = '1s'
      slider.style.translate = `-${counter * 100}% 0`
      setCounter(counter)
   }

   const intervalFunc = (): void => {
      if(!document.hasFocus() || !contRef?.current) return

      const counter: number = setCounter(getCounter() + 1)
      const slider: HTMLElement = contRef.current!.children[1] as HTMLElement

      slider.style.transition = '1s'
      slider.style.translate = `-${counter * 100}% 0`
   }

   React.useEffect(() => {
      const slider: HTMLElement = contRef.current!.children[1] as HTMLElement

      interval = setInterval(intervalFunc, DELAY)

      slider.addEventListener('transitionend', () => {
         const counter: number = getCounter()

         if(counter >= imagesNum + 1) {
            slider.style.transition = '0s'
            slider.style.translate = '-100% 0'
            slider.setAttribute('data-counter', '1')
         }

         else if(counter <= 0) {
            slider.style.transition = '0s'
            slider.style.translate = `-${imagesNum * 100}% 0`
            setCounter(imagesNum)
         }

         hasMoved = false
      })
   }, [])

   return (
      <section ref={contRef} className="slider">

         <span onClick={(e) => moveSlider(e, 'left')} className="slider-arrow">
            <BsArrowLeftCircle />
         </span>

         {children}

         <span onClick={(e) => moveSlider(e, 'right')} className="slider-arrow">
            <BsArrowRightCircle />
         </span>

      </section>
   )
}

export default ArrowsWrap