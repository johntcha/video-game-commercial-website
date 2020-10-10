import React from 'react'
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
	return(
			<div className='hero-container'>
				<video src="/videos/levi-vs-beast-titan.mp4" autoPlay loop muted />
				<h1>Let's play TOWER DEFENSE</h1>
				<p>Let's play right now for free</p>
				<div className="hero-btns">
					<Button className='btns' buttonStyle ='btn--outline'
					buttonSize='btn--large' buttonLink='/sign-up'>
					<span aria-hidden="true">GET STARTED</span>
					GET STARTED
					<span aria-hidden="true">GET STARTED</span>
					</Button>
					<Button className='btns' buttonStyle ='btn--primary'
					buttonSize='btn--large'>
					<i className='far fa-play-cirle'></i>WATCH TRAILER 
					</Button>
				</div>
			</div>
		)
}

export default HeroSection;