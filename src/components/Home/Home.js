import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';


const Home = () => {
	return (
		<div>
			<Route path='/about' component={About}/>
			<body className='home-body'>
				<main className='home-main'>
					<div className='home-title-div'>
						<h2 className='home-title'>Featured Works</h2>
					</div>
					<section>
						<h3>Hungry Helper</h3>
						<img src="../images/hungryhelper2.png" alt="hh"/>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur sint eos quas natus, nobis numquam nulla sed necessitatibus id eaque alias quod tempore ex! Atque libero fuga fugit deserunt amet?</p>
					</section>
				</main>
			</body>
		</div>
	);
};

export default Home;
