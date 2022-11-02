import React from 'react'

const StarTotalVotes = ({votesTotal}: {votesTotal: number}) => {
    return (
        <div className="last">

            <p>{votesTotal}</p>

        </div>
    )
}

export default StarTotalVotes