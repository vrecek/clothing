import React from 'react'
import { IReadyComponent } from '../../../../interfaces/ProfileInterfaces'
import FilterSelect from './FilterSelect'
import OrderComponent from './OrderComponent'

const ReadyOrdersComponent = ({historyState, setHistory}: IReadyComponent) => {
    return (
        <>
            <FilterSelect setState={setHistory} />

            <section className="container">

                {
                    historyState.products.map((x, i) => (
                        <OrderComponent
                            key={i}
                            history={x}
                        />
                    ))
                }

            </section>
        </>
    )
}

export default ReadyOrdersComponent