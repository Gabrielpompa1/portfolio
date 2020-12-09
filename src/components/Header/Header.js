import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header-div'>
			<h2 className='header-title'>Gabriel Pompa</h2>
			<div>
				<nav>
					<ul>
						<li className='nav-li'>
							<a href='#'>About</a>
						</li>

						<li className='nav-li'>
							<a href='#'>Projects</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
