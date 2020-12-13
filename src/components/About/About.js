import React from 'react';
import './About.css';

const About = () => {
	return (
		<div>
			{/* About Div */}
			<div className='about-div'>
				<div className='about-title'>
					<h2>About Me</h2>
				</div>
				{/* Photo Div */}
				<div className='about-photo'>
					<img src='../images/meandzephpark3.jpg' alt='' width='300px' />
				</div>
				{/* Brand Div */}
				<div className='brand-statement'>
					<h3>Brand Statement</h3>
					<p className='brand-p'>
						My name Is Gabriel Pompa and I am a Full-Stack Developer and
						military veteran based out of Tucson, AZ. As a graduate of General
						Assembly's Software Engineering Immersive, I enjoy developing
						quality web applications and striving toward efficiency.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
