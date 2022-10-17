import React from 'react'

const InputDiv = ({text}: {text: string}) => {
   return (
      <div className="input">

         <p>{text}</p>
         <input type="text" spellCheck='false' />

      </div>
   )
}

export default InputDiv