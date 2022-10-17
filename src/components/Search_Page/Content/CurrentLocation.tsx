import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const CurrentLocation = () => {
   return (
      <div className="current-location">

         <Link to='/'>Homepage</Link>
         <span><MdKeyboardArrowRight /></span>
         <p className="active">Query lorem</p>

      </div>
   )
}

export default CurrentLocation