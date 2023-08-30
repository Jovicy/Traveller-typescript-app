import React from "react";
import {
  MapPinIcon,
  ChevronDownIcon,
  CalendarIcon,
  UserIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import tourist from "../../assets/Rectangle 6.png";
import dubai from "../../assets/Rectangle 19.png";
import playBtn from "../../assets/play btn.svg";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="home"
      className={`${flexBetween} bg-transparent w-full pt-36 pb-14`}
    >
      <div
        className={`md:${flexBetween} md:flex-row flex-col md:text-left text-center mx-auto w-full md:gap-4 gap-10 container`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex flex-col md:items-start items-center gap-3 md:w-9/12 w-full"
        >
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                Start Travelling with us
              </h2>
            </div>
            <div>
              <h1 className="font-messiri md:text-base-lg text-md-resp font-bold text-heading-color text-transform: capitalize">
                let’s enjoy your <br /> desired trip <br />
                with tripGoal
              </h1>
            </div>
            <div>
              <p className="font-base font-normal font-openSans leading-loose">
                The traveller where you can select your desired activity and
                destinations <br /> of your choice for vacations.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-primary-25 p-5 rounded-md flex items-center gap-5 md:w-full w-[85%] h-auto">
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 cursor-pointer">
              <MapPinIcon className="h-6 w-6 text-primary-100" />
              <div className="md:flex hidden flex-col gap-1 ">
                <p className="text-sm font-normal font-openSans">Location</p>
                <p className="font-bold font-messiri text-nrml text-primary-100 whitespace-nowrap">
                  Dubai Marina
                </p>
              </div>
              <ChevronDownIcon className="h-6 w-6 text-primary-100" />
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 whitespace-nowrap  cursor-pointer">
              <CalendarIcon className="h-6 w-6 text-primary-100" />
              <div className="md:flex hidden flex-col gap-1">
                <p className="text-sm font-normal font-openSans">Date</p>
                <p className="font-bold font-messiri text-nrml text-primary-100">
                  24.06.2023
                </p>
              </div>
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 whitespace-nowrap  cursor-pointer">
              <UserIcon className="h-6 w-6 text-primary-100" />
              <div className="md:flex hidden flex-col gap-1">
                <p className="text-sm font-normal font-openSans">Participant</p>
                <p className="font-bold font-messiri text-nrml text-primary-100">
                  4 Adults
                </p>
              </div>
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-center h-1/4 items-center w-1/4 cursor-pointer">
              <ArrowRightIcon className="md:h-11 md:w-11 h-6 w-6 text-primary-100" />
            </div>
          </div>
        </motion.div>
        <div className="md:w-4/12 w-full md:mt-0 mt-10">
          <div className="md:relative flex flex-wrap flex-col items-center gap-6">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
              src={dubai}
              className="cursor-pointer md:absolute z-10 transition-all outline-offset-2 top-[-20rem] left-[-10rem] md:rounded-bl-lg rounded-md md:w-[345px] w-[80%] md:h-[371px] hover:z-20 hover:scale-105 hover:-translate-y-5"
              alt="dubai-skyscraper"
            />
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              src={tourist}
              className="cursor-pointer md:absolute z-10 transition-all outline-offset-2 top-[-4rem] left-[1rem] md:rounded-tr-lg rounded-md md:w-[345px] w-[80%] md:h-[371px]"
              alt="tourist-on-a-mountain"
            />
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              src={playBtn}
              alt="play-btn"
              className="md:absolute z-10 top-[-14rem] left-[12.5rem] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
