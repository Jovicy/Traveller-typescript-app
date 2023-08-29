import React from "react";
import { blogPost } from "../../data/database";
import { gallery } from "../../data/database";
import { CalendarIcon } from "@heroicons/react/24/outline";

const Blog: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <section
      id="blog"
      className="flex flex-col gap-40 bg-transparent w-full pt-36 pb-14"
    >
      <div className="relative -mt-60 w-full">
        <div className="flex md:flex-nowrap flex-wrap gap-4 items-center">
          {gallery.map((photo) => (
            <div className="md:w-1/5 w-full">
              <img
                src={photo.image}
                alt="gallery-img"
                className="w-full h-[271px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${flexBetween} mx-auto w-full gap-4 container`}>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:text-left text-center gap-3">
            <div>
              <h2 className="text-secondary-100 font-montez text-base-sm font-normal text-transform: capitalize">
                blog & news
              </h2>
            </div>
            <div>
              <h1 className="font-messiri md:text-base-md text-md-resp font-bold text-heading-color text-transform: capitalize">
                Read Our Latest News & <br /> Blog
              </h1>
            </div>
          </div>
          <div className="flex md:flex-row flex-col justify-between">
            {blogPost.map((post) => (
              <div className="md:w-[31.25%] w-full">
                <div className="relative">
                  <div className="bg-secondary-100 cursor-pointer text-white  rounded-tr-lg shadow-lg absolute py-2 px-5 flex items-center top-[1rem] right-[1rem] hover:scale-105">
                    <p className="font text-base">{post.category}</p>
                  </div>
                  <div>
                    <img
                      src={post.cover}
                      alt="image"
                      className="w-full h-[271px] object-cover rounded-tr-lg"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-lg w-full p-9 flex flex-col gap-3">
                  <div className="flex gap-2 items-center">
                    <div>
                      <CalendarIcon className="h-4 w-4 align-middle text-paragraph-color" />
                    </div>
                    <div>
                      <p className="text-nrml font-messiri">{post.date}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-messiri text-base-sm break-all font-bold text-heading-color text-transform: capitalize underline decoration-1">
                      {post.title}
                    </h3>
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

export default Blog;
