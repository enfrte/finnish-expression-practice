import React, {} from 'react';
import ModulePracticeAnswerResult from './ModulePracticeAnswerResult';

// 
const ModulePracticeAnswerArea = ( {module, questionNumber} ) => {

  // split nativeLang into individual words
   

  return (
    <div className="w3-container module-practice-answer-area">
    <p>A: {module.questions[questionNumber].nativeLang[0]}</p>
      <ModulePracticeAnswerResult questionNumber={ questionNumber } /> 
    </div>
  );
}

export default ModulePracticeAnswerArea;