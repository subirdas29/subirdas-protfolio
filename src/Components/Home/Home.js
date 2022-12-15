import React from 'react';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';

import AllProjects from '../MyProjects/AllProjects';
import AllSkills from '../Skills/AllSkills';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <AllSkills></AllSkills>
            <AllProjects></AllProjects>
            <Contacts></Contacts>
            
        </div>
    );
};

export default Home;