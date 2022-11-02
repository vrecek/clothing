import React from 'react'

const ListInfo = ({details}: {details: string[]}) => {
   return (
      <ul>

         {
            details.map((x, i) => (
               <li key={i}>
                  {x}
               </li>
            ))
         }

      </ul>
   )
}

export default ListInfo