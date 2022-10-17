import DropDown from "../functions/DropdownClass"

export interface IFilterBody {
   defaultVal: string,
   pCname: string
}

export interface IFilterDefault extends IFilterBody {
   dd: DropDown
}

export interface IFilterDropdown extends IFilterBody {
   list: IFilterList[]
}

export interface IFilterList {
   str: string,
   status: Status
}


export type IContext = {
   products: any[],
   func: React.Dispatch<React.SetStateAction<any[]>>
} | null

export type IFilterContext = {
   filters: IFilters,
   func: React.Dispatch<React.SetStateAction<IFilters>>
} | null


type Status = 0 | 1 | null
export interface IFilters {
   alphabet: Status,
   rating: Status,
   views: Status,
   category: string | null,
   price: number | null
}
export const FiltersDefault = {
   alphabet: null,
   rating: null,
   views: null,
   category: null,
   price: null
}

export interface ISearchComponent {
   saleComponent?: boolean
}