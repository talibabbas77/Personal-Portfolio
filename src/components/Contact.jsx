import React from "react";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-[1200px] mx-auto bg-black sm:py-20 p-5" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold leading-tight primary-color">
          Contact Me
        </h2>
        <div className="flex flex-cols-4 justify-center items-center gap-5 pt-8">
          <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtMgCNGmnhjFBzrcSDrqrbJJcdNBkpKjMCfdjGFxCCPhxMGksHXTQwFJGkCHTdkkFqVWwdsV"
              target="_blank"
              className="text-white text-6xl hover:text-[#c71610] transition-all duration-[350ms]"
            >
              <SiGmail />
            </a>
            <button className="text-white">Gmail</button>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
            <a
              href="https://linkedin.com/in/talib-abbas-9b0166254"
              target="_blank"
              className="text-white text-6xl hover:text-[#0077b5] transition-all duration-[350ms]"
            >
              <FaLinkedin />
            </a>
            <button className="text-white">LinkedIn</button>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
            <a
              href="https://wa.me/03184189654"
              target="_blank"
              className="text-white text-6xl hover:text-[#25d33c] transition-all duration-[350ms]"
            >
              <FaWhatsapp />
            </a>
            <button className="text-white">WhatsApp</button>
          </div>
          <div className="flex flex-col items-center m-4 sm:my-0 w-[60px] md:w[100px]">
            <a
              href="https://www.instagram.com/talib_ali77?igsh=MW0zbmxxaHJpNDZqMQ%3D%3D&utm_source=qr"
              target="_blank"
              className="text-white text-6xl hover:text-[#d62976] transition-all duration-[350ms]"
            >
              <FaInstagram />
            </a>
            <button className="text-white">Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
