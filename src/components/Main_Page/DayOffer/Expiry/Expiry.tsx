import React, { useRef } from 'react'
import FigureImage from '../../../Common/FigureImage'
import image from '../../../../images/expiry.jpg'
import { Ref } from '../../../../interfaces/CommonInterfaces'
import { ITimeLeft } from '../../../../interfaces/HomepageInterfaces'

const Expiry = () => {
   const timeRef: Ref = useRef<HTMLDivElement>(null)

   React.useEffect(() => {
      let interval = setInterval(() => {
         const now: Date = new Date(Date.now())
         const time: ITimeLeft = {
            hours: 24 - now.getHours() - 1,
            minutes: 60 - now.getMinutes() - 1,
            seconds: 60 - now.getSeconds() - 1
         }

         try {
            const c: HTMLElement = timeRef.current!

            c.textContent = 
            `
            ${`0${time.hours}`.slice(-2)} : 
            ${`0${time.minutes}`.slice(-2)} : 
            ${`0${time.seconds}`.slice(-2)}
            `

         }catch(err) {
            clearInterval(interval)
            return
         }
      }, 1000)
   }, [])

   return (
      <section className="expiry">

         <FigureImage source={image} />

         <article>

            <h2>New offer in:</h2>
            <h3 ref={timeRef}></h3>

         </article>

      </section>
   )
}

export default Expiry