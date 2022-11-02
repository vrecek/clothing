import React from 'react'
import LayoutWrap from '../../../Layout/LayoutWrap'
import '../../../../css/FinalOrderComponent.css'
import Button from '../../../Common/Button'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import TextInfo from './TextInfo'
import IconDiv from './IconDiv'
import { IFinalComponentLocation } from '../../../../interfaces/BasketInterfaces'

const FINAL_ORDER_COMPONENT = () => {
    window.scrollTo(0, 0)

    const isAllowed: IFinalComponentLocation = useLocation().state as IFinalComponentLocation
    const n: NavigateFunction = useNavigate()

    React.useEffect(() => {
        if(!isAllowed) n('/', { replace: true })
    }, [])

    if(isAllowed)
    return (
        <LayoutWrap>

            <main className="final-order-component">

                <TextInfo />

                <IconDiv />

                <Button action={() => n('/', { replace: true })} text='Back to homepage' />

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default FINAL_ORDER_COMPONENT