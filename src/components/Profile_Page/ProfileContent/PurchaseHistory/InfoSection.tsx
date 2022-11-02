import React from 'react'
import { IInfoObject, IInfoSection } from '../../../../interfaces/ProfileInterfaces'
import InfoDiv from './InfoDiv'

const InfoSection = ({date, price, country, payment, delPrice, delType, status}: IInfoSection) => {
    const dateStr: string = new Date(date).toLocaleDateString()
    const statusStr: string = status ? 'Delivered' : 'Pending'

    const infoArr: IInfoObject[][] = [
        [
            { name: 'Order date', value: dateStr },
            { name: 'Total cost', value: `${price} $` }
        ],

        [
            { name: 'Country', value: country },
            { name: 'Payment', value: payment }
        ],

        [
            { name: 'Delivery price', value: `${delPrice} $` },
            { name: 'Delivery type', value: delType }
        ],

        [
            { name: 'Status', value: statusStr, cname: status.toString() }
        ],
    ]

    return (
        <section className="info">

            <InfoDiv infos={infoArr[0]} />
            <InfoDiv infos={infoArr[1]} />
            <InfoDiv infos={infoArr[2]} />
            <InfoDiv infos={infoArr[3]} />

        </section>
    )
}

export default InfoSection