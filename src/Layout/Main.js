import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Components/Headers/Headers';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            <Headers></Headers>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
      
    );
};

export default Main;