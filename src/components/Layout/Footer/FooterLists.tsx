import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { INameUrl } from '../../../interfaces/CommonInterfaces'

const FooterLists = () => {
   const n: NavigateFunction = useNavigate()

   const list1: INameUrl[] = [
      { name: 'Homepage', url: '/' },
      { name: 'Contact', url: '/contact' },
      { name: 'Profile', url: '/profile' },
      { name: 'Login', url: '/credentials/login' },
   ]

   const list2: INameUrl[] = [
      { name: 'Discount', url: '/search/all/sale' },
      { name: 'Latest', url: '/search/all/latest' },
      { name: 'Popular', url: '/search/all/popular' }
   ]

   return (
      <div className='list-wrap'>
         
         <ul>

            <li>Links</li>
            {
               list1.map((x, i) => (
                  <li onClick={() => n(x.url)} key={i}>
                     {x.name}
                  </li>
               ))
            }

         </ul>
         
         <ul>

            <li>Products</li>
            {
               list2.map((x, i) => (
                  <li onClick={() => n(x.url)} key={i}>
                     {x.name}
                  </li>
               ))
            }

         </ul>

      </div>
   )
}

export default FooterLists