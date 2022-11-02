import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { IoCheckmarkSharp } from 'react-icons/io5'
import { IStockInfoObject } from '../../../interfaces/ProductPageInterfaces'

const StockInfo = ({inStock}: {inStock: number}) => {
    const stockDisplay: IStockInfoObject = 
    inStock > 0 ?
        {
            cname: 'true',
            text: 'Available',
            icon: <IoCheckmarkSharp />
        }
    :
        {
            cname: 'false',
            text: 'Not available',
            icon: <FaTimes />
        }

    return (
        <div className={stockDisplay.cname}>

            <span>{stockDisplay.icon}</span>
            <p>{stockDisplay.text}</p>

        </div>
    )
}

export default StockInfo