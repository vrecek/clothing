import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ProductPage.css'
import MainContent from './MainContent/MainContent'
import CommentsContainer from './MainContent/Opinions/Comments/CommentsContainer'
import ShowOtherProducts from './ShowProducts/ShowOtherProducts'

const PRODUCT_PAGE = () => {
   React.useEffect(() => {
      window.scrollTo(0, 0)
   })

   return (
      <LayoutWrap>

         <main className="product-page">

            <MainContent />
            
            <CommentsContainer />

            <ShowOtherProducts />
            <ShowOtherProducts />

         </main>

      </LayoutWrap>
   )
}

export default PRODUCT_PAGE