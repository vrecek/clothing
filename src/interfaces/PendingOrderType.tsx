export default interface PendingOrderType {
    _id: string,
    userId: string,
    orderDate: number,
    products: PendingProduct[],
    totalPrice: number,
    orderInfo: PendingInfo,
    finalized: boolean
}

export interface PendingProduct {
    id: string,
    size: string,
    quantity: number
}

export interface PendingDelivery {
    price: number,
    name: string
}

export interface PendingInfo {
    country: string,
    payment: string,
    delivery: PendingDelivery
}

export interface IFixedPendingOrder extends Omit<PendingOrderType, 'products'> {
    products: IFixedPendingProduct[]
}

export interface IFixedPendingProduct extends PendingProduct {
    name: string,
    company: string,
    image: string,
    price: number
}