import React from "react";
import css from "../../assets/css.png";
import figma from "../../assets/figma.png";
import github from "../../assets/github.png";
import html from "../../assets/html.png";
import javascript from "../../assets/javascript.png";
import mongo from "../../assets/mongo.png";
import node from "../../assets/node.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import tailwind from "../../assets/tailwind.png";
import postgresql from "../../assets/postgresql.png";
import mui from "../../assets/mui.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full pt-10 bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
		  <div className="">
			  <p className="text-4xl font-bold inline border-b-4 border-blue-600 ">Skills</p>
			  <p className="py-4">These are Technologies I've worked with</p>
		  </div>

		  <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={html} alt="html icon" />
				  <p className="my-4">HTML</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={css} alt="css icon" />
				  <p className="my-4">CSS</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={javascript} alt="javascript icon" />
				  <p className="my-4">JS</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={react} alt="react icon" />
				  <p className="my-4">REACT JS</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={node} alt="node icon" />
				  <p className="my-4">NODE</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={postgresql} alt="postgresql icon" />
				  <p className="my-4">POSTGRESQL</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={mongo} alt="mongo icon" />
				  <p className="my-4">MONGO</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={redux} alt="redux icon" />
				  <p className="my-4">REDUX</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={github} alt="github icon" />
				  <p className="my-4">GITHUB</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={mui} alt="mui icon" />
				  <p className="my-4">MUI</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={tailwind} alt="tailwind icon" />
				  <p className="my-4">TAILWIND</p>
			  </div>
			  <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
				  <img className="w-20 mx-auto " src={figma} alt="figma icon" />
				  <p className="my-4">FIGMA</p>
			  </div>
		  </div>
	  </div>
    </div>
  );
};

export default Skills;
