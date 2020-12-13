import React from 'react';

const HungryHelper = () => {
	return (
		<div>
			<div className='projects-title'>
				<a
					href='https://hungry-helper.herokuapp.com/'
					target='_blank'
					rel='noreferrer'>
					<h2 className='projects-h2'>Hungry Helper</h2>
				</a>
			</div>
			<div className='projects-container'>
				<section className='projects-left'>
					<a
						href='https://hungry-helper.herokuapp.com/'
						target='_blank'
						rel='noreferrer'>
						<img
							src='/images/HungryHelper.png'
							alt='Hungry Helper Site'
							width='450px'
						/>
					</a>
				</section>
				<section className='projects-right'>
					<h2>Description</h2>
					<p>
						Hungry Helper is a Front-End application that allows the user to
						search for recipes based on multiple factors. Utilizes ReactsJS to
						render HTML5 and CSS3 elements to a single-page application that
						pulls data from a third-party API.
					</p>
					<h2>Technologies Used</h2>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>ReactJS</li>
						<li>Node.js</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default HungryHelper;
