import React from 'react'
import DropDown from '../../../../functions/DropdownClass'
import { ISetState } from '../../../../interfaces/BasketInterfaces'
import InfoPara from '../InfoPara'
import CountryList from './CountryList'
import CurrentCountry from './CurrentCountry'

const CountrySelect = ({setState}: ISetState) => {
   const [dd] = React.useState<DropDown>(new DropDown())

   return (
      <section className="country-select">

         <InfoPara>Select your country</InfoPara>

         <CurrentCountry dd={dd} />

         <CountryList dd={dd} setState={setState} />

      </section>
   )
}

export default CountrySelect