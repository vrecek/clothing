import React from 'react'
import { IInfoObject } from '../../../../interfaces/ProfileInterfaces'

const InfoDiv = ({infos}: {infos: IInfoObject[]}) => {
    return (
        <div>
            {
                infos.map((x, i) => (
                    <p className={x.cname ?? ''} key={i}>
                        <span className="name">{x.name}: </span>
                        <span className="value">{x.value}</span>
                    </p>
                ))
            }
        </div>
    )
}

export default InfoDiv