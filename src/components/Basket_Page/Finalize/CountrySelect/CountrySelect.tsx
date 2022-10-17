import React from 'react'
import InfoPara from '../InfoPara'
import CountryList from './CountryList'
import CurrentCountry from './CurrentCountry'

const CountrySelect = () => {
   return (
      <section className="country-select">

         <InfoPara>Select your country</InfoPara>

         <CurrentCountry />

         <CountryList />

      </section>
   )
}

export default CountrySelect