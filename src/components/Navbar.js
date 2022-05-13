import React from "react";
import { FaBars, faBars, FaTimes } from "react-icons/fa";
import logo from "../assets/WebMelogo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={logo} alt="logo" style={{ width: "80px" }} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* BurgerMenu */}
      <div className="hidden">
        <FaBars />
      </div>
      {/* MobileMenu */}
      <ul className="hidden">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/* SocialIcon */}
      <div></div>
    </div>
  );
};

export default Navbar;
