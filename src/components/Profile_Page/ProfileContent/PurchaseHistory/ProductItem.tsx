import React from 'react'
import { IProductItem } from '../../../../interfaces/ProfileInterfaces'
import FigureImage from '../../../Common/FigureImage'

const ProductItem = ({image, name, company, price, size, quantity}: IProductItem) => {
    return (
        <article className="item">

            <FigureImage source={image} altTxt='Product' />

            <div className="text">
                <p className="company">{company}</p>
                <p className="name">{name}</p>
            </div>

            <div className="misc">
                <p>Size: <span>{size}</span></p>
                <p>Quantity: <span>{quantity}</span></p>
            </div>

            <div className="price">
                <p>{price} $</p>
            </div>

        </article>
    )
}

export default ProductItem