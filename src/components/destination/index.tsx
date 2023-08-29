import React from "react";
import location from "../../assets/location.png";
import star from '../../assets/star.png'
import { destinations } from "../../data/database";

const Destination: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="destination"
      className={`${flexBetween} bg-transparent w-full pt-36 pb-28`}
    >
      <div className="flex flex-col justify-center items-center mx-auto w-full gap-4 container">
        <div>
          <div>
            <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
              destination
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <div>
            <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-center text-heading-color text-transform: capitalize">
              Find you best destination
            </h1>
          </div>
          <div className="flex flex-wrap md:justify-between justify-center md:text-left text-center gap-6">
            {destinations.map((destination) => (
              <div>
                <div className="relative">
                  <div className="bg-white cursor-pointer rounded-tr-lg shadow-lg absolute py-2 px-5 flex gap-2 items-center top-[1rem] right-[1rem] hover:scale-105">
                    <img src={star} alt="star" />
                    <p className="font text-base">{destination.ratings}</p>
                  </div>
                  <div>
                    <img src={destination.image} alt="image" className="object-cover w-[305px] h-[271px] rounded-tr-lg"/>
                  </div>
                </div>
                <div>
                  <h1 className="text-heading-color font-bold text-base-sm font-messiri text-transform: capitalize">{destination.title}</h1>
                </div>
                <div className="flex gap-3 items-center justify-center md:justify-start">
                  <div>
                    <img src={location} alt="location" />
                  </div>
                  <div>
                    <p>{destination.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destination;
