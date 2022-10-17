import React from 'react'

const Categories = () => {
   const cat = [
      'All (999)',
      'Lorem (30)',
      'Ipsum (95)',
      'Dolors (19)',
      'Conqestaur (49)',
      'Elitstil (9)'
   ]

   const categoryFilter = (e: React.MouseEvent, txt: string): void => {
      const t: HTMLElement = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)

      for(const x of children) x.className = ''
      t.className = 'active'
   }

   return (
      <section className="categories-num">

         <ul>

            {
               cat.map((x, i) => (
                  <li key={i} className={i === 0 ? 'active' : ''} onClick={(e) => categoryFilter(e, x)}>
                     {x}
                  </li>
               ))
            }

         </ul>

      </section>
   )
}

export default Categories