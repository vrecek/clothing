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

function App() {
   return (
		<div className="App">
		
			<Router>

				<Routes>

					<Route path='/' element={<MAIN_PAGE />} />

					<Route path='/credentials/:type' element={<LOG_REG_PAGE />} />

					<Route path='/searchbar/:query' element={<SEARCH_PAGE />} />
					<Route path='/search/sale' element={<SEARCH_PAGE saleComponent={true} />} />

					<Route path='/product/:id' element={<PRODUCT_PAGE />} />

					<Route path='/basket' element={<BASKET_PAGE />} />
					<Route path='/finalize' element={<FINALIZE_ORDER />} />

					<Route path='/contact' element={<CONTACT_PAGE />} />

					<Route path='/profile' element={<PROFILE_PAGE />} />

				</Routes>
				
			</Router>

			<ArrowTop />

		</div>
   )
}

export default App;
