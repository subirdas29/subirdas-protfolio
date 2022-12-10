import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../Headers/Headers.css'

const Headers = () => {
  const [navbar,setNavbar] =useState(false)
  const changeBackground =()=>
  {
    if(window.scrollY >= 80)
    {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeBackground);


  

    return (
        <div>
            <div className={navbar? 'navbar active': 'navbar'}>
  <div>
    <div className="dropdown "style={{backgroundColor: "transparent" }}>
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contacts'>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl font-semibold">Subir Das</a>
  </div>
  <div className="navbar-center hidden lg:flex lg:justify-end">
    <ul className="menu flex-wrap flex-row p-0 ">
    <li><Link to='/'>Home</Link></li>
          <li><Link to='/skills'>Skills</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/about'>About Me</Link></li>
          <li><Link to='/contacts'>Contact</Link></li>
    </ul>
  </div>

</div>
        </div>
    );
};

export default Headers;