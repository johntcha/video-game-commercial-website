import React from 'react';
import Tabs from './Tabs';
import './Game.css';
import CarouselComponent from "./Carousel";

function Game(){
	return(
		<div className="game">
			<h2>TOWERS</h2>
			<div className="game_wrapper">
				<Tabs />
				<CarouselComponent />
			</div>
			<h2>UNITIES</h2>
			<div className="unity_wrapper">
				Unities here
			</div>
			
		</div>
		)
}

export default Game;