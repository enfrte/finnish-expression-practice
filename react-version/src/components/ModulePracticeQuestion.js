import React from 'react';

// Displays the question to the user
const ModulePracticeQuestion = ( {module, questionNumber} ) => {

  //console.log('ModulePracticeQuestion', questionNumber.questionIndex);
  let question = module.questions[questionNumber].foreignLang[0];
  question = question.charAt(0).toUpperCase() + question.slice(1); // uppercase first letter

  return (
    <div className="module-practice-question">
      {/* questionNumber.questionIndex increments and next question is selected from questions index */}
      <h3>{question}</h3>
    </div>
  );
}

export default ModulePracticeQuestion;