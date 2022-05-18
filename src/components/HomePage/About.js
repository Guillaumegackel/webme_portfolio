import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
		  </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>Hi, I'm Guillaume , nice to meet you</p>
            </div>
			<div>
				<p>
        <span className="font-bold hover:text-pink-500">Project Director</span> in severals digital agencies (BETC / WPP / ...), I operate at 39 years old a retraining in Web Development.<br/>I just finished a 6 month training at <a href="https://oclock.io/formations/developpeur-web-fullstack-javascript" className="font-bold hover:text-pink-500">O'clock School </a> to become a JavaScript Fullstack Developer with <a  href="https://epicreact.dev/why-i-love-react/#:~:text=So%20another%20thing%20I%20love,html%20file%20using%20this%20approach." className="font-bold hover:text-pink-500">a love Crush for "REACT JS".</a><br/>
        It is my curiosity and my attraction for the digital universe and its differents media that drive me today
				</p>
			</div>
          </div>
        </div>
      </div>
  );
};

export default About;
