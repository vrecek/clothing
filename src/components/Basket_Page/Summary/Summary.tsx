import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../Common/Button'
import Coupon from './Coupon'
import ListItem from './ListItem'

const Summary = () => {
   const n: NavigateFunction = useNavigate()
   
   const finalizeRedirect = (e: React.MouseEvent): void => {
      const t: HTMLElement = e.target as HTMLElement

      n('/finalize', {
         state: {
            allow: true
         }
      })
   }

   return (
      <section className="summary">

         <ul>

            <ListItem name={`Products`} value={5} />
            <ListItem name={`Delivery`} value={`2 $`} />

            <Coupon />

            <ListItem cname='big' name={`Total`} value={`999 $`} />

         </ul>

         <Button action={finalizeRedirect} text='Continue' />

      </section>
   )
}

export default Summary