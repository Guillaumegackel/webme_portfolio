import React from "react";
import cduprops from "../../assets/cduprops.png";
import Cine_WebMe from "../../assets/Cine_WebMe.png";
import Doudou_Kitchen from "../../assets/Doudou_Kitchen.png";
import Meteo_WebMe from "../../assets/Meteo_WebMe.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen pt-10 text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto mt-30 p-4 flex flex-col justify-center w-full h-full">
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
		  style={{ backgroundImage: `url(${cduprops})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                C DU PROPS
              </span>

{/* Ajouter lien de demo et github */}
              <div className="pt-8 text-center">
                <a href="/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="https://github.com/Guillaumegackel/apotheose-front" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>

          <div  
		  style={{ backgroundImage: `url(${Cine_WebMe})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               LE CINE DE WEBME
              </span>

              <div className="pt-8 text-center">
                <a href="https://cine-webme.netlify.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="https://github.com/Guillaumegackel/cinema_app" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
          <div  
		  style={{ backgroundImage: `url(${Doudou_Kitchen})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DOUDOU KITCHEN
              </span>

              <div className="pt-8 text-center">
                <a href="https://doudou-kitchen.netlify.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="https://github.com/Guillaumegackel/Doudou-Kitchen" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Source Code</button>
                </a>
              </div>
            </div>
          </div>
			{/* grid item */}
          <div  
		  style={{ backgroundImage: `url(${Meteo_WebMe})` }}
		  className="shadow-lg shadow-[#40c16] group container rounded-md flex justify-center items-center mx-auto content-div">

            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                METEO APP
              </span>

              <div className="pt-8 text-center" >
                <a href="https://meteo-webme.netlify.app/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Démo</button>
                </a>
                <a href="https://github.com/Guillaumegackel/meteo-application" target="blank">
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
