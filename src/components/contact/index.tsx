import React from "react";
import contactBtn from "../../assets/contact btn.svg";

const Contact: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="contact"
      className="flex items-end bg-home bg-cover md:p-52 bg-bottom bg-no-repeat w-full"
    >
      <div
        className={`${flexBetween} md:flex-row flex-col mx-auto w-full gap-4 container mb-14`}
      >
        <div>
          <h1 className="font-messiri md:text-base-md text-center md:text-start text-md-resp font-bold text-white text-transform: capitalize">
            Start Saving on Your <br /> Travel Budget.
          </h1>
        </div>
        <div className="cursor-pointer">
          <img src={contactBtn} alt="contactBtn" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
