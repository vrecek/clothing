import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Button from '../../../Common/Button'

const EmptyComponent = () => {
    const n: NavigateFunction = useNavigate()
    
    return (
        <section className="empty">

            <p>No purchase history found</p>
            <Button action={() => n('/search/all/popular')} text='Start shopping' />

        </section>
    )
}

export default EmptyComponent