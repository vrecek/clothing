import { IInfo } from "../interfaces/HomepageInterfaces"
import shuffleArray from "./shuffleArray"
import img1 from '../images/Homepage info/img1.jpg'
import img2 from '../images/Homepage info/img2.jpg'
import img3 from '../images/Homepage info/img3.jpg'

const getHomepageSectionInfo = (): IInfo[] => {
   return shuffleArray([
      {
         header: 'Lorem ipsumsit amet',
         para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, veniam meslati.', 
         image: img1,
         btnText: 'Explore offer',
         url: '/',
         txtCname: 'light'
      },
      
      {
         header: 'Lorem ipsumsit amet',
         para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, veniam meslati.', 
         image: img2,
         btnText: 'Explore offer',
         url: '/',
         txtCname: 'light'
      },

      {
         header: 'Lorem ipsumsit amet',
         para: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, veniam meslati.', 
         image: img3,
         btnText: 'Explore offer',
         url: '/',
         txtCname: 'dark'
      },
   ])
}

export default getHomepageSectionInfo