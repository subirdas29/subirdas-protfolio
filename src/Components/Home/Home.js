import React from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Headers from '../Headers/Headers';
import AllProjects from '../MyProjects/AllProjects';
import AllSkills from '../Skills/AllSkills';

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Banner></Banner>
            <AllSkills></AllSkills>
            <AllProjects></AllProjects>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;