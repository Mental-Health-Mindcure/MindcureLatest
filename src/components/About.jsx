import React from "react";
import ab from "../assets/about.jpg";
function About() {
  return (
    <div data-aos="fade-up" id="About" className="dark:bg-white bg-gray-900">
      <div className="py-16 dark:bg-white bg-gray-900 ">
        <div className="container m-auto px-6 dark:text-gray-900 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
              <img
                className="rounded-lg "
                src={ab}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl dark:text-gray-900 text-gray-400 font-bold md:text-4xl">
                MindCure: Mental health and wellness application.
              </h2>
              <p className="mt-6 dark:text-gray-900 text-gray-400">
                MindCure is a cross- platform application designed to help you
                track and manage your moods.
              </p>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
