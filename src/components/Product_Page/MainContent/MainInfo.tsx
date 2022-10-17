import React from 'react'
import Button from '../../Common/Button'
import Price from '../../Main_Page/ItemsContainer/Price'
import ProductRate from '../../Main_Page/ItemsContainer/ProductRate'
import SelectSize from './SelectSize/SelectSize'
import '../../../css/MainInfo.css'

const MainInfo = () => {
   return (
      <section className="main-info">

         <div>

            <h3 className="company">Company</h3>
            <h1 className='name'>Lorem ipsumdolr sitametelit</h1>

         </div>

         <div>

            <Price price={55} discount={10} />
            <p className="tax">(Tax included)</p>

            <ProductRate rate={4} />

         </div>

         <SelectSize />

         <Button text='Add to cart' />

      </section>
   )
}

export default MainInfo