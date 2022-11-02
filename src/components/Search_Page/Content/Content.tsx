import React from 'react'
import { IContent } from '../../../interfaces/SearchpageInterfaces'
import FiltersWrap from './Filters/FiltersWrap'
import NoProductsFound from './NoProductsFound'
import SearchedItem from './SearchedItem'

const Content = ({products, filtersState, type, query}: IContent) => {
   return (
      <section className="search-content">

         <FiltersWrap filtersState={filtersState} />

         <section className="container">

            {
               products.length 
               ?
                  products.map((x, i) => (
                     <SearchedItem
                        key={i}
                        _id={x._id}
                        name={x.name}
                        price={x.price}
                        starsSum={x.starsSum}
                        discountPercent={x.discountPercent}
                        totalVotes={x.totalVotes}
                        image={x.image}
                        details={x.details}
                        category={x.category}
                        views={x.views}
                        inStock={x.inStock}
                     />
                  ))
               :
                  <NoProductsFound type={type} query={query} />
            }

         </section>

      </section>
   )
}

export default Content