import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Basket.css'
import Items from './Items/Items'
import Summary from './Summary/Summary'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import { IBasketProduct } from '../../interfaces/ProductType'
import { DefaultLoadState, IStateLoad } from '../../interfaces/CommonInterfaces'
import { LoadingCss } from '../../functions/Loading'
import getDiscountPrice from '../../functions/getDiscountPrice'
import { PossibleUser } from '../../interfaces/UserType'
import { UserContext } from '../../App'
import { IBasketFetchState } from '../../interfaces/BasketInterfaces'

const BASKET_PAGE = () => {
   const [products, setProducts] = React.useState<IStateLoad<IBasketProduct[]>>(DefaultLoadState)
   const [stockInfo, setStockInfo] = React.useState<string | null>(null)
   const [totalPrice, setPrice] = React.useState<number>(0)

   const n: NavigateFunction = useNavigate()
   const user: PossibleUser = React.useContext(UserContext)

   React.useEffect(() => {
      if(!user) {
         n('/credentials/login', { replace: true })
         return
      }

      const init = async () => {
         const l: LoadingCss = new LoadingCss()
         l.defaultStyleDots()
         l.append(document.body)

         try {
            const data = await Fetches.mix<IBasketFetchState>(process.env.REACT_APP_PRODUCT_GET_BASKET!, 'GET')
            if(data.json.stockInformation) {
               setStockInfo(data.json.stockInformation)
            }

            setProducts({
               finished: true,
               content: data.json.products
            })

            setPrice(data.json.products.reduce((p, c) => p + getDiscountPrice(c.price, c.discountPercent), 0))

         }catch(err: any) {
            n('/error', {
               replace: true,
               state: Fetches.returnFetchErrorState(err)
            })

         }finally { l.remove() }
      }
      init()
   }, [])

   if(user && products.finished && products.content)
   return (
      <LayoutWrap>

         <main className="basket-page">

            <Items stockInfo={stockInfo} setProducts={setProducts} setPrice={setPrice} products={products.content} />
            <Summary products={products.content} priceSum={totalPrice} />

         </main>

      </LayoutWrap>
   )

   return <></>
}

export default BASKET_PAGE