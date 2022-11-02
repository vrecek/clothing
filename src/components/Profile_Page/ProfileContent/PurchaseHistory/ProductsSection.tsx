import React from 'react'
import { IProductItem } from '../../../../interfaces/ProfileInterfaces'
import ProductItem from './ProductItem'

const ProductsSection = ({items}: {items: IProductItem[]}) => {
    return (
        <section className="products">

            {
                items.map((x, i) => (
                    <ProductItem
                        key={i}
                        size={x.size}
                        quantity={x.quantity}
                        name={x.name}
                        company={x.company}
                        image={x.image}
                        price={x.price}
                    />
                ))
            }

        </section>
    )
}

export default ProductsSection