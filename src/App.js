import React from 'react';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/Resume'
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
					<Route path='/' exact component={Home} />
					{/* About */}
					<Route path='/about' component={About} />
					{/* Projects */}
					<Route path='/projects' component={Projects} />
					{/* Resume */}
					<Route path='/resume' component={Resume}/>
					<footer>
						<Footer />
					</footer>
				</main>
			</body>
		</div>
	);
};

export default App;
