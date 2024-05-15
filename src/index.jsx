import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import Home from './pages/Home'
import Error from './pages/Error'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apropos from './pages/Apropos'
import FicheLogement from './pages/FicheLogement'

ReactDOM.render(
	<React.StrictMode>
		<Router>
		<Routes>

			<Route>
			<Route path='/' element={<Home />} />
			<Route path="*" element={<Error />} />
			<Route path='/Apropos' element={<Apropos />} />
			<Route path='/FicheLogement/:id' element={<FicheLogement />} />
			</Route>
		</Routes>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
)