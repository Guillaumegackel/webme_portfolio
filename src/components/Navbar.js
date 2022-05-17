import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/WebMelogo.png";
import { Link } from 'react-scroll'
import useKonamiCode from './KonamiCode/useKonamiCode';
import Sound from './KonamiCode/Sound';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClickMenu = () => setNav(!nav);

  const konami = useKonamiCode();

  if (konami) {
    return <div>
      <Sound />

  </div>
  }

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* logo */}
      <div className="p-4">
        <img  src={logo} alt="logo" style={{ width: "120px" }} />
      </div>
      {/* Menu principal */}
      <ul className="hidden md:flex">
      <li className="rounded-lg px-6 py-2 text-pink-500 font-medium hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:text-white hover:font-bold text-center"> <Link to="home" smooth={true} duration={500}>
         Random Questions Job Interview
        </Link></li>

        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"> <Link to="home" smooth={true} duration={500}>
         Home
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="about" smooth={true} duration={500}>
         About
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="skills" smooth={true} duration={500}>
         Skills
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="work" smooth={true} duration={500}>
         Work
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="contact" smooth={true} duration={500}>
         Contact
        </Link></li>
      </ul>

      {/* BurgerMenu */}
      <div onClick={handleClickMenu} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}{" "}
      </div>

      {/* MobileMenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center"
        }
      >

        <li className="py-6 text-4xl text-pink-600 hover:font-bold"><Link onClick={handleClickMenu} to="home" smooth={true} duration={500}>
        Random Questions Job Itw
        </Link></li>


        <li className="py-6 text-4xl hover:font-bold"><Link onClick={handleClickMenu} to="home" smooth={true} duration={500}>
         Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu}  to="about" smooth={true} duration={500}>
         About
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="skills" smooth={true} duration={500}>
         Skills
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="work" smooth={true} duration={500}>
         Work
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="contact" smooth={true} duration={500}>
         Contact
        </Link></li>
      </ul>

      {/* SocialIcon */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-blue-500">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="https://www.linkedin.com/in/guillaume-gackel-57436023/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#333333] ">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="https://github.com/Guillaumegackel">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#6fc2b0]]">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#565f69]">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      
      </div>
    </div>
  );
};

export default Navbar;
