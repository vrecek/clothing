import React from 'react'
import Button from '../../../Common/Button'
import FigureImage from '../../../Common/FigureImage'
import avatar from '../../../../images/blank.png'
import Text from './Text'

const EntryUserInfo = () => {
   return (
      <section className="entry-informations">

         <FigureImage source={avatar} altTxt='User' />

         <div className="wrap">

            <Text />

            <Button text='Save' />

         </div>

      </section>
   )
}

export default EntryUserInfo