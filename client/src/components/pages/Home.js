import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Game from '../Game';
import Footer from '../Footer';

function Home() {
    return (
    	<>
    		<HeroSection />
    		<Cards />
    		<Game />
    		<Footer />
    	</>
    	)
}

export default Home;