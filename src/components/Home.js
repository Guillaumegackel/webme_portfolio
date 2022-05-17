import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";



const Home = () => {
 
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Guillaume Gackel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developper
        </h2>
        <p className=" text-[#8892b0] mt-5 max-w-[700px]">I Think Good Dev Are not only Good Engineer</p>
        <p className=" text-[#8892b0] max-w-[700px]"></p>
        <p className=" text-[#8892b0] max-w-[700px]">But also need to be Good</p>
        <p className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold mt-5 text-2xl sm:text-3xl max -w-[500px]">Partner/Communicant/Marketer/CoWorker</p>
        <div>
          <button className="text-white group border-2 px-6 py-3 mt-4 my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
            View my work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
