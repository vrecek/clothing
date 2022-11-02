import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const TextInfo = () => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <div className="text">

            <h1>Successfully made the order</h1>
            <p>
                You can view your pending orders in the <span onClick={() => n('/profile', { replace: true })}>Profile</span> section
            </p>

        </div>
    )
}

export default TextInfo