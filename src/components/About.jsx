import React from "react";
import aboutSection from "../Assets/aboutSection.png";

function About() {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
              Hello! I'm Talib Abbas, a passionate frontend developer with a
              keen eye for detail and a drive for crafting immersive digital
              experiences. My journey into frontend development began with a
              fascination for the intersection of technology and creativity.
              Over the years, I've honed my skills in HTML, CSS, and JavaScript,
              constantly staying abreast of the latest trends and best practices
              to deliver cutting-edge solutions.
            </p>
          </div>
        </div>
        <img
          className="mx-auto py-8 md:py-0"
          src={aboutSection}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default About;
