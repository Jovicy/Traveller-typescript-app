import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import menu from '../../assets/hamburger.png';

const Navbar: React.FC = () => {
    // const flexBetween = "flex items-center justify-between";

    return(
        <nav className="text-white bg-transparent py-4 px-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <ul className='flex gap-7'>
                <li className='font-semibold font-openSans text-base'><Link className='text-secondary-100' to={"/"}>Home</Link></li>
                <li className='font-semibold font-openSans text-base'><Link className='text-paragraph-color hover:text-secondary-100' to={"/"}>About</Link></li>
                <li className='font-semibold font-openSans text-base'><Link className='text-paragraph-color hover:text-secondary-100' to={"/"}>Contact</Link></li>
                <li className='font-semibold font-openSans text-base'><Link className='text-paragraph-color hover:text-secondary-100' to={"/"}>Services</Link></li>
                <li className='font-semibold font-openSans text-base'><Link className='text-paragraph-color hover:text-secondary-100' to={"/"}>Blog</Link></li>
            </ul>
            <div className="menu">
              <img src={menu} alt="menu-btn" />
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
