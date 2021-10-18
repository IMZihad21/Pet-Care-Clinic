import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Vets from '../Vets/Vets'

const Home = () => {
    return (
        <div>
            <Banner />
            <HomeServices />
            <Vets />
        </div>
    );
};

export default Home;