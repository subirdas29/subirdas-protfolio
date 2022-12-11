import React from 'react';
import { Outlet } from 'react-router-dom';
import Headers from '../Components/Headers/Headers';
import Footer from '../Footer/Footer';

const Main = () => {
    return (
        <div>
            
        <Outlet></Outlet>
    
        </div>
      
    );
};

export default Main;