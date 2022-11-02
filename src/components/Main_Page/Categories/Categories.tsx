import React from 'react'
import '../../../css/Categories.css'
import { IMenuComponent } from '../../../interfaces/HomepageInterfaces'
import Menu from './Menu'
import MenuComponent from './Menus/MenuComponent'
import accImg from '../../../images/Category menu/acc.jpg'
import clothingImg from '../../../images/Category menu/clothing.jpg'
import footwearImg from '../../../images/Category menu/footwear.jpg'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const Categories = () => {
   const n: NavigateFunction = useNavigate()

   const accObj: IMenuComponent = {
      listArr: [[
         { name: 'Jewelery' },
         { url: '/', name: 'Rings' },
         { url: '/', name: 'Sigils' },
         { url: '/', name: 'Necklaces' },
         { url: '/', name: 'Piercings' }
      ],

      [
         { name: 'Gadgets' },
         { url: '/', name: 'Watches' }
      ]],

      rightDetails: { url: '/', header: 'Stylish jewelery', image: accImg }
   }

   const clothingObj: IMenuComponent = {
      listArr: [[
         { name: 'Top clothing' },
         { url: '/', name: 'Hoodies' },
         { url: '/', name: 'T-shirts' },
         { url: '/', name: 'Tops' },
         { url: '/', name: 'Sleeveless shirt' },
         { url: '/', name: 'Jacket' },
         { url: '/', name: 'Suits' },
         { url: '/', name: 'Vests' },
      ],

      [
         { name: 'Pants' },
         { url: '/', name: 'Jeans' },
         { url: '/', name: 'Sweatpants' },
         { url: '/', name: 'Shorts' },
         { url: '/', name: 'Leggins' },
         { url: '/', name: 'Joggers' },
         { url: '/', name: 'Suit pants' },
         { url: '/', name: 'Underwear' },
         { url: '/', name: 'Boxers' },
      ]],
      
      rightDetails: { url: '/', header: 'In fashion', image: clothingImg }
   }

   const footwearObj: IMenuComponent = {
      listArr: [[
         { name: 'Type' },
         { url: '/', name: 'Sneakers' },
         { url: '/', name: 'High boots' },
         { url: '/', name: 'Crocs' },
         { url: '/', name: 'Boots' },
         { url: '/', name: 'Combat boots' },
         { url: '/', name: 'Heels' },
         { url: '/', name: 'Suit shoes' },
         { url: '/', name: 'Hiking boots' },
         { url: '/', name: 'Slippers' },
         { url: '/', name: 'Flats' },
         { url: '/', name: 'Sandals' },
      ],

      [
         { name: 'Company' },
         { url: '/', name: 'Nike' },
         { url: '/', name: 'Adidas' },
         { url: '/', name: 'New balance' },
         { url: '/', name: 'Puma' },
         { url: '/', name: 'Asics' },
         { url: '/', name: 'Kering' },
         { url: '/', name: 'Burberry' },
      ]],
      
      rightDetails: { url: '/', header: 'Best footwear', image: footwearImg }
   }

   return (
      <nav className="categories">

         <Menu />

         <ul className='categories'>

            <li className='category'>
               Accessories 
               <MenuComponent listArr={accObj.listArr} rightDetails={accObj.rightDetails}  />
            </li>

            <li className='category'>
               Clothes 
               <MenuComponent listArr={clothingObj.listArr} rightDetails={clothingObj.rightDetails}  />
            </li>

            <li className='category'>
               Footwear
               <MenuComponent listArr={footwearObj.listArr} rightDetails={footwearObj.rightDetails}  />
            </li>

            <li onClick={() => n('/search/all/sale')} className='category'>
               On sale 
            </li>

            <li onClick={() => n('/search/all/popular')} className='category'>
               Popular
            </li>

            <li onClick={() => n('/search/all/latest')} className='category'>
               Latest
            </li>

         </ul>

      </nav>
   )
}

export default Categories