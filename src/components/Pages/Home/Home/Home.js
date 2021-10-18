import React from 'react';
import Banner from '../Banner/Banner';
import MiniServices from '../MiniServices/MiniServices';
import Vets from '../Vets/Vets'

const Home = () => {
    return (
        <div>
            <Banner />
            <MiniServices />
            <Vets />
        </div>
    );
};

export default Home;