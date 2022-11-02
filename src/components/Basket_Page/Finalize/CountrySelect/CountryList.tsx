import React from 'react'
import { ICountryList } from '../../../../interfaces/BasketInterfaces'

const CountryList = ({dd, setState}: ICountryList) => {
   const listOfCountries: string[] = [
      'Poland',
      'Germany',
      'United Kingdom',
      'France'
   ]

   const setCountry = (e: React.MouseEvent, country: string): void => {
      const t: HTMLElement = e.target as HTMLElement
      const currentDiv: HTMLElement = t.parentElement!.parentElement!.children[1].children[0] as HTMLElement

      currentDiv.textContent = country

      dd.switchActive()
      dd.shrinkMenu(.3)

      setState(curr => {
         curr.country = country

         return {...curr}
      })
   }

   return (
      <ul className="hidden">

         {
            listOfCountries.map((x, i) => (
               <li onClick={(e) => setCountry(e, x)} key={i}>
                  {x}
               </li>
            ))
         }

      </ul>
   )
}

export default CountryList