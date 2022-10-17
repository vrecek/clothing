import React from 'react'
import addFilter from '../../../../functions/addFilter'

const PriceFilter = () => {
   const priceChange = (e: React.ChangeEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement
      const para: HTMLElement = t.parentElement!.children[0] as HTMLElement

      para.textContent = `${t.value} $+`
   }

   const applyFilter = (e: React.MouseEvent): void => {
      const t: HTMLInputElement = e.target as HTMLInputElement

      const activeCont: HTMLElement = t.parentElement!.parentElement!.parentElement!.parentElement!.children[1] as HTMLElement
      const p: HTMLElement = t.parentElement!.children[0] as HTMLElement

      addFilter(
         {
            activeCont, 
            filterText: `${t.value} $+`, 
            id: 'price'
         },
         undefined,
         {
            defaultVal: '0 $+',
            currentPara: p
         }
      )
   }

   return (
      <div className="price filter">

         <p>0 $</p>
         <input onMouseUp={applyFilter} 
            
            onChange={priceChange} 
            step='1' 
            min='0' 
            max='1000' 
            type="range" 
         />

      </div>
   )
}

export default PriceFilter