import React from 'react';
import Books from '../Books';
import Footer from '../Footer'
import '../../App.css';
import HeroSection from '../HeroSection';

function Home(){
    return(
        <>
        <HeroSection />
        <Books />
        <Footer />
        </>
    );
}

export default Home;