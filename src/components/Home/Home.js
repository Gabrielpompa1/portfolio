import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer'
import Projects from '../Projects/Projects';

const Home = () => {
	return (
		<div>
			<div>
				<About />
			</div>
			<div className='home-title-div'>
				<h2 className='home-title'>Featured Works</h2>
				<Projects />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
