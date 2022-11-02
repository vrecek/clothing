import React from 'react'

const StarLine = ({width}: {width: number}) => {
    return (
        <div className="line">

            <div style={{width: `${width}%`}} className="fill"></div>

        </div>
    )
}

export default StarLine