import React from 'react'
import FigureImage from '../../../../Common/FigureImage'
import ProductRate from '../../../../Main_Page/ItemsContainer/ProductRate'

const OneComment = () => {
   return (
      <article className="comment">

         <section className="user-info">

            <FigureImage source='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' altTxt='Avatar' />

            <div className='wrap'>

               <div>
                  <ProductRate rate={4} />
                  <p className="name">Lorem ipsum</p>
               </div>

               <p className="date">Today</p>

            </div>

         </section>

         <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dicta est facilis harum libero rerum optio ea deserunt excepturi molestiae iure, eaque itaque nisi repellat, reiciendis veniam in rem minima!</p>

      </article>
   )
}

export default OneComment