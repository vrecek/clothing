import { IInfo } from "../interfaces/HomepageInterfaces"
import shuffleArray from "./shuffleArray"
import img1 from '../images/Homepage info/img1.jpg'
import img2 from '../images/Homepage info/img2.jpg'
import img3 from '../images/Homepage info/img3.jpg'

const getHomepageSectionInfo = (): IInfo[] => {
   return shuffleArray([
      {
         header: 'Looking for a discounts?',
         para: 'Explore our discounted offers and get something for yourself', 
         image: img1,
         btnText: 'Check for discounts',
         url: '/search/all/sale',
         txtCname: 'light'
      },
      
      {
         header: 'Check our latest products',
         para: 'Check out our latest clothes, maybe you will like them', 
         image: img2,
         btnText: 'Explore',
         url: '/search/all/latest',
         txtCname: 'light'
      },

      {
         header: 'Any issues ?',
         para: 'Contact us if you have encountered any problems', 
         image: img3,
         btnText: 'Contact us',
         url: '/contact',
         txtCname: 'dark'
      },
   ])
}

export default getHomepageSectionInfo