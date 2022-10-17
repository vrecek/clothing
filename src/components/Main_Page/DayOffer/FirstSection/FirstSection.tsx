import React from 'react'
import { IDailyItem } from '../../../../interfaces/HomepageInterfaces'
import FirstItem from './FirstItem'
import {TbTruckDelivery, TbDiscount2} from 'react-icons/tb'
import { HiOutlineReceiptRefund } from 'react-icons/hi'
import { BiPhoneCall } from 'react-icons/bi'

const FirstSection = () => {
   const items: IDailyItem[] = [
      {
         h1: 'Delivery',
         h2: 'Quick and safe',
         p1: 'Fast delivery',
         p2: 'We guarantee you will see your product(s)',
         icon: <TbTruckDelivery />
      },

      {
         h1: 'Contact',
         h2: 'Full time contact',
         p1: 'Contact at any time',
         p2: 'We will answer to our clients',
         url: '/contact',
         icon: <BiPhoneCall />
      },

      {
         h1: 'Discounts',
         h2: 'Save money',
         p1: 'Cheaper products',
         p2: 'Browse through all discounted products',
         url: '/search/sale',
         icon: <TbDiscount2 />
      },

      {
         h1: 'Refunds',
         h2: 'Refund your products',
         p1: 'Anytime you want',
         p2: 'Your money will be returned to your account',
         icon: <HiOutlineReceiptRefund />
      },
   ]

   return (
      <article className="first-section">

         {
            items.map((x, i) => (
               <FirstItem
                  key={i}
                  p1={x.p1}
                  p2={x.p2}
                  h1={x.h1}
                  h2={x.h2}
                  url={x?.url}
                  icon={x.icon}
               />
            ))
         }

      </article>
   )
}

export default FirstSection