export default interface ProductType {
   _id: string,
   company: string,
   name: string,
   mainImage: IImageObject,
   price: number,
   description: string,
   sizes: string[],
   views: number,
   materials: string[],
   inStock: number,
   details: string[],
   additionalImages: IImageObject[],
   discountPercent: number,
   addedTime: number,
   rating: IProductRating,
   category: string,
   additionalCategory: string,
   comments: ProductComment[]
}

export interface IProductRating {
   one: number,
   two: number,
   three: number,
   four: number,
   five: number
}

export interface IImageObject {
   url: string,
   filename: string
}

export interface ProductComment {
   text: string,
   title: string,
   posted: number,
   authorId: string,
   rate: number
}

export interface IBasketProduct {
   image: string,
   _id: string,
   price: number,
   name: string,
   company: string,
   discountPercent: number,
   size: string,
   quantity: number,
   inStock: number
}