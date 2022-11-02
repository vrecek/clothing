import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const StarTypeInfo = ({number}: {number: number}) => {
    return (
        <div className='first'>

            <span><AiFillStar /></span>
            <p>{number}</p>

        </div>
    )
}

export default StarTypeInfo