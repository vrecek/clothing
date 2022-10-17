export interface INavigation {
   withUpper?: boolean
}

export interface ILayoutWrap {
   withBar?: boolean,
   children: any
}

export interface IListIcon {
   icon: JSX.Element,
   hiddenComponent: JSX.Element
}

export interface IUserMenuList {
   str: string,
   icon: JSX.Element,
   url: string
}