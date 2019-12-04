// the Continue button that also shows the user if they are correct or wrong
import React, { useEffect, useContext, useState } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleFinished from './ModuleFinished';

// Enables the user to check their answer, shows the result, and provides an element to proceed to the next question
const ModulePracticeAnswerResult = ( {questionNumber, answer, attempt} ) => {
  const { setShowModuleFinished } = useContext(PracticeContext);
  const { questionIndex, setQuestionIndex } = useContext(PracticeContext);
  const { selectedPracticeEnd } = useContext(PracticeContext);

  const [checkAnswer, setCheckAnswer] = useState(false);

  // create the user selected module for practice
  useEffect(() => {
    setCheckAnswer(false); // answer state is reverted when question state is updated
  }, [questionIndex]);

  // navigate to the next question
  function progress(e) {
    e.preventDefault();
    if (checkAnswer === false) {
      setCheckAnswer(true);
      if (attempt === answer) {
        console.log('Correct');
        // set styles
      }
      else {
        // set incorrect styles
      }
      return; 
    }
    if (selectedPracticeEnd === true) {
      // there are no more questions - don't progress any further
      if (checkAnswer) {
        setShowModuleFinished(true);
      }
      return;
    }
    // if checkAnswer is true, user has already answers and received feedback. progress to next question 
    setQuestionIndex(questionNumber + 1);
  }
  
  return (
    <div className="module-practice-answer-result">
      
      {/* TO DO: 
        set a conditional diabled flag in the button markup based on the absence of answer data in the answer area */}

      <button 
        className={ checkAnswer === false ? 'answer-button answer-button-default' : 'answer-button answer-button-continue' } 
        onClick={progress} disabled={attempt < 1 ? 'disabled' : ''}>
          { checkAnswer === false ? 'Check' : 'Continue' }
      </button>
      
      <ModuleFinished />
    </div>
  );
}

export default ModulePracticeAnswerResult;