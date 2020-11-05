import React from 'react';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {Route} from 'react-router-dom'
import './App.css'

const App = () => {
  return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<Home path='/home' />

			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default App;