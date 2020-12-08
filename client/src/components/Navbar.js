import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';
import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (

        <nav className="navbar">
				<div className="navbar-container">
					<Link to="" className="navbar-logo" onClick={closeMobileMenu}>
					<span aria-hidden="true">TOWER</span>
						TOWER
						<span aria-hidden="true">TOWER</span>
					</Link>
					<div className='menu-icon' onClick={handleClick}>
						<i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
					</div>
					<ul className = {click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav-item'>
							<Link to='#hero-container' className='nav-links' onClick={closeMobileMenu}>
							Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='#description' className='nav-links' onClick={closeMobileMenu}>
							Description
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='#news' className='nav-links' onClick={closeMobileMenu}>
							News
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='#towers' className='nav-links' onClick={closeMobileMenu}>
							Towers
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='#unities' className='nav-links' onClick={closeMobileMenu}>
							Unities
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='#footer' className='nav-links' onClick={closeMobileMenu}>
							Contact us
							</Link>
						</li>
					</ul>
					
				</div>
			</nav>

    );

}

export default Navbar;