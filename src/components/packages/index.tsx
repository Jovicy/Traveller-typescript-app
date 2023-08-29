import React from "react";
import beachImg from "../../assets/Rectangle 14.png";
import { packagesFeatures } from "../../data/database";

const Packages: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="packages"
      className={`${flexBetween} bg-transparent w-full pt-28 pb-14`}
    >
      <div className={`${flexBetween} mx-auto w-full gap-4 container`}>
        <div className="flex flex-col gap-8 md:text-left text-center md:items-start items-center">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                Packages
              </h2>
            </div>
            <div>
              <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize">
                Embark on our Exclusive <br /> Package
              </h1>
            </div>
          </div>
          <div className="flex items-start md:flex-row flex-col md:gap-10 gap-20">
            <div className="md:w-1/2 w-full flex flex-col gap-6">
              <div>
                <img src={beachImg} alt="beach-img" />
              </div>
              <div className="flex flex-col gap-6 md:items-start items-center">
                <div className="flex md:gap-6 gap-1">
                  <p className="text-heading-color font-normal md:text-nrml text-sm">24 - 28 july</p>
                  <p className="text-heading-color font-normal md:text-nrml text-sm">-</p>
                  <p className="text-heading-color font-normal md:text-nrml text-sm">
                    4 day 3 Night{" "}
                  </p>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-heading-color font-bold text-md font-messiri text-transform: capitalize">
                    Island Hopping Paradise
                  </h1>
                  <p className="font-openSans text-nrml font-normal leading-[150%]">
                    Arcu suscipit sapien purus et in non. Pellentesque tempor
                    enim et dignissim diam. Cursus egestas eget sed nascetur
                    gravida. Quis quis scelerisque ultrices at vulputate
                    ultrices velit. Odio et porta nulla egestas velit porttitor
                    sit. Augue duis felis augue interdum dolor turpis ut.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col gap-5">
                  <div>
                    <button className="bg-primary-100 hover:bg-transparent text-white hover:text-primary-100 font-semibold border hover:border-primary-100 text-transform: capitalize md:text-nrml text-sm rounded-none py-2 px-4 cursor-pointer">
                      Book Now
                    </button>
                  </div>
                  <div>
                    <button className="bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white border border-primary-100 font-semibold text-transform: capitalize md:text-nrml text-sm rounded-none py-2 px-4 cursor-pointer">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="flex flex-col gap-7 md:text-left text-center">
                {packagesFeatures.map((feature) => (
                  <div className="border-b-2 border-black last-of-type:border-none">
                    <div className="flex md:gap-6 gap-1 md:justify-start justify-center">
                      <p className="text-heading-color md:font-normal md:font-nrml text-sm">
                        {feature.startDate}
                      </p>
                      <p className="text-heading-color md:font-normal md:font-nrml text-sm">-</p>
                      <p className="text-heading-color md:font-normal md:font-nrml text-sm">
                        {feature.timeSpent}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-heading-color font-bold text-md text-md-resp font-messiri text-transform: capitalize">
                        {feature.title}
                      </h1>
                    </div>
                    <div className="pb-5">
                        <p className="font-openSans text-nrml font-normal leading-[150%]">{feature.desp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
