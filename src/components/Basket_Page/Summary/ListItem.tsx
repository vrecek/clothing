import React from 'react'
import { ISummaryList } from '../../../interfaces/BasketInterfaces'

const ListItem = ({name, value, cname}: ISummaryList) => {
   return (
      <li>

         <p className="what">{name}</p>
         <p className={`value ${cname ?? ''}`}>{value}</p>

      </li>
   )
}

export default ListItem