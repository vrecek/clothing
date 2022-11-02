import React from 'react'
import '../../../../css/PurchaseHistory.css'
import Fetches from '../../../../functions/Fetches'
import { IFixedUserOrderType, IOrdersState, IPurchaseSection } from '../../../../interfaces/ProfileInterfaces'
import { DefaultLoadState, IStateLoad, Ref } from '../../../../interfaces/CommonInterfaces'
import ReadyOrdersComponent from './ReadyOrdersComponent'
import { LoadingCss } from '../../../../functions/Loading'
import EmptyComponent from './EmptyComponent'
import ErrorComponent from './ErrorComponent'

const PurchaseHistory = ({userId}: IPurchaseSection) => {
    const [historyState, setHistory] = React.useState<IStateLoad<IOrdersState>>(DefaultLoadState)
    const articleRef: Ref = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const init = async () => {
            const l: LoadingCss = new LoadingCss()
            l.defaultStyleDots({ position: 'containerWidth', backgroundClr: 'rgb(245, 245, 245)' })
            l.append(articleRef.current!)

            try {
                const data = await Fetches.mix<IFixedUserOrderType[]>(`${process.env.REACT_APP_USER_ORDERED_PRODUCTS}/${userId}`, 'GET')
                setHistory({
                    finished: true,
                    content: {
                        original: data.json,
                        products: data.json
                    }
                })

            }catch(err: any) {
                setHistory({
                    finished: true,
                    content: null,
                    error: Fetches.returnFetchErrorState(err).msg
                })

            }finally { l.remove() }
        }
        init()
    }, [])

    return (
        <article ref={articleRef} className="content-state purchase-history">

            <h1 className='header'>Purchase history</h1>

            {
                historyState?.finished
                ? historyState?.error
                    ? <ErrorComponent msg={historyState.error} />
                    : historyState.content?.original?.length
                        ? <ReadyOrdersComponent historyState={historyState.content} setHistory={setHistory} />
                        : <EmptyComponent />
                : <></>
            }

        </article>
    )
}

export default PurchaseHistory