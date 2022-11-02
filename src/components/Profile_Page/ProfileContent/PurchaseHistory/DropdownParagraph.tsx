import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import DropDown from '../../../../functions/DropdownClass'

const DropdownParagraph = () => {
    const dd: DropDown = new DropDown()

    const toggleMenu = (e: React.MouseEvent): void => {
        const t: HTMLElement = e.target as HTMLElement
        const menu: HTMLElement = t.parentElement!.children[2] as HTMLElement
        const arrow: HTMLElement = t.children[0] as HTMLElement

        dd.switchActive()
        dd.rotateArrow(arrow)
        dd.getActive ? dd.expandMenu(.3, menu) : dd.shrinkMenu(.3)
    }

    return (
        <p onClick={toggleMenu} className="products-dd">

            Products
            <span><IoIosArrowDown /></span>

        </p>
    )
}

export default DropdownParagraph