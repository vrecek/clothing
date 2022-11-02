import React from 'react'
import FigureImage from '../../Common/FigureImage'
import noProducts from '../../../images/noproducts.png'
import { ISearchPageParams } from '../../../interfaces/SearchpageInterfaces'

const NoProductsFound = ({type, query}: ISearchPageParams) => {
    const displayEmptyText = (): JSX.Element => {
        if(type === 'bar') return (
            <>
                <p className='info'>No products found for:</p>
                <p className="query">{query}</p>
            </>
        )

        return (
            <p className='info'>No {query} products found</p>
        )
    }

    return (
        <div className="no-found">

            { displayEmptyText() }
            <FigureImage source={noProducts} altTxt='No products' />

        </div>
    )
}

export default NoProductsFound