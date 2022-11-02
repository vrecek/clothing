import React from 'react'
import Button from '../Common/Button'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Error.css'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { ErrorLocationState } from '../../interfaces/ErrorPageInterfaces'

const ERROR_PAGE = () => {
   const state = useLocation()?.state as ErrorLocationState
   const n: NavigateFunction = useNavigate()

   React.useEffect(() => {
      if(!state) n('/', { replace: true })
   })


   if(state) {
      const {msg, code} = state
      
      let defString: string
      switch(code) {
         case 400: 
            defString = 'Bad request'
         break;

         case 401: 
            defString = 'Unauthorized'
         break;

         case 403: 
            defString = 'Forbidden'
         break;

         case 404: 
            defString = 'Not found'
         break;

         case 500: 
            defString = 'Internal server error'
         break;

         default: defString = 'Unkown error'
      }  

      return (
         <LayoutWrap>
   
            <main className="error-page">
   
               <h1>Oops!</h1>
               
               <h2 className='info'>
                  {code} - {defString}
               </h2>
   
               <p>{msg}</p>
   
               <Button 
                  action={() => window.location.href = '/'} 
                  text='Back to homepage' 
               />
   
            </main>
   
         </LayoutWrap>
      )
   }

   return <></>
}

export default ERROR_PAGE