import React from 'react'
import { IFilterSelect } from '../../../../interfaces/ProfileInterfaces'

const FilterSelect = ({setState}: IFilterSelect) => {
    const list: string[] = ['All', 'Pending', 'Finalized']

    const filterOrders = (e: React.MouseEvent, type: string): void => {
        const t: HTMLElement = e.target as HTMLElement
        
        for(let x of Array.from(t.parentElement!.children)) x.className = ''
        t.className = 'active'

        setState(curr => {
            let items = curr.content!

            if(type === 'Pending') {
                items.products = items.original.filter(x => !x.finalized)
            }
            else if(type === 'Finalized') {
                items.products = items.original.filter(x => x.finalized)
            }
            else if(type === 'All') {
                items.products = items.original
            }

            return {...curr}
        })
    }

    return (
        <ul className="filter-select">

            {
                list.map((x, i) => (
                    <li className={i === 0 ? 'active' : ''} onClick={(e) => filterOrders(e, x)} key={i}>
                        {x}
                    </li>
                ))
            }

        </ul>
    )
}

export default FilterSelect