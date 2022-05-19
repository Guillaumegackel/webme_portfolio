import React, { useState } from 'react'
import { datasQ } from '../../data/datas';


const QuestionGenerator = () => {

	const ListQuestion = datasQ.map(({ question, id }) => (
		<div key={id} >
		  <strong>{question}</strong>
		</div>
	  ))

	  const random = Math.floor(Math.random() * ListQuestion.length);	

  return (
<div className=" mt-20 text-center text-4xl sm:text-7xl text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-600 border-b-4 border-amber-400"> {ListQuestion[random]} </div>
)
	}


export default QuestionGenerator