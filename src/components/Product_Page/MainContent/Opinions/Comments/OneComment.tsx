import React from 'react'
import { IOneCommentType } from '../../../../../interfaces/ProductPageInterfaces'
import FigureImage from '../../../../Common/FigureImage'
import blank from '../../../../../images/blank.png'
import AuthorAndDate from './AuthorAndDate'
import RateAndTitle from './RateAndTitle'

const OneComment = ({avatar, rate, title, date, text, authorName}: IOneCommentType) => {
   return (
      <article className="comment">

         <section className="user-info">

            <FigureImage source={avatar || blank} altTxt='Avatar' />

            <div className='wrap'>

               <RateAndTitle title={title} rate={rate} />

               <AuthorAndDate date={date} authorName={authorName} />

            </div>

         </section>

         <p className="text">{text}</p>

      </article>
   )
}

export default OneComment