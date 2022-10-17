import React from 'react'
import { IInfoText } from '../../../interfaces/HomepageInterfaces'

const TextParagraphs = ({header, para}: IInfoText) => {
   return (
      <div className="paragraphs">

         <h1>{header}</h1>
         <p>{para}</p>

      </div>
   )
}

export default TextParagraphs