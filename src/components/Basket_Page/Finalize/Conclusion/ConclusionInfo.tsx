import React from 'react'
import { ISummaryList } from '../../../../interfaces/BasketInterfaces'

const ConclusionInfo = ({name, value}: ISummaryList) => {
   const isNull: boolean = !value

   return (
      <div className="info">

         <p className="what">{name}</p>

         <p className={`value ${isNull.toString()}`}>
            {value ?? 'Not set'}
         </p>

      </div>
   )
}

export default ConclusionInfo