import DropDown from "../functions/DropdownClass"
import { IStateLoad } from "./CommonInterfaces"
import { IBasketProduct } from "./ProductType"

export interface ISummaryList {
   name: string,
   value: string | number | null,
   cname?: string
}

export interface IBasketFetchState {
   products: IBasketProduct[],
   stockInformation: string | null
}

export interface IDeliveryOption extends ISetState {
   price: number,
   name: string
}

export interface IPaymentOption extends ISetState {
   text: IOrderPayment,
   source: string
}

export interface IItemText {
   company: string,
   name: string
}

export interface IItemPrice {
   price: number,
   discountPercent: number
}

export interface ISummary {
   products: IBasketProduct[], 
   priceSum: number
}

export interface IItemsComponent extends IStateHook {
   products: IBasketProduct[],
   stockInfo: string | null
}

export interface IOneItemComponent extends IStateHook {
   product: IBasketProduct,
   inStock: number
}

export interface IStateHook {
   setPrice: React.Dispatch<React.SetStateAction<number>>,
   setProducts: React.Dispatch<React.SetStateAction<IStateLoad<IBasketProduct[]>>>
}

export interface IItemQuantity extends IStateHook {
   id: string, 
   discountPercent: number, 
   price: number,
   inStock: number
}

export interface IFinalizeLocation {
   products: IBasketProduct[]
}

export interface IConclusionItem {
   image: string,
   price: number,
   name: string,
   company: string,
   discountPercent: number,
   quantity: number
}

export type IOrderPayment = 'PayPal' | 'Credit card' | 'Pay in advance'
export interface IOrderDelivery {
   price: number,
   name: string
}

export interface IOrderInfoState {
   country: string | null,
   payment: IOrderPayment | null,
   delivery: IOrderDelivery | null
}

export const DefaultOrderInfo: IOrderInfoState = {
   country: null,
   payment: null,
   delivery: null
}

export interface ISetState {
   setState: React.Dispatch<React.SetStateAction<IOrderInfoState>>
}

export interface IConclusion {
   products: IBasketProduct[],
   orderInfo: IOrderInfoState
}

export interface ICurrentCountry {
   dd: DropDown
}

export interface ICountryList extends ICurrentCountry, ISetState {}

export interface IFinalComponentLocation {
   allow: boolean
}