export interface IFigureImage {
   altTxt?: string,
   cname?: string,
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

export type Ref = React.RefObject<HTMLDivElement>