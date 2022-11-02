import React from 'react'
import './css/index.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MAIN_PAGE from './components/Main_Page/MAIN_PAGE';
import ArrowTop from './components/Layout/ArrowTop';
import LOG_REG_PAGE from './components/LogReg_Page/LOG_REG_PAGE';
import SEARCH_PAGE from './components/Search_Page/SEARCH_PAGE';
import PRODUCT_PAGE from './components/Product_Page/PRODUCT_PAGE';
import BASKET_PAGE from './components/Basket_Page/BASKET_PAGE';
import CONTACT_PAGE from './components/Contact_Page/CONTACT_PAGE';
import PROFILE_PAGE from './components/Profile_Page/PROFILE_PAGE';
import FINALIZE_ORDER from './components/Basket_Page/Finalize/FINALIZE_ORDER';
import { DefaultLoadState, IStateLoad } from './interfaces/CommonInterfaces';
import UserType, { PossibleUser } from './interfaces/UserType';
import Fetches from './functions/Fetches';
import { LoadingCss } from './functions/Loading';
import ADMIN_PAGE from './components/Admin/ADMIN_PAGE';
import ERROR_PAGE from './components/Error/ERROR_PAGE';
import FINAL_ORDER_COMPONENT from './components/Basket_Page/Finalize/FinalOrderComponent/FINAL_ORDER_COMPONENT'

const UserContext = React.createContext<PossibleUser>(null)

function App() {
	const [user, setUser] = React.useState<IStateLoad<UserType>>(DefaultLoadState)

	// GET LOGGED USER
	React.useEffect(() => {
		const init = async () => {
			const l: LoadingCss = new LoadingCss()
			l.defaultStyleDots()
			l.append(document.body)

			try {
				const data = await Fetches.mix<UserType | false>(process.env.REACT_APP_USER_LOGGED!, 'GET')

				if(data.json) {
					Object.assign(data.json, { basket: [] })
				}
				
				setUser({
					finished: true,
					content: data.json || null
				})

			}catch(err: any) {
				setUser({
					finished: true, 
					content: null,
					error: err.json.msg
				})

			}finally { l.remove() }
		}
		init()
	}, [])

	if(user.finished)
   return (
		<div className="App">
		
			<Router>

				<UserContext.Provider value={user.content}>

					<Routes>

						<Route path='/' element={<MAIN_PAGE />} />

						<Route path='/credentials/:type' element={<LOG_REG_PAGE />} />

						<Route path='/product/:id' element={<PRODUCT_PAGE />} />

						<Route path='/basket' element={<BASKET_PAGE />} />
						<Route path='/finalize' element={<FINALIZE_ORDER />} />
						<Route path='/successfully-ordered' element={<FINAL_ORDER_COMPONENT />} />

						<Route path='/contact' element={<CONTACT_PAGE />} />

						<Route path='/profile' element={<PROFILE_PAGE />} />

						<Route path='/search/:type/:query'>

							<Route path='' element={<SEARCH_PAGE />} />
							<Route path=':query2' element={<SEARCH_PAGE />} />

						</Route>

						<Route path={`/error`} element={<ERROR_PAGE />} />
						<Route path={`/admin/${process.env.REACT_APP_ADMIN_ROUTE}`} element={<ADMIN_PAGE />} />

					</Routes>

				</UserContext.Provider>
				
			</Router>

			<ArrowTop />

		</div>
   )

	return <></>
}

export default App;
export {UserContext}