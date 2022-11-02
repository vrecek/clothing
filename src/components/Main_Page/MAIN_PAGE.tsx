import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import getHomepageSectionInfo from '../../functions/getHomepageSectionInfo'
import { LoadingCss } from '../../functions/Loading'
import { DefaultLoadState, IStateLoad } from '../../interfaces/CommonInterfaces'
import { IHomepageFetchState } from '../../interfaces/HomepageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import Categories from './Categories/Categories'
import DayOffer from './DayOffer/DayOffer'
import Header from './Header/Header'
import ItemsContainer from './ItemsContainer/ItemsContainer'
import SectionInfo from './SectionInfo/SectionInfo'

const MAIN_PAGE = () => {
   const [products, setProducts] = React.useState<IStateLoad<IHomepageFetchState>>(DefaultLoadState)
   const n: NavigateFunction = useNavigate()

   const [is1, is2, is3] = getHomepageSectionInfo()

   React.useEffect(() => {
      window.scrollTo(0, 0)

      const init = async () => {
         const l: LoadingCss = new LoadingCss()
			l.defaultStyleDots()
			l.append(document.body)

         try {
            const data = await Fetches.mix<IHomepageFetchState>(process.env.REACT_APP_PRODUCT_VIEW_HOMEPAGE!, 'GET')
            setProducts({
               finished: true,
               content: data.json
            })

         }catch(err: any) {
            n('/error', {
               replace: true,
               state: { code: 500, msg: err.json.msg }
            })

         }finally { l.remove() }
      }
      init()
   }, [])

   if(products.finished && products.content) {
      const {categoryProducts} = products.content

      return (
         <LayoutWrap withBar={true}>
   
            <main className="homepage">
   
               <Header />  
               <Categories />
               
               <ItemsContainer hSmall={categoryProducts[0].smallHeader} hBig={categoryProducts[0].bigHeader} products={categoryProducts[0].products} />
   
               <SectionInfo
                  txtCname={is1.txtCname} 
                  header={is1.header}
                  para={is1.para}
                  image={is1.image}
                  btnText={is1.btnText}
                  url={is1.url}
               />
   
               <ItemsContainer hSmall={categoryProducts[1].smallHeader} hBig={categoryProducts[1].bigHeader} products={categoryProducts[1].products} />
   
               <DayOffer product={products.content.discountedProduct} />
   
               <ItemsContainer hSmall={categoryProducts[2].smallHeader} hBig={categoryProducts[2].bigHeader} products={categoryProducts[2].products} />
   
               <SectionInfo
                  txtCname={is2.txtCname} 
                  header={is2.header}
                  para={is2.para}
                  image={is2.image}
                  btnText={is2.btnText}
                  url={is2.url}
               />
   
               <ItemsContainer hSmall={categoryProducts[3].smallHeader} hBig={categoryProducts[3].bigHeader} products={categoryProducts[3].products} />
               <ItemsContainer hSmall={categoryProducts[4].smallHeader} hBig={categoryProducts[4].bigHeader} products={categoryProducts[4].products} />
               <ItemsContainer hSmall={categoryProducts[5].smallHeader} hBig={categoryProducts[5].bigHeader} products={categoryProducts[5].products} />
   
               <SectionInfo
                  txtCname={is3.txtCname} 
                  header={is3.header}
                  para={is3.para}
                  image={is3.image}
                  btnText={is3.btnText}
                  url={is3.url}
               />
   
               <ItemsContainer hSmall={categoryProducts[6].smallHeader} hBig={categoryProducts[6].bigHeader} products={categoryProducts[6].products} />
   
            </main>
   
         </LayoutWrap>
      )
   }
   
   return <></>
}

export default MAIN_PAGE