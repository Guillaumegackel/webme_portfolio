import React from "react";
import konami from "../../assets/konami.png";
import OneMoreThingModal from "./OneMoreThingModal"

const OneMoreThing = () => {
  return (
    <div name="work" className="w-full md:h-screen  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            One More Thing...
          </p>
          <p className="flex flex-row text-2xl py-6 "><span className="mr-2"><img src={konami} alt="konami_code"/></span>Have you ever tried "Konami Code" ?</p>
		  <div>
		  <OneMoreThingModal/>
		  </div>
        </div>
      </div>
    </div>
  );
};

export default OneMoreThing;
