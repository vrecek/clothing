import React from 'react'
import { IDivInput } from '../../interfaces/LogRegInterfaces'

const InputDiv = ({label, type, cname}: IDivInput) => {
   return (
      <div className={`input ${cname ?? ''}`}>

         <label>{label}</label>
         <input type={type} />

      </div>
   )
}

export default InputDiv