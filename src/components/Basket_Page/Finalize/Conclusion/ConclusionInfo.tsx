import React from 'react'
import { ISummaryList } from '../../../../interfaces/BasketInterfaces'

const ConclusionInfo = ({name, value}: ISummaryList) => {
   return (
      <div className="info">

         <p className="what">{name}</p>
         <p className="value">{value}</p>

      </div>
   )
}

export default ConclusionInfo