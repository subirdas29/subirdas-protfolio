import React from 'react';

const Headers = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Home</a></li>
      <li><a>Skills</a></li>
          <li><a>Project</a></li>
          <li><a>About Me</a></li>
          <li><a>Contact</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-3xl font-bold">Subir Das</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <li><a>Home</a></li>
    <li><a>Skills</a></li>
          <li><a>Project</a></li>
          <li><a>About Me</a></li>
          <li><a>Contact</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Download Cv</a>
  </div>
</div>
        </div>
    );
};

export default Headers;