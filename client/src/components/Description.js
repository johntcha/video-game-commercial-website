import React from 'react'
import '../App.css';
import './Description.css';

function Description(){
	return(
			<div className="description-container" id="description">
			<h1>TOWER IS WAITING FOR YOUR HACKING</h1>
			<div className="description-images">
					<img src="/images/hacker.png" alt="" />
					<img src="/images/description2.jpg" alt="" />
				</div>
			<p>Protect your computers from other hackers and send your best virus
			to destroy all your enemies computers
			Earn Bitcoins by destroying viruses and use those Bitcoins
			in order to create complexes viruses</p>
			<p>Don't let your opponent shut down your computer,
			else, you will be stolen all your Bitcoins</p>
				
			</div>
		)

}

export default Description;