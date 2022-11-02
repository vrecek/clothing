import React from 'react'
import { UserContext } from '../../../../../../App'
import { PossibleUser } from '../../../../../../interfaces/UserType'
import List from './List'
import Logged from './Logged'
import NotLogged from './NotLogged'

const UserMenu = () => {
   const user: PossibleUser = React.useContext(UserContext)

   return (
      <section className="nav-menu user-menu">

         {
            user ? <Logged username={user.username} /> : <NotLogged />
         }

         <List userRole={user?.role} />

      </section>
   )
}

export default UserMenu