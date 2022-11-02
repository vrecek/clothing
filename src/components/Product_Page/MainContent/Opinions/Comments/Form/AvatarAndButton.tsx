import React from 'react'
import Button from '../../../../../Common/Button'
import FigureImage from '../../../../../Common/FigureImage'
import blank from '../../../../../../images/blank.png'

const AvatarAndButton = ({avatar}: {avatar: string | undefined}) => {
    return (
        <div className='aab'>

            <FigureImage source={avatar || blank} altTxt='Avatar' />

            <Button text='Submit' />

        </div>
    )
}

export default AvatarAndButton