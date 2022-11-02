import { IStateLoad } from "./CommonInterfaces"
import { UserOrderProduct, UserOrderType } from "./UserType"

export interface IUserDetail {
   what: string,
   value: string,
   type?: 'text' | 'password',
   inputClass: string,
   divClass?: string
}

export interface IProfileMenu {
   componentHook: React.Dispatch<React.SetStateAction<JSX.Element>> 
}

export interface IMenuList {
   name: string,
   componentToSet: JSX.Element
}

export interface IUserInfo {
   name: string,
   mail: string
}

export interface IFilterSelect {
   setState: React.Dispatch<React.SetStateAction<IStateLoad<IOrdersState>>>
}

export interface IInfoObject {
   name: string,
   value: string,
   cname?: string
}

export interface IInfoSection {
   date: number, 
   price: number,
   country: string, 
   payment: string, 
   delPrice: number, 
   delType: string, 
   status: boolean
}

export interface IProductItem {
   image: string,
   name: string,
   company: string,
   price: number,
   quantity: number,
   size: string
}

export interface IFixedUserOrderType extends Omit<UserOrderType, 'products'> {
   products: IProductItem[]
}

export interface IReadyComponent {
   setHistory: React.Dispatch<React.SetStateAction<IStateLoad<IOrdersState>>>,
   historyState: IOrdersState
}

export interface IPurchaseSection {
   userId: string
}

export interface IOrdersState {
   original: IFixedUserOrderType[]
   products: IFixedUserOrderType[]
}