import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { IDailyHoverMenu } from '../../../../interfaces/HomepageInterfaces'
import Button from '../../../Common/Button'

const ItemHover = ({para, header, url}: IDailyHoverMenu) => {
   const n: NavigateFunction = useNavigate()

   return (
      <section className="menu-hover">

         <h6>{header}</h6>
         <p>{para}</p>
         
         { url && <Button action={() => n(url)} text='Explore' /> }

      </section>
   )
}

export default ItemHover