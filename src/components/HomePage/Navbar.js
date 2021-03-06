import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../../assets/WebMelogo.png";
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom';
import useKonamiCode from '../KonamiCode/useKonamiCode';
import soundKonami from '../KonamiCode/SoundKonami.js';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClickMenu = () => setNav(!nav);

  const konami = useKonamiCode();
	if (konami) {
		soundKonami();
	}



  return (
    <div name="Navbar" className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      {/* logo */}
      <NavLink to="/" className="p-4">
        <img  src={logo} alt="logo" style={{ width: "120px" }} />
      </NavLink>
      {/* Menu principal */}
      <ul className="hidden md:flex">
      <li className= { !konami ? "hidden" : "rounded-lg px-6 py-2 mr-4 text-white-500 bg-gradient-to-r from-purple-500 to-pink-600 font-bold text-center  hover:text-slate-600 " }>
        <NavLink 
        to="random-itw-job"
        smooth="true"
        duration={500}
        >
         Random Questions Job Interview
        </NavLink>
        </li>

        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"> <Link to="home" smooth="true" duration={500}>
         Home
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="about" smooth="true" duration={500}>
         About
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="skills" smooth="true" duration={500}>
         Skills
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="work" smooth="true" duration={500}>
         Work
        </Link></li>
        <li className="rounded-lg py-2 text-slate-100 font-medium hover:bg-slate-100 hover:text-slate-900 hover:font-bold"><Link to="contact" smooth="true" duration={500}>
         Contact
        </Link></li>
      </ul>

      {/* BurgerMenu */}
      <div onClick={handleClickMenu} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* MobileMenu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-center"
        }
      >

        <li className="py-6 text-4xl text-pink-600 hover:font-bold"><NavLink onClick={handleClickMenu} to="random-itw-job" smooth="true" duration={500}>
        Random Questions Job Itw
        </NavLink></li>


        <li className="py-6 text-4xl hover:font-bold"><Link onClick={handleClickMenu} to="home" smooth="true" duration={500}>
         Home
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu}  to="about" smooth="true" duration={500}>
         About
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="skills" smooth="true" duration={500}>
         Skills
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="work" smooth="true" duration={500}>
         Work
        </Link></li>
        <li className="py-6 text-4xl"><Link onClick={handleClickMenu} to="contact" smooth="true" duration={500}>
         Contact
        </Link></li>
      </ul>

      {/* SocialIcon */}
      <div className=" hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-blue-500">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="https://www.linkedin.com/in/guillaume-gackel-57436023/"
      target="blank">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#333333] ">
            <a 
			className="flex justify-between items-center w-full text-gray-300 " 
			href="https://github.com/Guillaumegackel"
      target="blank"
      >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] ease-in duration-300 bg-[#565f69]">
            <a 
			className="flex justify-between items-center w-full text-gray-300" 
			href="https://drive.google.com/file/d/1RstencGpb4nXkSWIAmRfLcfGQcERz2MH/view?usp=sharing" target="blank">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      
      </div>
    </div>
  );
};

export default Navbar;
