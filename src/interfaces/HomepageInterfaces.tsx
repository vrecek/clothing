import { IProductRate } from "./CommonInterfaces"

export interface ISlider {
   imagesNum: number,
   children: any
}

export interface ICategoryImage {
   source: string,
   header: string,
   url: string
}

export interface ICategoryList {
   url?: string
   name: string
}

export interface IMenuRight {
   url: string,
   header: string,
   image: string
}

export interface IMenuComponent {
   listArr: ICategoryList[][],
   rightDetails: IMenuRight 
}

export interface IHomepageProduct extends IProductRate {
   _id: string,
   name: string,
   image: string,
   price: number,
   discount?: number
}

export interface IItemsContainerText {
   hSmall: string,
   hBig: string
}

export interface IItemsContainerProducts {
   products: IHomepageProduct[]
}

export interface IPrice {
   price: number,
   discount?: number
}

export interface IItemsContainer extends IItemsContainerText, IItemsContainerProducts {}

export interface IInfoText {
   header: string,
   para: string
}

export interface IInfo extends IInfoText {
   image: string,
   btnText: string,
   url: string,
   txtCname: string
}

export interface IDailyHoverMenu {
   para: string,
   header: string,
   url?: string
}

export interface IDailyItem {
   url?: string,
   icon: JSX.Element,
   p1: string,
   h1: string,
   p2: string,
   h2: string,
}

export interface ITimeLeft {
   hours: number,
   minutes: number,
   seconds: number
}

export interface IHomepageFetchState {
   categoryProducts: {
      bigHeader: string,
      smallHeader: string,
      products: IHomepageProduct[]
   }[],

   discountedProduct: IDailyOffer
}

export interface IDailyOffer {
   image: string,
   name: string,
   price: number,
   discountPercent: number,
   _id: string
}

export interface IHiddenMenuList {
   url: string,
   icon: JSX.Element,
   name: string
}