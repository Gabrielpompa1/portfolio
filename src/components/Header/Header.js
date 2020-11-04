import React from 'react';
import './Header.css'

const Header = () => {
    return (
			<div className='header-div'>
				<h2>Gabriel Pompa</h2>
				<nav>
					<ul>
						<li className='nav-li'>About</li>
						<li className='nav-li'>Projects</li>
					</ul>
				</nav>
			</div>
		);
};

export default Header;