import React from 'react'
import '../../../../../css/Comments.css'
import { IFixedComment } from '../../../../../interfaces/ProductPageInterfaces'
import OneComment from './OneComment'

const CommentsContainer = ({comments}: {comments: IFixedComment[]}) => {
   return (
      <section className="comments">

         <h5>Comments ({comments.length})</h5>

         <section className="container">

            {
               comments.length
               ?
               comments.map((x, i) => (
                  <OneComment 
                     authorName={x.authorName}
                     title={x.title}
                     avatar={x.avatar}
                     rate={x.rate}
                     date={x.posted}
                     text={x.text}
                     key={i} 
                  />
               ))
               :
               <h2 className="empty">No comments yet</h2>

            }

         </section>

      </section>
   )
}

export default CommentsContainer