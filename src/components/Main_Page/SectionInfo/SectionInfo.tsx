import React from 'react'
import '../../../css/SectionInfo.css'
import { IInfo } from '../../../interfaces/HomepageInterfaces'
import Button from '../../Common/Button'
import FigureImage from '../../Common/FigureImage'
import TextParagraphs from './TextParagraphs'

const SectionInfo = ({image, btnText, url, header, para, txtCname}: IInfo) => {
   return (
      <section className="section-info">

         <FigureImage source={image} altTxt='Background' />

         <article className={`text ${txtCname}`}>

            <TextParagraphs header={header} para={para} />
            <Button cname='purple' text={btnText} />

         </article>

      </section>
   )
}

export default SectionInfo