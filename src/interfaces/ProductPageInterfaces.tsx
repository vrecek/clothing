import DropDown from "../functions/DropdownClass"
import { IProductRate, IStateLoad } from "./CommonInterfaces"
import ProductType, { IProductRating, ProductComment } from "./ProductType"
import { IProductItem } from "./ProfileInterfaces"
import { UserOrderProduct, UserOrderType } from "./UserType"

export interface ISumDiv {
   totalNumberRating: number,
   rateNumber: number, 
   totalRating: number
}

export interface IDropdownItem {
   title: string,
   content: string | string[]
}

export interface IShowedItem {
   mainImage: { url: string },
   name: string,
   discountPercent: number,
   price: number,
   _id: string
}

export interface IFixedComment extends ProductComment {
   avatar: string,
   authorName: string
}

export interface IFixedProduct extends Omit<ProductType, 'comments'> { comments: IFixedComment[] }

export interface IMainProduct extends IProductRate, IFixedProduct {
   inStock: number
}

export interface IProductFetch {
   main: IMainProduct,
   related: IShowedItem[],
   lastSearched: IShowedItem[]
}

export interface IMainImage {
   image: string,
   additionalImages: string[]
}

export interface IRightMainInfo {
   company: string,
   name: string,
   price: number, 
   discount: number,
   starSum: number, 
   totalVotes: number, 
   id: string,
   sizes: string[],
   inStock: number
}

export interface IStockInfoObject {
   text: string,
   icon: JSX.Element,
   cname: string
}

export interface ISize extends ISizeCommon {
   currentSize: string
}

export interface ISizeCommon {
   sizes: string[]
   setSize: React.Dispatch<React.SetStateAction<string>>
}

export interface ISizeList extends ISizeCommon {
   dd: DropDown
}

export interface ISizeCurrent {
   dd: DropDown
   currentSize: string
}

export interface IDropdownsContent {
   materials: string[],
   description: string,
   details: string[]
}

export interface IOpinionsComponent {
   rating: IProductRating,
   id: string
}

export interface IOtherProducts {
   products: IShowedItem[]
   title: string
}

export interface IRateHook {
   rateHook: React.Dispatch<React.SetStateAction<number>>
}

export interface IOneCommentType {
   avatar: string, 
   authorName: string
   rate: number, 
   title: string, 
   date: number, 
   text: string
}

export interface IAuthorAndDate {
   date: number,
   authorName: string
}

export interface IRateAndTitle {
   title: string,
   rate: number
}