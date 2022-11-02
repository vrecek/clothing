import React from 'react'
import { IAuthorAndDate } from '../../../../../interfaces/ProductPageInterfaces'

const AuthorAndDate = ({authorName, date}: IAuthorAndDate) => {
    const diff: number = Math.floor( (Date.now() - date) / (1000 * 60 * 60 * 24) )

    const dateFormat: string = diff < 1 ? 'Today' : new Intl.RelativeTimeFormat('en').format(diff, 'days')

    return (
        <div>

            <p className="author">{authorName}</p>
            <span className='separate'>|</span>
            <p className="date">{dateFormat}</p>

        </div>
    )
}

export default AuthorAndDate