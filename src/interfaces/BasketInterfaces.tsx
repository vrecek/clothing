export interface ISummaryList {
   name: string,
   value: string | number,
   cname?: string
}

export interface IDeliveryOption {
   price: number,
   name: string
}

export interface IPaymentOption {
   text: string,
   source: string
}