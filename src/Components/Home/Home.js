import React from 'react';
import Banner from '../Banner/Banner';
import Headers from '../Headers/Headers';
import AllProjects from '../MyProjects/AllProjects';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <AllProjects></AllProjects>
        </div>
    );
};

export default Home;