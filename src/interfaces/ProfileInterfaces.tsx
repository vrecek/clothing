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