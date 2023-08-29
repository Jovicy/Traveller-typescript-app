import React from "react";
import p1 from "../../assets/Rectangle 18.png";
import p2 from "../../assets/Rectangle 17.png";
import p3 from "../../assets/Rectangle 16.png";
import readMore from "../../assets/Read more btn.svg";

const About: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="about"
      className={`${flexBetween} bg-transparent w-full pt-60 pb-14`}
    >
      <div className={"flex items-start mx-auto w-full container md:gap-0 gap-10 md:flex-row flex-col"}>
        <div className="md:w-1/2 w-full">
          <div className="md:relative md:left-40 w-full">
            <img
              src={p3}
              className="cursor-pointer md:absolute mt-30 z-10 transition-all outline-offset-2 top-[10rem] left-[-12rem] md:rounded-bl-lg rounded-md md:w-[305px] w-full md:h-[301px] hover:z-20 hover:scale-105 hover:-translate-y-5"
              alt="p1"
            />
            <img
              src={p2}
              className="cursor-pointer md:absolute -mt-10 z-10 transition-all outline-offset-2 top-[0rem] left-[0rem] md:rounded-tr-lg rounded-md md:w-[305px] w-full md:h-[301px] hover:z-20 hover:scale-105 hover:-translate-y-5"
              alt="p2"
            />
            <img
              src={p1}
              alt="p3"
              className="cursor-pointer md:absolute -mt-10 z-10 transition-all outline-offset-2 top-[-10rem] left-[-10rem] md:rounded-tl-lg rounded-md md:w-[245px] w-full md:h-[271px]"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <div className="flex flex-col gap-3 md:text-left text-center">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                about us
              </h2>
            </div>
            <div>
              <h1 className="font-messiri text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize">
                We are the best <br /> travel agency
              </h1>
            </div>
            <div className="flex gap-10 md:flex-row flex-col-reverse">
              <div className="flex md:items-start md:justify-start justify-center w-full">
                <img src={readMore} className="cursor-pointer" alt="readMore-btn" />
              </div>
              <div className="flex flex-col gap-5">
                <p>
                  Venenatis donec sit sit egestas varius. Dictum sit risus
                  scelerisque nulla amet vel mollis sem morbi. Egestas quam
                  scelerisque morbi nisi lacinia nunc.
                </p>
                <p>
                  Venenatis donec sit sit egestas varius. Dictum sit risus
                  scelerisque nulla amet vel mollis sem morbi. Egestas quam
                  scelerisque morbi nisi lacinia nunc.Venenatis donec sit sit
                  egestas varius.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
