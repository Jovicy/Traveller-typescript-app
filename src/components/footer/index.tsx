import React from "react";
import logo from "../../assets/logo.png";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { Link } from 'react-scroll';
import { socialIcons } from "../../data/database";

const Footer: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="footer"
      className={`${flexBetween} pb-4 pt-20 w-full bg-primary-10`}
    >
      <div className="flex flex-col mx-auto w-full gap-10 md:text-left text-center container">
        <div className="flex md:flex-row flex-col md:items-start items-center md:text-left text-center justify-between w-full md:items-center items-start">
          <div className="md:w-1/2 w-full">
            <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize">
              Join our newsletter
            </h1>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <div>
            <input
              type="email"
              placeholder="Email Your Address"
              className="bg-white text-white font-semibold border text-transform: capitalize text-nrml rounded-none py-4 px-4 w-9/12 md:w-full focus:outline-none focus:ring focus:ring-primary-100 "
            />
            </div>
            <div>
            <button className="bg-primary-100 hover:bg-transparent text-white hover:text-primary-100 font-semibold border relative right-10 hover:border-primary-100 text-transform: capitalize text-nrml rounded-none py-2 px-4 cursor-pointer">
              Subscribe
            </button>
            </div>

          </div>
        </div>
        <div className="border-t-2 pt-10 border-primary-25 flex md:flex-row flex-col md:gap-0 gap-10 md:text-left text-center md:items-start items-center justify-between w-full">
          <div className="flex flex-col gap-6">
            <div className="flex md:justify-start justify-center">
              <img src={logo} alt="footer-logo" />
            </div>
            <div>
              <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize">
                Extraordinary <br /> tour service
              </h1>
            </div>
            <div>
              <div className="flex md:flex-nowrap flex-wrap gap-6">
                {socialIcons.map((icons) => (
                  <div className="bg-primary-25 p-5 flex items-center rounded-full hover:bg-primary-100 cursor-pointer">
                    <img src={icons.image} alt="icon" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-messiri text-base-sm break-all font-bold text-heading-color text-transform: capitalize">
                Contact
              </h3>
            </div>
            <div className="flex flex-col md:items-start items-center gap-4">
              <div className="flex gap-1 items-center">
                <PhoneIcon className="h-4 w-4" />
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                  +1 (237) 238-123
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <EnvelopeIcon className="h-4 w-4" />
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                  traveler@gmail.com
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <MapPinIcon className="h-4 w-4" />
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                New square, NY
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-messiri text-base-sm break-all font-bold text-heading-color text-transform: capitalize">
                Company
              </h3>
            </div>
            <div className="flex flex-col md:items-start items-center gap-4">
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="about"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    About us
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="packages"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                  Our Package
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="destination"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Destination
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="blog"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Blog & News
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="contact"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Pricing Package
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="font-messiri text-base-sm break-all font-bold text-heading-color text-transform: capitalize">
                Open Trips
              </h3>
            </div>
            <div className="flex flex-col md:items-start items-center gap-4">
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Company History
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                  Popular Service
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Case Studies
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Expert Team
                </Link>
              </div>
              <div className="flex gap-1 items-center">
                <Link
                  activeClass="active"
                  offset={-200}
                  smooth={true}
                  spy={true}
                  to="#"
                  className="text-paragraph-color hover:text-secondary-100 font-medium font-messiri text-nrml cursor-pointer"
                >
                    Pricing Package
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 pt-4 border-primary-25 flex md:flex-row flex-col md:items-start items-center md:gap-0 gap-10 justify-between w-full">
            <div>
                <p>Copyright @2023, <span className="text-primary-100 font-bold">Trave</span><span className="font-bold text-secondary-100">ler</span> All Rights Reserved</p>
            </div>
            <div className="flex md:flex-row flex-col gap-6">
                <div>
                    <p>Terms Of Use</p>
                </div>
                <div>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>FAQs</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
