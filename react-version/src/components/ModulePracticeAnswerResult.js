// the Continue button that also shows the user if they are correct or wrong
import React, { useEffect, useContext, useState } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Enables the user to check their answer, shows the result, and provides an element to proceed to the next question
const ModulePracticeAnswerResult = ( {questionNumber} ) => {
  
  const [checkAnswer, setCheckAnswer] = useState(false);

  const { questionIndex, setQuestionIndex } = useContext(PracticeContext);
  const { selectedPracticeEnd } = useContext(PracticeContext);

  //console.log('questionNumber',questionNumber);
  //console.log('questionIndex',questionNumber);

  //let buttonStatus = 'check';

  // inital button state disabled
  // if answer attempted, enable button
  // display button text "Check" 
  // upon click, text changes to "Continue"
  // next action increments the question index at Context level

  // create the user selected module for practice
  useEffect(() => {
    setCheckAnswer(false); // answer state is reverted when question state is updated
  }, [questionIndex]);

  // navigate to the next question
  function progress(e) {
    e.preventDefault();
    if (checkAnswer === false) {
      setCheckAnswer(true);
      return; 
    }
    if (selectedPracticeEnd === true) {
      // there are no more questions - don't progress any further
      return;
    }
    // if checkAnswer is true, user has already answers and received feedback. progress to next question 
    setQuestionIndex(questionNumber + 1);
  }
  
  return (
    <div className="w3-container module-practice-answer-result">
      {/* TO DO: set a conditional diabled flag in the button markup based on the absence of answer data in the answer area */}
      <button onClick={progress}>{ checkAnswer === false ? 'Check' : 'Continue' }</button>
    </div>
  );
}

export default ModulePracticeAnswerResult;