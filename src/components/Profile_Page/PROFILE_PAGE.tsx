import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Profile.css'
import MenuSelect from './MenuSelect/MenuSelect'
import UserInfo from './ProfileContent/UserInfo/UserInfo'
import { PossibleUser } from '../../interfaces/UserType'
import { UserContext } from '../../App'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const PROFILE_PAGE = () => {
   window.scrollTo(0, 0)

   const user: PossibleUser = React.useContext(UserContext)
   const [ContentComponent, setContent] = React.useState<JSX.Element>(<UserInfo mail={user?.mail ?? ''} name={user?.username ?? ''} />)
   const n: NavigateFunction = useNavigate()

   React.useEffect(() => {
      if(!user) n('/credentials/login', { replace: true })
   }, [])
   
   if(user)
   return (
      <LayoutWrap>

         <main className="profile">

            <MenuSelect componentHook={setContent} />
            {ContentComponent}

         </main>

      </LayoutWrap>
   )

   return <></>
}

export default PROFILE_PAGE