import React from 'react'
import { IFixedUserOrderType } from '../../../../interfaces/ProfileInterfaces'
import DropdownParagraph from './DropdownParagraph'
import InfoSection from './InfoSection'
import ProductsSection from './ProductsSection'

const OrderComponent = ({history}: {history: IFixedUserOrderType}) => {
    const {totalPrice, orderDate, orderInfo, finalized} = history

    return (
        <article className="order">

            <InfoSection 
                price={totalPrice}
                date={orderDate}
                status={finalized}
                country={orderInfo.country}
                payment={orderInfo.payment}
                delPrice={orderInfo.delivery.price}
                delType={orderInfo.delivery.name}
            />

            <DropdownParagraph />

            <ProductsSection items={history.products} />

        </article>
    )
}

export default OrderComponent