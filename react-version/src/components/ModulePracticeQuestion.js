import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Displays the question to the user
const ModulePracticeQuestion = ( {module, questionNumber} ) => {

  const { languageSwitch } = useContext(PracticeContext);

  //console.log('ModulePracticeQuestion', questionNumber.questionIndex);

  let question = languageSwitch ? module.questions[questionNumber].nativeLang[0] : module.questions[questionNumber].foreignLang[0];
  question = question.charAt(0).toUpperCase() + question.slice(1); // uppercase first letter

  return (
    <div className="module-practice-question">
      {/* questionNumber.questionIndex increments and next question is selected from questions index */}
      <h3>{question}</h3>
    </div>
  );
}

export default ModulePracticeQuestion;