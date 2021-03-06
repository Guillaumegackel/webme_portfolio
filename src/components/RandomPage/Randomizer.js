// import React, { useState } from 'react';
import QuestionGenerator from './QuestionGenerator';
import { FaRandom } from "react-icons/fa";
import getRandomData from '../../data/getRandomData';
import { useState } from 'react';



const Randomizer = () => {

	const [question, setquestion] = useState(null)


	function handleClick() {
		setquestion(getRandomData())
	}

  return (


	<div name="random-itw-job" className="w-full h-screen bg-[#0a192f]">
	{/* container */}
	<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
	  <h1 className="text-4xl sm:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-2 mb-5 font-bold text-[#ccd6f6] text-center">
		Need some help to finish our meeting ?
	  </h1>
	  <br/>
	  <h2 className="text-2xl sm:text-4xl font-bold text-[#ccd6f6] text-center">
	Let destiny choose the last question
	  </h2>
	  <div>
		<button type='submit' className="text-white group border-2 px-6 py-3 flex items-center mt-10 m-auto hover:bg-blue-600 hover:border-blue-600 " onClick={handleClick}>
		Generate a random question
		  <span className="group-hover:scale-150 duration-300">
			<FaRandom className="ml-3"/>
		  </span>
		</button>

<div className='py-20 text-center'>
<QuestionGenerator michel={question}/>
</div>


	  </div>
	</div>
  </div> 
   )
}

export default Randomizer