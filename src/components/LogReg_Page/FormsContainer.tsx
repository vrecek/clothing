import React from 'react'
import Login from './Login/Login'
import Register from './Register/Register'

const FormsContainer = () => {
   return (
      <section className="forms">

         <div className="move">

            <Login />
            <Register />

         </div>

      </section>
   )
}

export default FormsContainer