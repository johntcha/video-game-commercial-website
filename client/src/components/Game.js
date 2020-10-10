import React from 'react';
import Tabs from './Tabs';
import HorizontalTab from './HorizontalTab';
import './Game.css';
import CarouselComponent from "./Carousel";
import Particles from 'react-particles-js';

function Game(){
	return(
		<div className="game">
		        <Particles 
        params={{ 
          particles: { 
            number: { 
              value: 250, 
              density: { 
                enable: true, 
                value_area: 2000, 
              }, 
            }, 
          },
           
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "grab",
              },
              resize: true,
            },}
        }} 
      /> 
			<h2>TOWERS</h2>
			<div className="game_wrapper">
				<Tabs />
				<CarouselComponent 
				first_h2="Destruction Tower pawaaaa"
				second_h2="Slow Tower pawaaaa"
				third_h2="Fast Tower pawaaaa"
				first_p="Destructive tours have the most powerful damage since its attacks
        have an area effect but is very slow."
				second_p="Slowing towers are the most adapted if the enemy is strong
        or is fast. At strategic places, this tower can totally make the game."
				third_p="Fast attacks towers is essential for fast and weak enemy as they can kill them
        quicly. However, they only posess single targeted enemy and week attacks."
        		img1="/images/towertest.png"
        		img2="/images/towertest2.jpg"
        		img3="/images/towertest3.jpeg"
				 />
			</div>
			<h2>UNITIES</h2>
			<div className="unity_wrapper">
				<HorizontalTab />
				<CarouselComponent 
				first_h2="KAKAROTTOOOO"
				second_h2="Encore du travail?"
				third_h2="Vous n'êtes pas pret"
				first_p="Lent mais fort"
				second_p="Faible mais speed."
				third_p="Costaud et allure moyenne."
        		img1="/images/broly.png"
        		img2="/images/peon.jpg"
        		img3="/images/illidan.jpg"
				 />
			</div>
			
		</div>
		)
}

export default Game;