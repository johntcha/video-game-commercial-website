import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" id="news">
		<h1>News</h1>
		<div className="cards__container">
			<div className="cards__wrapper">
				<ul className="cards_items">
					<CardItem 
					src="images/sombra.jpeg"
					text="Sombra from Overwatch is part of the party"
					label="Event"
					path="/event"
					/>
					<CardItem 
					src="images/led.png"
					text="LED damages have been increased"
					label="Patch 1.0.1"
					path="/maj2"
					/>
					<CardItem 
					src="images/beta.png"
					text="Beta A.P.P version coming early 2021 !"
					label="BETA"
					path="/maj1"
					/>
					
				</ul>
			</div>
		</div>
		</div>
    )
}

export default Cards;