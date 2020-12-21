import React from 'react';

const Sunflower = () => {
	return (
		<div>
			<div className='projects-title'>
				<a
					href='https://sunflowerapp.herokuapp.com/'
					target='_blank'
					rel='noreferrer'>
					<h2 className='projects-h2'>Sunflower</h2>
				</a>
			</div>
			<div className='projects-container'>
				<section className='projects-left'>
					<a
						href='https://sunflowerapp.herokuapp.com/'
						target='_blank'
						rel='noreferrer'>
						<img src='/images/sunflowername.png' alt='sunflower' />
					</a>
				</section>
				<section className='projects-right'>
					<h2>Description</h2>
					<p>
						Sunflower is a Full-Stack application using ReactJS, Python, Django
						REST Framework, and PostgreSQL. Sunflower is an up-cycling
						application built with the goal of fostering a community of
						individuals to reuse and create works of art out of discarded items,
						or at the very least find new ways to upgrade their existing ones.
						Contains full Create, Read, Update, and Destroy (CRUD)
						fucntionality.
					</p>
					<h2>Technologies Used</h2>
					<ul>
						<li>HTML5</li>
						<li>CSS3</li>
						<li>Javascript</li>
						<li>Python</li>
						<li>FontAwesome Icons</li>
						<li>ReactJS</li>
						<li>Django REST Framework</li>
						<li>PostgreSQL</li>
						<li>Bootstrap</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default Sunflower;
