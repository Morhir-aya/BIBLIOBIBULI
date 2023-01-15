import React from 'react';
import Cards from '../Cards';
import Footer from '../Footer'
import '../../App.css';
import HeroSection from '../HeroSection';

function Home(){
    return(
        <>
        <HeroSection />
        <Cards />
        <Footer />
        </>
    );
}

export default Home;