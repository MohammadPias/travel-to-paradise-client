import React from 'react';
import Banner from '../banner/Banner';
import Features from '../features/Features';
import Offers from '../Offers/Offers';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Features></Features>
            <Services></Services>
            <Offers></Offers>
        </div>
    );
};

export default Home;