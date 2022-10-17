import React from 'react'
import '../../css/Search.css'
import { FiltersDefault, IContext, IFilterContext, IFilters, ISearchComponent } from '../../interfaces/SearchpageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import Aside from './Aside/Aside'
import Content from './Content/Content'
import SaleComponent from './SaleSection/SaleComponent'

const StateContext = React.createContext<IContext>(null)
const FilterContext = React.createContext<IFilterContext>(null)

const SEARCH_PAGE = ({saleComponent}: ISearchComponent) => {
   const [products, setProducts] = React.useState<any[]>([])
   const [filters, setFilters] = React.useState<IFilters>(FiltersDefault)

   React.useEffect(() => {
      window.scrollTo(0, 0)
   })

   return (
      <LayoutWrap>

         <main className="search-page">

            { saleComponent && <SaleComponent /> }

            <StateContext.Provider value={{products, func: setProducts}}>
            <FilterContext.Provider value={{filters, func: setFilters}}>

               <div className="main-page-wrap">

                  <Aside />
                  <Content />

               </div>

            </FilterContext.Provider>
            </StateContext.Provider>

         </main>

      </LayoutWrap>
   )
}

export default SEARCH_PAGE