import React from 'react'
import { AiFillFacebook } from 'react-icons/ai'
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

const FooterIcons = () => {
   const GTH: string = 'https://github.com/vrecek'

   return (
      <div className="icons">

         <span><AiFillFacebook /></span>
         <span onClick={() => window.open(GTH, '_blank')} ><FaGithubSquare /></span>
         <span><FaInstagramSquare /></span>
         <span><FaLinkedin /></span>

      </div>
   )
}

export default FooterIcons