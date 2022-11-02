import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ProductPage.css'
import MainContent from './MainContent/MainContent'
import CommentsContainer from './MainContent/Opinions/Comments/CommentsContainer'
import ShowOtherProducts from './ShowProducts/ShowOtherProducts'
import Fetches from '../../functions/Fetches'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import { DefaultLoadState, IStateLoad } from '../../interfaces/CommonInterfaces'
import { IProductFetch } from '../../interfaces/ProductPageInterfaces'
import { LoadingCss } from '../../functions/Loading'

const PRODUCT_PAGE = () => {
   const [products, setProducts] = React.useState<IStateLoad<IProductFetch>>(DefaultLoadState)
   const location: Location = useLocation()
   const n: NavigateFunction = useNavigate()
   const {id} = useParams()
   
   React.useEffect(() => {
      window.scrollTo(0, 0)

      const init = async () => {
         const l: LoadingCss = new LoadingCss()
         l.defaultStyleDots()
         l.append(document.body)

         try {
            const data = await Fetches.mix<IProductFetch>(`${process.env.REACT_APP_PRODUCT_GET_ONE}/${id}`, 'GET')
            setProducts({
               finished: true,
               content: data.json
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

   if(products.finished && products.content)
   return (
      <LayoutWrap>

         <main className="product-page">

            <MainContent product={products.content.main} />
            
            <CommentsContainer comments={products.content.main.comments} />

            <ShowOtherProducts title='Related' products={products.content.related} />
            <ShowOtherProducts title='Last searched' products={products.content.lastSearched} />

         </main>

      </LayoutWrap>
   )

   return <></>
}

export default PRODUCT_PAGE