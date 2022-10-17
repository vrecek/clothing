import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Profile.css'
import MenuSelect from './MenuSelect/MenuSelect'
import UserInfo from './ProfileContent/UserInfo/UserInfo'

const PROFILE_PAGE = () => {
   window.scrollTo(0, 0)

   const [ContentComponent, setContent] = React.useState<JSX.Element>(<UserInfo />)
   
   return (
      <LayoutWrap>

         <main className="profile">

            <MenuSelect componentHook={setContent} />
            {ContentComponent}

         </main>

      </LayoutWrap>
   )
}

export default PROFILE_PAGE