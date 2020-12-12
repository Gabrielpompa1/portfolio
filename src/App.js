import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';

import './App.css';

const App = () => {
	return (
		<div className='app-root-div'>
			<header>
				<Header />
			</header>
			<body>
				<main>
					{/* Home */}
					<Route path='/home' component={Home} />
					{/* About */}
					<Route path='/about' component={About} />
					{/* Landing */}
					<Route path='/' exact component={Landing} />
					{/* Projects */}
					<Route path='/projects' component={Projects} />
					<footer>
						<Footer />
					</footer>
				</main>
			</body>
		</div>
	);
};

export default App;
