import DropDown from "../functions/DropdownClass"
import { IStateLoad } from "./CommonInterfaces"

export interface IFilterBody {
   defaultVal: string,
   pCname: string
}

export interface IFilterDefault extends IFilterBody {
   dd: DropDown
}

export interface IFilterDropdown extends IFilterBody, IFilterState {
   list: IFilterList[]
}

export interface IFilterList {
   str: string,
   status: Status
}

export interface IFilterState {
   filtersState: React.Dispatch<React.SetStateAction<IFilters>>
}

type Status = 0 | 1 | null
export interface IFilters {
   rating: Status,
   category: string | null,
   price: number | null
}
export const FiltersDefault = {
   rating: null,
   category: null,
   price: null
}

export interface ISearchedItem {
   image: string,
   name: string,
   starsSum: number,
   totalVotes: number,
   views: number,
   details: string[],
   price: number,
   category: string,
   discountPercent: number,
   inStock: number,
   _id: string
}

export interface ISearchPageParams {
   type: 'bar' | 'all',
   query: string,
   query2?: string
}

export interface IKeyNumber {
   [key: string]: number
}

export interface IProductPageCategoriesFetch {
   uniqueStrings: string[],
   counts: IKeyNumber
}

export interface IProductPageFetch {
   products: ISearchedItem[],
   productsOriginal: ISearchedItem[],
   categories: IProductPageCategoriesFetch
}

export interface IContent extends IFilterState, ISearchPageParams {
   products: ISearchedItem[]
}

export interface IAsideType extends IAsideCategories {
   query: string,
}

export interface IAsideCategories {
   categories: IProductPageCategoriesFetch,
   setFilters: React.Dispatch<React.SetStateAction<IFilters>>
}