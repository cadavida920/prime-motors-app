import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ScrollToTop from './component/scrollToTop/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalPortfolio from './pages/PersonalPortfolio';
import ErrorPage from './pages/404';
import AboutUs from './pages/AboutUs';

// Css Import
import './assets/scss/app.scss';


const App = () => {
  return (
    <Router>
		<ScrollToTop>
			<Routes>
				<Route path={"/"} element={<PersonalPortfolio />}/>

				{/* Pages  */}
				<Route path={process.env.PUBLIC_URL + "/about-us"} element={<AboutUs />}/>
				<Route path={process.env.PUBLIC_URL + "/404"} element={<ErrorPage />}/>

			</Routes>
		</ScrollToTop>
    </Router>
  )
}

export default App;
