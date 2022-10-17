import React from 'react'
import '../../../../../css/Comments.css'
import OneComment from './OneComment'

const CommentsContainer = () => {
   return (
      <section className="comments">

         <h5>Comments (99)</h5>

         <section className="container">

            {/* <h2 className="empty">No comments yet</h2> */}

            <OneComment />
            <OneComment />
            <OneComment />
            <OneComment />

         </section>

      </section>
   )
}

export default CommentsContainer