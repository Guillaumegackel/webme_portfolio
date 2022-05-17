import React from "react";
import mui from "../assets/mui.png";
import git from "../assets/git.png";
import redux from "../assets/redux.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Work
          </p>
          <p className="py-6">Check Out my recent Work</p>
        </div>
{/* container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

			{/* grid item */}
          <div  
		  style={{ backgroundImage: `url(${mui})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

{/* Ajouter lien de demo et github */}
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  
		  style={{ backgroundImage: `url(${git})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  
		  style={{ backgroundImage: `url(${redux})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
			{/* grid item */}
          <div  
		  style={{ backgroundImage: `url(${mui})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  
		  style={{ backgroundImage: `url(${git})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  
		  style={{ backgroundImage: `url(${redux})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
