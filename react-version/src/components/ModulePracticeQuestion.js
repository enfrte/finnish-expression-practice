import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Displays the question to the user
const ModulePracticeQuestion = ( {moduleId, questionNumber} ) => {
  const { questionsJson, languageSwitch } = useContext(PracticeContext);

  let question = languageSwitch ? questionsJson[moduleId][questionNumber].en[0] : questionsJson[moduleId][questionNumber].fi[0];
  question = question.charAt(0).toUpperCase() + question.slice(1); // uppercase first letter

  return (
    <div className="module-practice-question">
      <h3>{question}</h3>
    </div>
  );
}

export default ModulePracticeQuestion;