import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../components/Navbar.css";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div className="bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center border border-gray-600 z-10 fixed top-0 left-0 right-0">
        <a href="#">
          <h1 className="text-3xl font-bold primary-color ml-8 cursor-pointer">
            Talib Abbas
          </h1>
        </a>
        <ul className="hidden md:flex mr-10 ">
          <li className="p-5">
            <a href="#">Home</a>
          </li>
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <li className="p-5">
            <a href="#work">Work</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6 z-10">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="text-3xl primary-color font-semibold m-4">
            Talib Abbas
          </h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <a href="#" onClick={handleNav}>
                Home
              </a>
            </li>
            <li className="p-2">
              <a href="#about" onClick={handleNav}>
                About
              </a>
            </li>
            <li className="p-2">
              <a href="#work" onClick={handleNav}>
                Work
              </a>
            </li>
            <li className="p-2">
              <a href="#contact" onClick={handleNav}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
