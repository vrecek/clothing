import React from 'react'
import addFilter from '../../../../functions/addFilter'
import { IFilterState } from '../../../../interfaces/SearchpageInterfaces'

const PriceFilter = ({filtersState}: IFilterState) => {
   const priceChange = (e: React.ChangeEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      const para: HTMLElement = t.parentElement!.children[0] as HTMLElement

      para.textContent = `${t.value} $+`
   }

   const deleteCallback = (): void => {
      filtersState((curr) => {
         curr.price = null

         return {...curr}
      })
   }

   const applyFilter = (e: React.MouseEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      const activeCont: HTMLElement = t.parentElement!.parentElement!.parentElement!.parentElement!.children[0] as HTMLElement
      const p: HTMLElement = t.parentElement!.children[0] as HTMLElement

      const value = parseInt(t.value ?? '0')

      addFilter(
         {
            activeCont, 
            filterText: `${value} $+`, 
            id: 'price',
            deleteCb: deleteCallback
         },
         undefined,
         {
            defaultVal: '0 $+',
            currentPara: p
         }
      )

      filtersState((curr) => {
         curr.price = value

         return {...curr}
      })
   }

   return (
      <div className="price filter">

         <p>0 $</p>
         <input 
            onChange={priceChange} 
            onMouseUp={applyFilter} 
            onTouchEnd={(e) => applyFilter(e as any)}
            step='1' 
            min='0' 
            max='1000' 
            type="range" 
         />

      </div>
   )
}

export default PriceFilter