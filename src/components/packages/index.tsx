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
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                Packages
              </h2>
            </div>
            <div>
              <h1 className="font-messiri text-base-md font-bold text-heading-color text-transform: capitalize">
                Embark on our Exclusive <br /> Package
              </h1>
            </div>
          </div>
          <div className="flex items-start gap-10">
            <div className="w-1/2 flex flex-col gap-6">
              <div>
                <img src={beachImg} alt="beach-img" />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex gap-6">
                  <p className="text-heading-color font-normal">24 - 28 july</p>
                  <p className="text-heading-color font-normal">-</p>
                  <p className="text-heading-color font-normal">
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
                <div className="flex gap-5">
                  <div>
                    <button className="bg-primary-100 hover:bg-transparent text-white hover:text-primary-100 font-semibold border hover:border-primary-100 text-transform: capitalize text-nrml rounded-none py-2 px-4 cursor-pointer">
                      Book Now
                    </button>
                  </div>
                  <div>
                    <button className="bg-transparent hover:bg-primary-100 text-primary-100 hover:text-white border border-primary-100 font-semibold text-transform: capitalize text-nrml rounded-none py-2 px-4 cursor-pointer">
                      Explore More
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-7">
                {packagesFeatures.map((feature) => (
                  <div className="border-b-2 border-black last-of-type:border-none">
                    <div className="flex gap-6">
                      <p className="text-heading-color font-normal">
                        {feature.startDate}
                      </p>
                      <p className="text-heading-color font-normal">-</p>
                      <p className="text-heading-color font-normal">
                        {feature.timeSpent}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-heading-color font-bold text-md font-messiri text-transform: capitalize">
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
