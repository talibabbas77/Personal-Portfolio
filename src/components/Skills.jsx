import React from "react";
import html from "../Assets/html.png";
import css from "../Assets/css.png";
import js from "../Assets/js.png";
import tailwind from "../Assets/tailwind.png";
import react from "../Assets/react.png";
import bootstrap from "../Assets/bootstrap.png";
import mongodb from "../Assets/mongodb.png";
import nodejs from "../Assets/node.png";

function Skills() {
  return (
    <div className="border border-gray-600 bg-black text-gray-400 md:h-[200px] max-w-[1200px] mx-auto grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        My <br /> Tech <br />
        Stack
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={html} alt="html" />
        <p className="mt-2">HTML</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={css} alt="css" width={100} height={100} />
        <p className="mt-2">CSS</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={js} alt="js" width={100} height={100} />
        <p className="mt-2">JavaScript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={bootstrap} alt="bootstrap" width={100} height={100} />
        <p className="mt-2">Bootstrap</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={tailwind} alt="tailwind" width={100} height={100} />
        <p className="mt-2">Tailwind</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={mongodb} alt="mongodb" width={100} height={100} />
        <p className="mt-2">MongoDB</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={react} alt="react" width={100} height={100} />
        <p className="mt-2">React</p>
      </div>

      <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
        <img src={nodejs} alt="node" width={100} height={100} />
        <p className="mt-2">Node</p>
      </div>
    </div>
  );
}

export default Skills;
