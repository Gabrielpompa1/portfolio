import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header-div'>
			<div>
				<Link to='/about'>
					<h2 className='header-title'>Gabriel Pompa</h2>
				</Link>
			</div>
			<div>
				<nav>
					<ul>
						<Link to='/'>
							<li className='nav-li'>Home</li>
						</Link>
						<Link to='/about'>
							<li className='nav-li'>About</li>
						</Link>
						<Link to='/projects'>
							<li className='nav-li'>Projects</li>
						</Link>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Header;
