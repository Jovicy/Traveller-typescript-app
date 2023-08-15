import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import menu from '@/assets/hamburger.png';

const Navbar: React.FC = () => {
  return(
    <nav className='flex p-4 w-screen bg-white'>
        <div className="flex items-center justify-between">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/"}>About</Link></li>
                <li><Link to={"/"}>Contact</Link></li>
                <li><Link to={"/"}>Services</Link></li>
                <li><Link to={"/"}>Blog</Link></li>
            </ul>
            <div className="menu">
                <img src={menu} alt="menu-btn" />
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
