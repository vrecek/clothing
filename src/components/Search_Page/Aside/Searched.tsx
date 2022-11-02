import React from 'react'

const Searched = ({query}: {query: string}) => {
   return (
      <div className="query">

         <h6>Searched</h6>
         <h1>{query}</h1>

      </div>
   )
}

export default Searched