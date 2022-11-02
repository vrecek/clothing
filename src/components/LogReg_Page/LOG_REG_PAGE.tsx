import React from 'react'
import { NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import { IParams } from '../../interfaces/LogRegInterfaces';
import LayoutWrap from '../Layout/LayoutWrap';
import SelectForm from './SelectForm';
import '../../css/LogReg.css'
import FormsContainer from './FormsContainer';
import { Ref } from '../../interfaces/CommonInterfaces';
import { PossibleUser } from '../../interfaces/UserType';
import { UserContext } from '../../App';

const LOG_REG_PAGE = () => {
   const wrapRef: Ref = React.useRef<HTMLDivElement>(null)
   const param: IParams = useParams()?.type as IParams
   const n: NavigateFunction = useNavigate()
   const location = useLocation()
   const user: PossibleUser = React.useContext(UserContext)

   React.useEffect(() => {
      window.scrollTo(0, 0)

      if(user || (param !== 'login' && param !== 'register')) {
         n('/', { replace: true })
         return
      }

      const c: HTMLElement = wrapRef.current!
      const formSect: HTMLElement = c.children[1].children[0] as HTMLElement
      const selectBtns: Element[] = Array.from(c.children[0].children)

      if(param === 'register') {
         selectBtns[0].classList.remove('active')
         selectBtns[1].classList.add('active')

         formSect.style.translate = '-100% 0'

         return
      }

      selectBtns[1].classList.remove('active')
      selectBtns[0].classList.add('active')

      formSect.style.translate = '0 0'
   }, [location])

   if(!user && !(param !== 'login' && param !== 'register')) {
      return (
         <LayoutWrap>
   
            <main className="login-register">
   
               <section ref={wrapRef} className="wrap">

                  <SelectForm />

                  <FormsContainer />

               </section>
   
            </main>
   
         </LayoutWrap>
      )
   }
   

   return <></>
}

export default LOG_REG_PAGE