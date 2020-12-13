import React from 'react'
import '../App.css';
import './Description.css';

function Description(){
	return(
			<div className="description-container" id="description">
			<h1>ARTIFICIAL PIRATE PROCESS IS WAITING FOR YOUR HACKING</h1>
			<div className="description-images">
					<img src="/images/hacker.png" alt="hacker" />
					<img src="/images/description2.jpg" alt="description" />
				</div>
			<p>Protect your computers from other hackers and send your best virus
			to destroy all your enemies' computers.
			</p>
			<p>
			Earn money by destroying viruses and use these founds
			in order to create more complexes programs</p>
			<p>Don't let your opponent shut down your computer,
			else, you will shut down</p>
			</div>
		)

}

export default Description;