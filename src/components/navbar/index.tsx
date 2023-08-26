import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu from "../../assets/hamburger.png";
import { Link } from "react-scroll";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const flexBetween = "flex items-center justify-between";
  const mobileMenuClasses = isMenuOpen ? "block" : "hidden";

  return (
    <nav className="text-white bg-white z-20 py-5 mb-[30px] fixed w-full">
      <div className="container mx-auto">
        <div className={`${flexBetween}`}>
          <div className="logo cursor-pointer">
            <img src={logo} alt="logo" />
          </div>
          <ul
            className={`md:${flexBetween} ${mobileMenuClasses} md:flex gap-7`}
          >
            <Link
              activeClass="active"
              offset={-200}
              smooth={true}
              spy={true}
              to="home"
              className="text-paragraph-color hover:text-secondary-100 font-semibold font-openSans text-base cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to="about"
              className="text-paragraph-color hover:text-secondary-100 font-semibold font-openSans text-base cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to="packages"
              className="text-paragraph-color hover:text-secondary-100 font-semibold font-openSans text-base cursor-pointer"
            >
              Packages
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to="services"
              className="text-paragraph-color hover:text-secondary-100 font-semibold font-openSans text-base cursor-pointer"
            >
              Services
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              to="blog"
              className="text-paragraph-color hover:text-secondary-100 font-semibold font-openSans text-base cursor-pointer"
            >
              Blog
            </Link>
            {/* Add more navigation links here */}
          </ul>
          <div className="menu cursor-pointer" onClick={toggleMenu}>
            <img src={menu} alt="menu-btn" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
