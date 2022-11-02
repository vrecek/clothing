import React from 'react'
import Button from '../../Common/Button'
import Price from '../../Main_Page/ItemsContainer/Price'
import ProductRate from '../../Main_Page/ItemsContainer/ProductRate'
import SelectSize from './SelectSize/SelectSize'
import '../../../css/MainInfo.css'
import { IRightMainInfo } from '../../../interfaces/ProductPageInterfaces'
import IconLinks from './IconLinks'
import { isInCart, setBasketId } from '../../../functions/basketFunctions'
import {IoCheckmarkSharp} from 'react-icons/io5'
import { FaTimes } from 'react-icons/fa'

const MainInfo = ({company, name, price, discount, starSum, totalVotes, sizes, id, inStock}: IRightMainInfo) => {
   const [size, setSize] = React.useState<string>('')
   const isInStock: boolean = inStock > 0

   const addToCart = (e: React.MouseEvent): void => {
      if(!isInStock) return

      const t: HTMLElement = e.target as HTMLElement

      if(!size) {
         const selectDiv: HTMLElement = t.parentElement!.children[2].children[1] as HTMLElement

         selectDiv.style.borderColor = 'red'
         setTimeout(() => selectDiv.style.borderColor = '#303030', 1000)

         return
      }

      t.className = 'true'
      setBasketId(id, size)
   }

   const additionalSVG: JSX.Element = isInStock ? <IoCheckmarkSharp /> : <FaTimes />
   const btnCname: string = 
   !isInStock ? 'empty' : 
   isInCart(id) ? 'true' : 
   'false'

   return (
      <section className="main-info">

         <div>

            <h3 className="company">{company}</h3>
            <h1 className='name'>{name}</h1>

         </div>

         <div>

            <Price price={price} discount={discount} />

            <ProductRate starsSum={starSum} totalVotes={totalVotes} />

         </div>

         <SelectSize currentSize={size} setSize={setSize} sizes={sizes} />

         <IconLinks inStock={inStock} />

         <Button cname={btnCname} additional={additionalSVG} action={addToCart} text='Add to cart' />

      </section>
   )
}

export default MainInfo