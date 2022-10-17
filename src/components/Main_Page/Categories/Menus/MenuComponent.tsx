import React from 'react'
import { IMenuComponent } from '../../../../interfaces/HomepageInterfaces'
import ImageSection from './ImageSection'
import List from './List'

const MenuComponent = ({listArr, rightDetails}: IMenuComponent) => {
   const {url, image, header} = rightDetails

   return (
      <section className="hover-menu acc">

         <List lists={listArr} />

         <ImageSection source={image} url={url} header={header} />

      </section>
   )
}

export default MenuComponent