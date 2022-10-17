import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { ICategoryList } from '../../../../interfaces/HomepageInterfaces'

const List = ({lists}: {lists: ICategoryList[][]}) => {
   const n: NavigateFunction = useNavigate()
   const redirectFunc = (url?: string): void => {
      if(!url) return

      n(url)
   }

   return (
      <>
         {
            lists.map((x, i) => (
               <ul key={i}>
                  {
                     x.map((y, j) => (
                        <li onClick={() => redirectFunc(y.url)} key={j}>

                           { y?.icon && <span>{y.icon}</span> }
                           <p>{y.name}</p>

                        </li>
                     ))
                  }
               </ul>
            ))
         }
      </>
      
   )
}

export default List