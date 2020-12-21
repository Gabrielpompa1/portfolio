import React from 'react';
import Flowertime from './FlowerTime/FlowerTime';
import HungryHelper from './HungryHelper/HungryHelper'
import BotanicalBabbles from './BotanicalBabbles/BotanicalBabbles';
import Sunflower from './Sunflower/Sunflower'
import './Projects.css'

const Projects = () => {
    return (
			<div>
				<div>
					<Flowertime />
					<HungryHelper />
					<BotanicalBabbles />
					<Sunflower />
				</div>
			</div>
		);
};

export default Projects;