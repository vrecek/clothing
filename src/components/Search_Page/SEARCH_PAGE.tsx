import React from 'react'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../../css/Search.css'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { DefaultLoadState, IStateLoad } from '../../interfaces/CommonInterfaces'
import { FiltersDefault, IFilters, IProductPageFetch, ISearchPageParams } from '../../interfaces/SearchpageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import Aside from './Aside/Aside'
import Content from './Content/Content'
import SaleComponent from './SaleSection/SaleComponent'

const SEARCH_PAGE = () => {
   const [products, setProducts] = React.useState<IStateLoad<IProductPageFetch>>(DefaultLoadState)
   const [filters, setFilters] = React.useState<IFilters>(FiltersDefault)

   const location: Location = useLocation()
   const n: NavigateFunction = useNavigate()

   const {type, query, query2} = useParams() as Readonly<ISearchPageParams>

   React.useEffect(() => {
      window.scrollTo(0, 0)

      setProducts(DefaultLoadState)

      const init = async () => {
         const l: LoadingCss = new LoadingCss()
         l.defaultStyleDots()
         l.append(document.body)

         try {
            const data = await Fetches.mix<IProductPageFetch>(`${process.env.REACT_APP_PRODUCT_SEARCH}/${type}/${query}/${query2}`, 'GET')
            setProducts({
               finished: true,
               content: {
                  products: data.json.products,
                  productsOriginal: data.json.products,
                  categories: data.json.categories
               }
            })

         }catch(err: any) {
            n('/error', {
               replace: true,
               state: { code: err.code, msg: err.json.msg }
            })

         }finally { l.remove() }
      }
      init()
   }, [location])

   React.useEffect(() => {
      if(!products?.content) return

      const {price, rating, category} = filters
      let filteredProducts = [...products.content.productsOriginal]

      // Category
      if(category && category !== 'all') {
         filteredProducts = filteredProducts.filter(x => x.category === category)
      }

      // Price
      if(price != null) {
         filteredProducts = filteredProducts.filter(x => x.price <= price)
      }

      // Rating
      if(rating != null) {
         filteredProducts = filteredProducts.sort(
            (a, b) => rating === 0 ? a.starsSum - b.starsSum : b.starsSum - a.starsSum
         )
      }

      setProducts((curr) => {
         curr.content!.products = filteredProducts

         return {...curr}
      })
   }, [filters])

   const canDisplaySaleComponent = (): boolean => {
      if(
         type === 'all' && 
         query === 'sale' && 
         products.content?.products.length
      ) return true

      return false
   }

   if(products.finished && products.content)
   return (
      <LayoutWrap>

         <main className="search-page">

            { canDisplaySaleComponent() && <SaleComponent /> }

            <div className="main-page-wrap">

               <Aside 
                  categories={products.content.categories}
                  query={query} 
                  setFilters={setFilters}
               />

               <Content 
                  products={products.content.products} 
                  filtersState={setFilters}
                  type={type}
                  query={query}
               />

            </div>

         </main>

      </LayoutWrap>
   )

   return <></>
}

export default SEARCH_PAGE