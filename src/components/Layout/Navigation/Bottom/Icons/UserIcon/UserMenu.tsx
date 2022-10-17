import React from 'react'
import List from './List'
import NotLogged from './NotLogged'

const UserMenu = () => {
   return (
      <section className="nav-menu user-menu">

         <NotLogged />

         <List />

      </section>
   )
}

export default UserMenu