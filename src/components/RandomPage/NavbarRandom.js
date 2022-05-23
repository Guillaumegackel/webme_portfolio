import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../../assets/WebMelogo.png";
import { NavLink } from "react-router-dom";

const NavbarRandom = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* logo */}
      <NavLink to="/" className="p-4">
        <img src={logo} alt="logo" style={{ width: "120px" }} />
      </NavLink>
      {/* Menu principal */}
      <ul className="md:flex">
        <li className="rounded-lg px-6 py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold text-center">
          <NavLink to="/" smooth="true" duration={500}>
            Return to HomePage
          </NavLink>
        </li>
      </ul>

      {/* SocialIcon */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/guillaume-gackel-57436023/"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#333333] ">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Guillaumegackel"
              target="blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1RstencGpb4nXkSWIAmRfLcfGQcERz2MH/view?usp=sharing"
              target="blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarRandom;
