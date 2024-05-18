import React from "react";
import heroSection from "../Assets/heroSection.png";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[75vh] mx-auto py-8 bg-black">
      <div className="my-auto mx-auto w-[300px] pt-[5.8rem] h-auto lg:w-[400px] pl-2">
        <img src={heroSection} alt="hero-image" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-7xl font-extrabold">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            className="text-white"
            sequence={["Web Developer", 1000, "Frontend Developer", 1000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Talib Abbas and I'm a Frontend Web Developer.
        </p>
        <div className="my-8">
          <a
            href="https://github.com/talibabbas77/myResume/blob/main/myResume_Talib%20Abbas.pdf"
            target="_blank"
            className="font-medium px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white"
          >
            My Resume
          </a>
          <a
            href="https://wa.me/03184189654"
            target="_blank"
            className="font-medium px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
