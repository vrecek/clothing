import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { IRateHook } from '../../../../../../interfaces/ProductPageInterfaces'

const RatingForm = ({rateHook}: IRateHook) => {
    const setRate = (e: React.MouseEvent, num: number): void => {
        const t: HTMLElement = e.target as HTMLElement

        const children: Element[] = Array.from(t.parentElement!.children)
        for(let i = 0; i < 5; i++) {
            children[i].className = i <= num ? 'active' : ''
        } 

        rateHook(num + 1)
    }

    return (
        <div className="rating-form">

            {
                [...Array(5)].map((x, i) => (
                    <span onClick={(e) => setRate(e, i)} key={i}>
                        <AiFillStar />
                    </span>
                ))
            }

        </div>
    )
}

export default RatingForm