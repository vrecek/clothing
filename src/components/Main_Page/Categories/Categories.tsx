import React from 'react'
import '../../../css/Categories.css'
import { IMenuComponent } from '../../../interfaces/HomepageInterfaces'
import Menu from './Menu'
import MenuComponent from './Menus/MenuComponent'
import accImg from '../../../images/Category menu/acc.jpg'
import clothingImg from '../../../images/Category menu/clothing.jpg'
import footwearImg from '../../../images/Category menu/footwear.jpg'
import saleImg from '../../../images/Category menu/sale.jpg'
import { FaTimes } from 'react-icons/fa'

const Categories = () => {
   const accObj: IMenuComponent = {
      listArr: [[
         { name: 'Jewelery' },
         { url: '/', name: 'Rings', icon: <FaTimes /> },
         { url: '/', name: 'Sigils', icon: <FaTimes /> },
         { url: '/', name: 'Necklaces', icon: <FaTimes /> },
         { url: '/', name: 'Piercings', icon: <FaTimes /> }
      ],

      [
         { name: 'Gadgets' },
         { url: '/', name: 'Watches', icon: <FaTimes /> }
      ]],

      rightDetails: { url: '/', header: 'Stylish jewelery', image: accImg }
   }

   const clothingObj: IMenuComponent = {
      listArr: [[
         { name: 'Top clothing' },
         { url: '/', name: 'Hoodies', icon: <FaTimes /> },
         { url: '/', name: 'T-shirts', icon: <FaTimes /> },
         { url: '/', name: 'Tops', icon: <FaTimes /> },
         { url: '/', name: 'Sleeveless shirt', icon: <FaTimes /> },
         { url: '/', name: 'Jacket', icon: <FaTimes /> },
         { url: '/', name: 'Suits', icon: <FaTimes /> },
         { url: '/', name: 'Vests', icon: <FaTimes /> },
      ],

      [
         { name: 'Pants' },
         { url: '/', name: 'Jeans', icon: <FaTimes /> },
         { url: '/', name: 'Sweatpants', icon: <FaTimes /> },
         { url: '/', name: 'Shorts', icon: <FaTimes /> },
         { url: '/', name: 'Leggins', icon: <FaTimes /> },
         { url: '/', name: 'Joggers', icon: <FaTimes /> },
         { url: '/', name: 'Suit pants', icon: <FaTimes /> },
         { url: '/', name: 'Underwear', icon: <FaTimes /> },
         { url: '/', name: 'Boxers', icon: <FaTimes /> },
      ]],
      
      rightDetails: { url: '/', header: 'In fashion', image: clothingImg }
   }

   const footwearObj: IMenuComponent = {
      listArr: [[
         { name: 'Type' },
         { url: '/', name: 'Sneakers', icon: <FaTimes /> },
         { url: '/', name: 'High boots', icon: <FaTimes /> },
         { url: '/', name: 'Crocs', icon: <FaTimes /> },
         { url: '/', name: 'Boots', icon: <FaTimes /> },
         { url: '/', name: 'Combat boots', icon: <FaTimes /> },
         { url: '/', name: 'Heels', icon: <FaTimes /> },
         { url: '/', name: 'Suit shoes', icon: <FaTimes /> },
         { url: '/', name: 'Hiking boots', icon: <FaTimes /> },
         { url: '/', name: 'Slippers', icon: <FaTimes /> },
         { url: '/', name: 'Flats', icon: <FaTimes /> },
         { url: '/', name: 'Sandals', icon: <FaTimes /> },
      ],

      [
         { name: 'Company' },
         { url: '/', name: 'Nike', icon: <FaTimes /> },
         { url: '/', name: 'Adidas', icon: <FaTimes /> },
         { url: '/', name: 'New balance', icon: <FaTimes /> },
         { url: '/', name: 'Puma', icon: <FaTimes /> },
         { url: '/', name: 'Asics', icon: <FaTimes /> },
         { url: '/', name: 'Kering', icon: <FaTimes /> },
         { url: '/', name: 'Burberry', icon: <FaTimes /> },
      ]],
      
      rightDetails: { url: '/', header: 'Best footwear', image: footwearImg }
   }

   const saleObj: IMenuComponent = {
      listArr: [[
         { name: 'Price' },
         { url: '/', name: '<10 $', icon: <FaTimes /> },
         { url: '/', name: '<25 $', icon: <FaTimes /> },
         { url: '/', name: '<50 $', icon: <FaTimes /> },
         { url: '/', name: '<100 $', icon: <FaTimes /> },
         { url: '/', name: '>100 $', icon: <FaTimes /> },
      ],

      [
         { name: 'Percent' },
         { url: '/', name: '1-10%', icon: <FaTimes /> },
         { url: '/', name: '11-20%', icon: <FaTimes /> },
         { url: '/', name: '21-30%', icon: <FaTimes /> },
         { url: '/', name: '31-40%', icon: <FaTimes /> },
         { url: '/', name: '41-50%', icon: <FaTimes /> },
         { url: '/', name: 'Any', icon: <FaTimes /> },
      ],

      [
         { name: 'Type' },
         { url: '/', name: 'Footwear', icon: <FaTimes /> },
         { url: '/', name: 'Hoodies', icon: <FaTimes /> },
         { url: '/', name: 'Hats', icon: <FaTimes /> },
         { url: '/', name: 'T-shirts', icon: <FaTimes /> },
         { url: '/', name: 'Tops', icon: <FaTimes /> },
         { url: '/', name: 'Jewelery', icon: <FaTimes /> },
         { url: '/', name: 'Underwear', icon: <FaTimes /> },
      ]],
      
      rightDetails: { url: '/', header: 'Best discounts', image: saleImg }
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

            <li className='category'>
               On sale 
               <MenuComponent listArr={saleObj.listArr} rightDetails={saleObj.rightDetails}  />
            </li>

            <li className='category'>
               Latest
            </li>

         </ul>

      </nav>
   )
}

export default Categories