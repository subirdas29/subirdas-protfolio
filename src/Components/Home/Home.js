import React from 'react';
import About from '../../About/About';
import Footer from '../../Footer/Footer';
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
            <About></About>
            <AllSkills></AllSkills>
            <AllProjects></AllProjects>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;