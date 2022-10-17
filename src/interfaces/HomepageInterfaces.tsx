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
   url?: string,
   icon?: JSX.Element
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

export interface IHomepageProduct {
   id: string,
   name: string,
   image: string,
   price: number,
   rating: number,
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