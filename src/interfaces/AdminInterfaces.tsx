import {PendingInfo} from './PendingOrderType'

export interface IAsideLI extends ISetContent {
   icon: JSX.Element,
   name: string,
   setComponent: JSX.Element,
   cname?: string
}

export interface ISetContent {
   setRight: React.Dispatch<React.SetStateAction<JSX.Element>>
}

export interface IAddDiv {
   label: string,
   cname?: string,
   inpType?: string,
   asTextarea?: boolean
}

export interface IAddMultipleDiv extends IInputsIcons {
   label: string,
}

export interface IInputsIcons {
   inputCname: string,
   max: number,
   min: number,
   type: string
}

export interface ICompanyAndName {
   company: string,
   name: string
}

export interface IStockAndRate {
   inStock: number,
   starRate: number
}

export interface IProductDetails {
   category: string, 
   discount: number, 
   addDate: string, 
   desc: string, 
   sizes: string[],
   materials: string[],
   details: string[],
   commNum: number,
   id: string,
   additionalCategory: string
}

export interface IViewedProducts extends IStockAndRate, IProductDetails, ICompanyAndName {
   image: string,
   price: number, 
   id: string
}

export interface IDetail {
   what: string,
   value: string | number | string[],
   cname?: string
}

export interface IFetchResult {
   children: string,
   cname?: string
}

export interface IInfoSection extends IBasicInfo, IOrderInfo, IOrderOptions {}

export interface IBasicInfo {
   userId: string, 
   orderDate: number, 
   totalCost: number
}

export interface IOrderInfo {
   orderInfo: PendingInfo
}

export interface IOrderOptions {
   orderId: string
}