import React from 'react';

const BotanicalBabbles = () => {
	return (
		<div>
			<div className='projects-title'>
				<a href='https://bbfe.herokuapp.com/' target='_blank' rel='noreferrer'>
					<h2 className='projects-h2'>Botanical Babbles</h2>
				</a>
			</div>
			<div className='projects-container'>
				<section className='projects-left'>
					<a
						href='https://bbfe.herokuapp.com/'
						target='_blank'
						rel='noreferrer'>
						<img src='/images/BBLogo.png' alt='Botanical Babbles Logo' width='400px' />
					</a>
				</section>
				<section className='projects-right'>
					<h2>Description</h2>
					<p>
						Botanical Babble is a Full-Stack MERN application, which allows
						users to view a hand-made JSON database of plants containing
						multiple criteria. Users can comment on plants individually,
						allowing for a community forum encouraging social growth and
						plant-care tips. Contains full Create, Read, Update, Destroy (CRUD)
						functionality.
					</p>
					<h2>Technologies Used</h2>
					<ul>
						<li>MongoDB</li>
						<li>Express</li>
						<li>ReactJS</li>
						<li>Node.js</li>
						<li>Bootstrap</li>
						<li>HTML5</li>
						<li>CSS3</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default BotanicalBabbles;
