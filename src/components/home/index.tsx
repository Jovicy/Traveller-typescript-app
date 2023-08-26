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

const Home: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section id="home" className={`${flexBetween} bg-transparent w-full pt-36 pb-14`}>
      <div className={`${flexBetween} mx-auto w-full gap-4 container`}>
        <div className="flex flex-col gap-3 w-9/12">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                Start Travelling with us
              </h2>
            </div>
            <div>
              <h1 className="font-messiri text-base-lg font-bold text-heading-color text-transform: capitalize">
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
          <div className="bg-white shadow-lg shadow-primary-25 p-5 rounded-md flex items-center gap-5 w-full h-auto">
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 cursor-pointer">
              <MapPinIcon className="h-6 w-6 text-primary-100" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-openSans">Location</p>
                <p className="font-bold font-messiri text-nrml text-primary-100 whitespace-nowrap">
                  Dubai Marina
                </p>
              </div>
              <ChevronDownIcon className="h-6 w-6 text-primary-100" />
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 whitespace-nowrap  cursor-pointer">
              <CalendarIcon className="h-6 w-6 text-primary-100" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-openSans">Date</p>
                <p className="font-bold font-messiri text-nrml text-primary-100">
                  24.06.2023
                </p>
              </div>
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-start h-1/4 items-center w-1/4 whitespace-nowrap  cursor-pointer">
              <UserIcon className="h-6 w-6 text-primary-100" />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-normal font-openSans">Participant</p>
                <p className="font-bold font-messiri text-nrml text-primary-100">
                  4 Adults
                </p>
              </div>
            </div>
            <div className="bg-primary-10 p-2 rounded-md gap-3 flex justify-center h-1/4 items-center w-1/4 cursor-pointer">
              <ArrowRightIcon className="h-11 w-11 text-primary-100" />
            </div>
          </div>
        </div>
        <div className="w-4/12">
          <div className="relative">
            <img
              src={dubai}
              className="cursor-pointer absolute z-10 transition-all outline-offset-2 top-[-20rem] left-[-10rem] rounded-bl-lg w-[345px] h-[371px] hover:z-20 hover:scale-105 hover:-translate-y-5"
              alt="dubai-skyscraper"
            />
            <img
              src={tourist}
              className="cursor-pointer absolute z-10 transition-all outline-offset-2 top-[-4rem] left-[1rem] rounded-tr-lg w-[345px] h-[371px]"
              alt="tourist-on-a-mountain"
            />
            <img
              src={playBtn}
              alt="play-btn"
              className="absolute z-10 top-[-14rem] left-[12.5rem] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
