import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
	const github = <FontAwesomeIcon icon={faGithub} />;
	const linkedin = <FontAwesomeIcon icon={faLinkedin} />;
	const envelope = <FontAwesomeIcon icon={faEnvelope} />;

	return (
		<div className='footer-container'>
			<div className='footer-div'>
				<h2>Contact Me</h2>
				<div className='footer-nav'>
					<nav>
						<ul className='footer-nav-ul'>
							<a
								href='https://github.com/Gabrielpompa1'
								target='_blank'
								rel='noreferrer'>
								<li className='footer-nav-li'>{github}</li>
							</a>
							<a href='https://www.linkedin.com/in/gabrielpompa/'>
								<li className='footer-nav-li'>{linkedin}</li>
							</a>
							<a href='#'>
								<li className='footer-nav-li'>{envelope}</li>
							</a>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Footer;
