import React from 'react'

const SelectForm = () => {
   const changeForm = (e: React.MouseEvent, dir: 'sign' | 'register'): void => {
      const t: HTMLElement = e.target as HTMLElement
      const formSect: HTMLElement = t.parentElement!.parentElement!.children[1].children[0] as HTMLElement
      const options: Element[] = Array.from(t.parentElement!.children)

      for(let x of options) x.classList.remove('active')
      t.classList.add('active')

      formSect.style.translate = dir === 'sign' ? '0 0' : '-100% 0'
   }

   return (
      <section className="select-form">

         <div onClick={(e) => changeForm(e, 'sign')} className='active'>Sign in</div>
         <div onClick={(e) => changeForm(e, 'register')}>Register</div>

      </section>
   )
}

export default SelectForm