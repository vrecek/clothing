import React from 'react'
import getHomepageSectionInfo from '../../functions/getHomepageSectionInfo'
import { IHomepageProduct } from '../../interfaces/HomepageInterfaces'
import LayoutWrap from '../Layout/LayoutWrap'
import Categories from './Categories/Categories'
import DayOffer from './DayOffer/DayOffer'
import Header from './Header/Header'
import ItemsContainer from './ItemsContainer/ItemsContainer'
import SectionInfo from './SectionInfo/SectionInfo'

const MAIN_PAGE = () => {
   const prods: IHomepageProduct[] = [
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolors itamet coneqstur elit lol xd',
         price: 999,
         rating: 4,
         discount: 40
      },
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolor',
         price: 999,
         rating: 4
      },
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolor',
         price: 999,
         rating: 4
      },
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolor',
         price: 999,
         rating: 4
      },
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolor',
         price: 999,
         rating: 4
      },
      {
         id: '1',
         image: 'https://specials-images.forbesimg.com/imageserve/625b119e0ef820de3d2d2452/PUMA-PROADAPT-ALPHACAT-Men-s-Golf-Shoes/960x0.jpg?cropX1=0&cropX2=767&cropY1=0&cropY2=767',
         name: 'Lorem ipsumdolor',
         price: 999,
         rating: 4
      },
   ]

   const [is1, is2, is3] = getHomepageSectionInfo()

   React.useEffect(() => {
      window.scrollTo(0, 0)
   })

   return (
      <LayoutWrap withBar={true}>

         <main className="homepage">

            <Header />  
            <Categories />
            
            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />

            <SectionInfo
               txtCname={is1.txtCname} 
               header={is1.header}
               para={is1.para}
               image={is1.image}
               btnText={is1.btnText}
               url={is1.url}
            />

            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />

            <DayOffer />

            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />

            <SectionInfo
               txtCname={is2.txtCname} 
               header={is2.header}
               para={is2.para}
               image={is2.image}
               btnText={is2.btnText}
               url={is2.url}
            />

            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />
            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />
            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />

            <SectionInfo
               txtCname={is3.txtCname} 
               header={is3.header}
               para={is3.para}
               image={is3.image}
               btnText={is3.btnText}
               url={is3.url}
            />

            <ItemsContainer hSmall='Lorem ipsumdo' hBig='Coneqastur elit' products={prods} />

         </main>

      </LayoutWrap>
   )
}

export default MAIN_PAGE