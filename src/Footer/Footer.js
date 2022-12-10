import React from 'react';
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
    return (
        <div className='mt-24'>
         
    
          <ScrollToTop
          color='blue'
          viewBox="-40 0 256 256"
        smooth />
            <footer className="footer footer-center p-10 bg-primary text-primary-content bg-[#2B3340] ">
  <div className='text-white'>

    <p className="font-bold">
     Subir Das Protfolio
    </p> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 

</footer>
        </div>
    );
};

export default Footer;