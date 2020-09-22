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
			</div>

			<CarouselComponent />
		</div>
		)
}

export default Game;