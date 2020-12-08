import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return(
			<div className='hero-container' id="hero-container">
				
				<img className="header_img" src="/images/header_img.gif" alt="header"/>
				<h1>Let's play TOWER</h1>
				<p>Let's play right now for free</p>
				<div className="hero-btns">
					
					<Button className='btns' buttonStyle ='btn--outline'
					buttonSize='btn--large' buttonLink='/sign-up'>
					<span aria-hidden="true">WATCH TRAILER</span>
					WATCH TRAILER
					<span aria-hidden="true">WATCH TRAILER</span>
					</Button>
				</div>
			</div>
		)
}

export default HeroSection;