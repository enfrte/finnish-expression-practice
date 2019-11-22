import React from 'react';

// Displays the question to the user
const ModulePracticeQuestion = ( {module, questionNumber} ) => {

  //console.log('ModulePracticeQuestion', questionNumber.questionIndex);
  

  return (
    <div className="w3-container module-practice-question">
      {/* questionNumber.questionIndex increments and next question is selected from questions index */}
      <h3>Q: {module.questions[questionNumber].foreignLang[0]}</h3>
    </div>
  );
}

export default ModulePracticeQuestion;