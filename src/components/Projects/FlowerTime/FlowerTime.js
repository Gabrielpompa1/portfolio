import React from 'react';

const FlowerTime = () => {
	return (
		<div>
			<div className='projects-title'>
				<a href='https://gabrielpompa1.github.io/Flower-Time/index2'>
					<h2 className='projects-h2'>FlowerTime</h2>
				</a>
			</div>
			<div className='projects-container'>
				<section className='projects-left'>
					<a href='https://gabrielpompa1.github.io/Flower-Time/index2' target='_blank' rel='noreferrer'>
						<img
							src='../images/Flower-Time.png'
							alt=''
							height='400px'
							width='280px'
						/>
					</a>
				</section>
				<section className='projects-right'>
					<h2>Description</h2>
					<p>
						Flower Time is a creative take on the classic “Hangman” game,
						featuring gameplay functionality and customization. Uses HTML5,
						CSS3, and Javascript to use DOM manipulation to structure HTML5 and
						CSS3 elements on the page according to user input on the HTML5 page.
					</p>
					<h2>Technologies Used</h2>
					<ul>
						<li>HTML5</li>
						<li>Javascript</li>
						<li>CSS3</li>
					</ul>
				</section>
			</div>
		</div>
	);
};

export default FlowerTime;
