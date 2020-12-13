import React from 'react';
import '../../App.css';
import Footer from '../Footer';

export default function Video(){
	return (
		<>
		<div className="trailer-container">
		<h1>TRAILER</h1>
		<div className="trailer">
			<video width="1000" controls className="video">
	  		<source src="/videos/app_trailer_final.mp4" type="video/mp4"/>
			</video>
			<video width="300" controls className="mobile_video">
	  		<source src="/videos/app_trailer_final.mp4" type="video/mp4"/>
			</video>
		</div>
		</div>
		<Footer />
		</>
		);
};