import React from "react";

const QuestionGenerator = ({michel}) => {
//   const ListQuestion = datasQ.map(({ question, id }) => (
//     <div key={id}>
//       <strong>{getRandomData.question}</strong>
//     </div>
//   ));

//   const random = Math.floor(Math.random() * ListQuestion.length);

  return (
    <div className="py-5 text-center text-4xl sm:text-6xl text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-600 border-b-4 border-amber-300">
   {michel}
    </div>

  );
};

export default QuestionGenerator;
