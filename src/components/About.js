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
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates praesentium iure rem dolor fuga fugit quae odio quasi iusto error nisi ex veritatis consectetur soluta aliquid aut, nostrum tempora quibusdam assumenda necessitatibus reiciendis iste velit quia repellat? Aspernatur quod nam, expedita iusto perferendis deleniti nemo reprehenderit modi ullam eius tempora.
				</p>
			</div>
          </div>
        </div>
      </div>
  );
};

export default About;
