import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards" id="news">
		<h1>Actualités</h1>
		<div className="cards__container">
			<div className="cards__wrapper">
				<ul className="cards_items">
					<CardItem 
					src="images/roi-liche.jpg"
					text="Le Roi Liche débarque sur Tower Defense"
					label="Event"
					path="/event"
					/>
					<CardItem 
					src="images/nerubian-tower.jpg"
					text="Les dégats des tours de glace ont été augmenté"
					label="Patch 1.0.2"
					path="/maj2"
					/>
					<CardItem 
					src="images/nerubian-tower.jpg"
					text="Les tours de glace ralentissent moins"
					label="Patch 1.0.1"
					path="/maj1"
					/>
					
				</ul>
			</div>
		</div>
		</div>
    )
}

export default Cards;