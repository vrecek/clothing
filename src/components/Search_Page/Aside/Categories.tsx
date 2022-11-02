import React from 'react'
import { IAsideCategories } from '../../../interfaces/SearchpageInterfaces'

const Categories = ({categories, setFilters}: IAsideCategories) => {
   const categoryFilter = (e: React.MouseEvent, txt: string): void => {
      if(!categories) return

      const t: HTMLElement = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)

      for(const x of children) x.className = ''
      t.className = 'active'

      setFilters((curr) => {
         curr.category = txt

         return {...curr}
      })
   }

   const total: number = Object.values(categories?.counts ?? []).reduce((p, c) => p + c, 0)

   return (
      <section className="categories-num">

         {
            categories
            &&
            <ul>

               <li className='active' onClick={(e) => categoryFilter(e, 'all')}>
                  All ({total})
               </li>

               {
                  Object.entries(categories.counts).map((x, i) => (
                     <li key={i} onClick={(e) => categoryFilter(e, x[0])}>
                        { x[0] } ({ x[1] }) 
                     </li>
                  ))
               }

            </ul>
         }

      </section>
   )
}

export default Categories