import React from 'react'
import { IRateHook } from '../../../../../../interfaces/ProductPageInterfaces'
import RatingForm from './RatingForm'

const TextareaAndStars = ({rateHook}: IRateHook) => {
    return (
        <div className="tas">

            <input maxLength={15} placeholder='Title...' type="text" spellCheck='false' />
            <textarea placeholder='Text...' spellCheck='false'></textarea>

            <RatingForm rateHook={rateHook} />

        </div>
    )
}

export default TextareaAndStars