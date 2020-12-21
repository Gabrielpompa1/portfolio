import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
	return (
		<div className='about-div'>
			{/* About Div */}
			<h2 className='about-title'>About Me</h2>
			{/* Photo Div */}

			<img
				className='about-photo'
				src='../images/meandzephpark3.jpg'
				alt='about'
			/>

			{/* Brand Div */}

			<h2 className='brand-statement-title'>Brand Statement</h2>
			<p className='brand-p'>
				My name Is Gabriel Pompa and I am a Full-Stack Developer and military
				veteran based out of Tucson, AZ. As a graduate of General Assembly's
				Software Engineering Immersive, I enjoy developing quality web
				applications and striving toward efficiency.
			</p>
			{/* Resume Div */}
			<Link to='/resume'>
				<h2 className='resume-div-title'>Resumé</h2>
				<img
					className='resume-image'
					src='/images/PersevereResume.jpg'
					alt='Resumé'
				/>
			</Link>
		</div>
	);
};

export default About;
