import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
			<div className='header-div'>
				<Link className='link' to='/home'>
					<h2 className='header-title'>Gabriel Pompa</h2>
				</Link>
				<nav>
					<ul>
						<Link className='link' to='/about'>
							<li className='nav-li'>About</li>
						</Link>
						<Link className='link' to='/projects'>
							<li className='nav-li'>Projects</li>
						</Link>
					</ul>
				</nav>
			</div>
		);
};

export default Header;