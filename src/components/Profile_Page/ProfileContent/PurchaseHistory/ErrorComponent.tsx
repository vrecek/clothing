import React from 'react'

const ErrorComponent = ({msg}: {msg: string}) => {
    return (
        <section className="error">

            <p>{msg}</p>
            <p>Please try again.</p>

        </section>
    )
}

export default ErrorComponent