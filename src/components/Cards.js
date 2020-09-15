import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
		<h1>Actualités</h1>
		<div className="cards__container">
			<div className="cards__wrapper">
				<ul className="cards_items">
					<CardItem 
					src="images/roi-liche.jpg"
					text="Le Roi Liche débarque sur Tower Defense"
					label="Event"
					path="/sign-up"
					/>
					<CardItem 
					src="images/nerubian-tower.jpg"
					text="Les dégats des tours de glace ont été augmenté"
					label="Patch 1.0.2"
					path="/products"
					/>
					<CardItem 
					src="images/nerubian-tower.jpg"
					text="Les tours de glace ralentissent moins"
					label="Patch 1.0.1"
					path="/services"
					/>
					
				</ul>
			</div>
		</div>
		</div>
    )
}

export default Cards;