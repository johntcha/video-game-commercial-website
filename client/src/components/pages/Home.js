import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Game from '../Game';
import Footer from '../Footer';
import Description from '../Description';

function Home() {
    return (
    	<>
    		<HeroSection />
    		<Description />
    		<Cards />
    		<Game />
    		<Footer />
    	</>
    	)
}

export default Home;