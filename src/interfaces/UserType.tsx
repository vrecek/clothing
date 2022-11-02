export type UserRole = 'admin' | 'user'

export interface UserAvatar {
   url: string,
   filename: string
}

export default interface UserType {
   _id: string,
   username: string,
   mail: string,
   hash: string,
   salt: string,
   role: UserRole,
   avatar: UserAvatar,
   orders: UserOrderType[]
}

export interface UserOrderType {
   products: UserOrderProduct[],
   orderInfo: UserOrderInfo,
   orderDate: number,
   finalized: boolean,
   totalPrice: number,
   orderId: string
}

export interface UserOrderInfo {
   delivery: UserOrderDelivery,
   payment: string,
   country: string
}

export interface UserOrderDelivery {
   price: number,
   name: string
}

export interface UserOrderProduct {
   id: string,
   size: string,
   quantity: number,
   price: number
}

export type PossibleUser = UserType | null