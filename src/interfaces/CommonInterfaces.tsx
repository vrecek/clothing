import React from "react"

export interface IFigureImage {
   altTxt?: string,
   cname?: string,
   clickAction?: (e: React.MouseEvent, source: string) => void
   source: string
}

export interface IChildren {
   children: any
}

export interface IButton {
   text: string,
   additional?: any,
   cname?: string,
   action?: React.MouseEventHandler
}

export type Inputs = HTMLCollectionOf<HTMLInputElement>
export type Ref = React.RefObject<HTMLDivElement>

export interface IStateLoad<T = any> {
   finished: boolean,
   content: T | null,
   error?: string | null
}

export const DefaultLoadState: IStateLoad = {
   finished: false,
   content: null,
   error: null
}

export interface IFetchErr {
   json: {
      msg: string
   }
}

export interface IProductRate {
   totalVotes: number,
   starsSum: number
}

export interface INameUrl {
   name: string,
   url: string
}