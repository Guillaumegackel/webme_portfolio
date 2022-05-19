import React, { useState } from 'react'
import { datasQ } from '../../data/datas';


const QuestionGenerator = () => {

	const ListQuestion = datasQ.map(({ question, id }) => (
		<div key={id} className="text-white">
		  <strong>{question}</strong>
		</div>
	  ))

	  const random = Math.floor(Math.random() * ListQuestion.length);	

  return (
<div> {ListQuestion[random]} </div>
)
	}


export default QuestionGenerator