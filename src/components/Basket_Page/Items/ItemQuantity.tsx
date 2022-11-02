import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { removeBasketId } from '../../../functions/basketFunctions'
import getDiscountPrice from '../../../functions/getDiscountPrice'
import { IItemQuantity } from '../../../interfaces/BasketInterfaces'

const ItemQuantity = ({id, discountPercent, price, setPrice, setProducts, inStock}: IItemQuantity) => {
   const [quantity, setQuantity] = React.useState<number>(1)

   const removeFromBasket = (): void => {
      removeBasketId(id)

      setPrice(curr => curr - getDiscountPrice(price, discountPercent))
      setProducts(curr => {
         curr.content = curr.content!.filter(x => x._id.toString() !== id)
         return {...curr}
      })
   }

   const modifyPrice = (e: React.MouseEvent, type: '-' | '+'): void => {
      const t: HTMLElement = e.target as HTMLElement
      const para: HTMLElement = t.parentElement!.children[1] as HTMLElement

      const nextVal: number = type === '+' ? quantity + 1 : quantity - 1

      if(nextVal <= 0) {
         removeFromBasket()

         return
      }

      if(nextVal > inStock) return

      para.textContent = nextVal.toString()

      setPrice(curr => {
         const newVal: number = getDiscountPrice(price, discountPercent)
         return type === '+' ? curr + newVal : curr - newVal
      })
      setProducts(curr => {
         const index: number = curr.content!.findIndex(x => x._id.toString() === id)
         curr.content![index].quantity = nextVal

         return {...curr}
      })
      setQuantity(nextVal)
   }

   return (
      <section className="quantity">

         <span onClick={(e) => modifyPrice(e, '+')}><AiOutlinePlus /></span>
         <p>1</p>
         <span onClick={(e) => modifyPrice(e, '-')}><AiOutlineMinus /></span>

      </section>
   )
}

export default ItemQuantity