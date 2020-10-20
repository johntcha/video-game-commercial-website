import React from 'react'
import '../App.css';
import './Description.css';

function Description(){
	return(
			<div className="description-container">
			<h1>TOWER DEFENSE IS WAITING FOR YOUR HACKING</h1>
			<p>Protect your computers from other hackers and send your best virus
			to destroy all your enemies computers
			Earn Bitcoins by destroying viruses and use those Bitcoins
			in order to create complexes viruses</p>
			<p>Don't let your opponent shut down your computer,
			else, you will be stolen all your Bitcoins</p>
				<div className="description-images">
					<img src="/images/news-wallpaper.jpg" alt="" />
					<img src="/images/news-wallpaper.jpg" alt="" />
				</div>
			</div>
		)

}

export default Description;