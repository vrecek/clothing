import React from 'react'
import Button from '../../../../Common/Button'
import FigureImage from '../../../../Common/FigureImage'

const CommentForm = () => {
   const submitComment = (e: React.FormEvent): void => {
      e.preventDefault()
   }

   return (
      <form onSubmit={submitComment} className="write-comment">

         <h6>Write a comment</h6>

         <div className='wrap'>

            <div>

               <FigureImage source='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' altTxt='Avatar' />

               <Button text='Submit' />

            </div>

            <textarea spellCheck='false'></textarea>

         </div>

      </form>
   )
}

export default CommentForm