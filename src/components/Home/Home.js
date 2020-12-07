import React from 'react';
import { Route } from 'react-router-dom';
import About from '../About/About';
import HungryHelper from '../Projects/HungryHelper/HungryHelper'
import Flowertime from '../Projects/FlowerTime/FlowerTime'
import BotanicalBabbles from '../Projects/BotanicalBabbles/BotanicalBabbles'

const Home = () => {
	return (
		<div>
			<Route path='/about' component={About} />
			<div className='home-title-div'>
				<h2 className='home-title'>Featured Works</h2>
			</div>
			<div>
				<Flowertime />
				<HungryHelper />
				<BotanicalBabbles />
			</div>
		</div>
	);
};

export default Home;
