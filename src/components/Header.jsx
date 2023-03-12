import React, { useState } from "react";
import Ampersand from '../assets/images/ampersand.png'
import {Bars3Icon} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

const Header = () => {
  const [active, setActive] = useState('#home')
  const [showSideNav, setShowSideNav] = useState(false)

  return (
    <>
      <header className="h-20 w-full bg-color-gray-100 shadow-md fixed top-0 z-10 right-0 left-0 flex justify-center items-center px-8 xl:px-[5%] ">
        <nav className="w-full h-full flex items-center justify-between">
          <a href="#home">
            <h1 className="m-0 lg:text-3xl md:text-2xl text-lg font-Abril text-color-gray-400 ">
              Morgan
              <img src={Ampersand} alt="ampersand" className="inline-block " />
              <span className="lg:text-3xl md:text-2xl text-lg font-Abril text-color-gray-400 block md:inline-block ">
                Associates
              </span>
            </h1>
          </a>

          {/* desktop */}
          <ul className="lg:flex items-center gap-4 hidden">
            <a
              href="/#"
              className={`text-color-gray-300 font-medium text-lg mr-4 relative font-Playfair ${
                active === "#home" ? "nav-link" : ""
              }`}
              onClick={() => setActive("#home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`text-color-gray-300 font-medium text-lg mr-4 relative font-Playfair ${
                active === "#about" ? "nav-link" : ""
              }`}
              onClick={() => setActive("#about")}
            >
              About
            </a>
            <a
              href="#service"
              className={`text-color-gray-300 font-medium text-lg mr-4 relative font-Playfair ${
                active === "#service" ? "nav-link" : ""
              }`}
              onClick={() => setActive("#service")}
            >
              Services
            </a>
            <a
              href="#team"
              className={`text-color-gray-300 font-medium text-lg mr-4 relative font-Playfair ${
                active === "#team" ? "nav-link" : ""
              }`}
              onClick={() => setActive("#team")}
            >
              Our Team
            </a>
            <motion.a
              href="#contact"
              className={`bg-color-gray-300 px-3 py-1 text-color-gray-100 text-lg font-medium rounded-sm font-Playfair ${
                active === "#contact" ? "bg-color-gray-400" : ""
              }`}
              onClick={() => setActive("#contact")}
              whileTap={{ scale: 1.1 }}
            >
              Contact Us
            </motion.a>
          </ul>
          {/* menu */}
          <motion.div
            className="lg:hidden grid place-items-center bg-color-gray-400 text-white p-1 rounded-sm cursor-pointer"
            onClick={() => setShowSideNav(!showSideNav)}
            whileTap={{ scale: 1.1 }}
          >
            <Bars3Icon className="lg:w-6 w-5" />
          </motion.div>
        </nav>
      </header>

      {/* mobile links */}
      <MobileNav
        setActive={setActive}
        active={active}
        setShowSideNav={setShowSideNav}
        showSideNav={showSideNav}
      />
    </>
  );
};

export default Header;
