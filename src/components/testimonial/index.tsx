import React from "react";
import bookBtn from "../../assets/book btn.svg";
import quote from '../../assets/blockquote.png';
import { testimonials } from "../../data/database";

const Testimonial: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="services"
      className={`${flexBetween} bg-testimonial bg-no-repeat bg-left-bottom py-44 w-full bg-primary-10`}
    >
      <div className={`${flexBetween} md:flex-row flex-col md:items-start items-center mx-auto w-full gap-10 container`}>
        <div className="flex flex-col gap-6 w-2/5 md:text-left text-center">
          <div>
            <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
              Testimonial
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize leading">
              What say our <br /> travelers
            </h1>
            <p>
              Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles,
              pero la mayoría sufrió sufrió alteraciones en alguna manera.
            </p>
          </div>
          <div className="flex md:justify-start justify-center">
            <img src={bookBtn} alt="book-btn" className="cursor-pointer" />
          </div>
        </div>
        <div className="md:w-4/5 w-full">
          <div className="">
                <div className="flex justify-center flex-wrap gap-6">
                    {testimonials.map((testimonial) => (
                        <div className="bg-white gap-4 p-4 flex flex-col md:rounded-none rounded-md items-start md:w-[48%] w-[90%]">
                            <div>
                                <img src={testimonial.ratings} alt="rating" />
                            </div>
                            <div>
                                <p className="text-heading-color text-base font-normal">
                                {testimonial.descp}
                                </p>
                            </div>
                            <div className="w-full flex justify-end px-5">
                                <img src={quote} alt="blockquote" className="rounded-lg border border-primary-25 p-2"/>
                            </div>
                            <div className="flex gap-5">
                                <div className="rounded-lg border border-primary-100">
                                <img
                                    src={testimonial.avatar}
                                    alt="avatar"
                                    className="rounded-lg"
                                />
                                </div>
                                <div className="flex flex-col justify-center">
                                <h3 className="text-heading-color text-base font-bold font-messiri text-transform: capitalize">
                                    {testimonial.username}
                                </h3>
                                <p className="text-nrml">{testimonial.handle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Testimonial;
