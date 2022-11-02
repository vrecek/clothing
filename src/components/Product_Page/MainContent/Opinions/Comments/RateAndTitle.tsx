import React from 'react'
import { IRateAndTitle } from '../../../../../interfaces/ProductPageInterfaces'
import ProductRate from '../../../../Main_Page/ItemsContainer/ProductRate'

const RateAndTitle = ({rate, title}: IRateAndTitle) => {
    return (
        <div>

            <ProductRate starsSum={rate} totalVotes={0} />
            <p className="name">{title}</p>

        </div>
    )
}

export default RateAndTitle