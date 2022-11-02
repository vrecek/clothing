import React from 'react'
import { BiMailSend } from 'react-icons/bi'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import StockInfo from './StockInfo'

const IconLinks = ({inStock}: {inStock: number}) => {
	const n: NavigateFunction = useNavigate()
	
	return (
		<section className="icons">

			<div onClick={() => n('/contact')}>
				<span><BiMailSend /></span>
				<p>Report an issue</p>
			</div>

			<StockInfo inStock={inStock} />

		</section>
	)
}

export default IconLinks