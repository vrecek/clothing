import React from 'react'
import { IDailyItem } from '../../../../interfaces/HomepageInterfaces'
import ItemHover from './ItemHover'

const FirstItem = ({p1, p2, h1, h2, url, icon}: IDailyItem) => {
   return (
      <div className="item">

         <span>{icon}</span>

         <h6>{h1}</h6>
         <p>{p1}</p>

         <ItemHover header={h2} para={p2} url={url} />

      </div>
   )
}

export default FirstItem