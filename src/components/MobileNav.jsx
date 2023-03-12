import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const MobileNav = ({setActive, active, showSideNav, setShowSideNav}) => {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 w-full h-screen bg-[rgba(0,0,0,0.5)] opacity-100 z-20 duration-300 ease-in lg:hidden ${
        showSideNav
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div className="bg-color-gray-100 w-full h-screen max-w-md absolute top-0 right-0 grid place-items-center">
        <ul className="flex flex-col gap-4 items-center">
          <a
            href="#home"
            className={`text-color-gray-300 font-medium text-xl mb-4 relative font-Playfair ${
              active === "#home" ? "nav-link" : ""
            }`}
            onClick={() => {
              setActive("#home");
              setShowSideNav(!showSideNav);
            }}
          >
            Home
          </a>
          <a
            href="#about"
            className={`text-color-gray-300 font-medium text-xl mb-4 relative font-Playfair ${
              active === "#about" ? "nav-link" : ""
            }`}
            onClick={() => {
              setActive("#about");
              setShowSideNav(!showSideNav);
            }}
          >
            About
          </a>
          <a
            href="#service"
            className={`text-color-gray-300 font-medium text-xl mb-4 relative font-Playfair ${
              active === "#service" ? "nav-link" : ""
            }`}
            onClick={() => {
              setActive("#service");
              setShowSideNav(!showSideNav);
            }}
          >
            Services
          </a>
          <a
            href="#team"
            className={`text-color-gray-300 font-medium text-xl mb-4 relative font-Playfair ${
              active === "#team" ? "nav-link" : ""
            }`}
            onClick={() => {
              setActive("#team");
              setShowSideNav(!showSideNav);
            }}
          >
            Our Team
          </a>
          <a
            href="#contact"
            className={`bg-color-gray-300 px-3 py-1 text-color-gray-100 font-medium text-xl rounded-sm font-Playfair ${
              active === "#contact" ? "bg-color-gray-400" : ""
            }`}
            onClick={() => {
              setActive("#contact");
              setShowSideNav(!showSideNav);
            }}
          >
            Contact Us
          </a>
        </ul>

        {/* close btn */}
        <motion.div
          className="absolute top-4 right-4 text-color-gray-400 cursor-pointer"
          onClick={() => setShowSideNav(!showSideNav)}
          whileTap={{ rotate: 360 }}
        >
          <XMarkIcon className="w-6" />
        </motion.div>
      </div>
    </div>
  );
};

export default MobileNav;
