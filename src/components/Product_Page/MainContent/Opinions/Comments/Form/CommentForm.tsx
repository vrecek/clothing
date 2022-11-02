import React from 'react'
import { UserContext } from '../../../../../../App'
import AppendResult from '../../../../../../functions/AppendText'
import Fetches from '../../../../../../functions/Fetches'
import { LoadingCss } from '../../../../../../functions/Loading'
import { Inputs } from '../../../../../../interfaces/CommonInterfaces'
import { PossibleUser } from '../../../../../../interfaces/UserType'
import AvatarAndButton from './AvatarAndButton'
import TextareaAndStars from './TextareaAndStars'

const CommentForm = ({productId}: {productId: string}) => {
   const user: PossibleUser = React.useContext(UserContext)
   const [rate, setRate] = React.useState<number>(0)

   const submitComment = async (e: React.FormEvent): Promise<void> => {
      e.preventDefault()

      const t: HTMLFormElement = e.target as HTMLFormElement

      const l: LoadingCss = new LoadingCss()
      l.defaultStyleDots({ position: 'containerHeight', backgroundClr: 'rgba(230, 230, 230, .9)' })
      l.append(t)

      const ar: AppendResult = new AppendResult('h5', 'result')
      ar.setMessage = 'Sucessfully posted a comment'

      const [, ...elements]: HTMLInputElement[] = Array.from(t.elements as Inputs)
      const [title, text] = elements.map(x => x.value)

      try {
         await Fetches.mix(process.env.REACT_APP_PRODUCT_COMMENT!, 'POST', {
            productId,
            authorId: user?._id ?? null,
            text,
            rate,
            title
         })

         for(let x of elements) x.value = ''
         for(let x of Array.from(t.children[1].children[1].children[2].children)) x.className = ''
         setRate(0)

      }catch(err: any) {
         ar.setMessage = err.json.msg

      }finally {
         ar.appendTo(t, 2.5)
         l.remove()
      }
   }

   return (
      <form onSubmit={submitComment} className="write-comment">

         <h6>Write a comment</h6>

         <div className='wrap'>

            <AvatarAndButton avatar={user?.avatar?.url} />

            <TextareaAndStars rateHook={setRate} />

         </div>

      </form>
   )
}

export default CommentForm