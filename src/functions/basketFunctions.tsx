import { Cookies } from 'react-cookie'
const cookies = new Cookies()

export interface BasketCookieObject {
    id: string,
    size: string
}

const getBasketIds = (): BasketCookieObject[] => cookies.get('basket') ?? []

const isInCart = (id: string): boolean => getBasketIds().some(x => x.id === id)

const setBasketId = (id: string, size: string): void => {
    const actualProducts: BasketCookieObject[] = getBasketIds()

    const uniqueProducts = Array.from( 
        new Set([...actualProducts, { id, size }]) 
    )

    cookies.set('basket', uniqueProducts, { path: '/' })
}

const removeBasketId = (id: string): void => {
    const fixedIds: BasketCookieObject[] = getBasketIds().filter(x => x.id !== id)

    cookies.set('basket', fixedIds, { path: '/' })
}


export {getBasketIds, setBasketId, isInCart, removeBasketId}