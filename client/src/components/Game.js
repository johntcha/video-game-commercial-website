import React from 'react';
import Tabs from './Tabs';
import HorizontalTab from './HorizontalTab';
import './Game.css';
import CarouselComponent from "./Carousel";
import Particles from 'react-particles-js';

function Game(){
	return(
		<div className="game">

			<h2>TOWERS</h2>
			<div className="game_wrapper" id="towers">
				<Tabs />
				<CarouselComponent 
				first_h2="By the power of the Chip !"
				second_h2="LED slowing power !"
				third_h2="Resistance is fast"
				first_p="Destructive tours have the most powerful damage since its attacks
        have an area effect but is very slow."
				second_p="Slowing towers are the most adapted if the enemy is strong
        or is fast. At strategic places, this tower can totally make the game."
				third_p="Fast attacks towers is essential for fast and weak enemy as they can kill them
        quicly. However, they only posess single targeted enemy and week attacks."
        img1="/images/ship.png"
        img2="/images/led.png"
        img3="/images/resistance.png"
        		
				 />
			</div>
			<h2>UNITIES</h2>
			<div className="unity_wrapper" id="unities">
				<HorizontalTab />
				<CarouselComponent 
				first_h2="Spider"
				second_h2="Small Spider"
				third_h2="Trojan Horse"
				first_p="Balanced bug"
				second_p="Weak but fast bug"
				third_p="Strong but slow bug"
        		img1="/images/bug.png"
        		img2="/images/bugSmall.png"
        		img3="/images/troy.png"
				 />
			</div>
			
		</div>
		)
}

export default Game;