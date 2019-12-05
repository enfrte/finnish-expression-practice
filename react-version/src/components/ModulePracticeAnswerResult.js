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
  const [resultMessage, setResultMessage] = useState('');
  const [resultAnswer, setResultAnswer] = useState('');

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
      if (checkAnswer) {
        setShowModuleFinished(true);
      }
      return;
    }
    // if checkAnswer is true, user has already answers and received feedback. progress to next question 
    setQuestionIndex(questionNumber + 1);
  }
  
  useEffect(() => {
    // when check answer button has been pressed, its state changes to false until the continue button is pressed
    if (checkAnswer === true) {
      // display the result of the answer
      if (answer === attempt) {
        setResultMessage('Correct');
        setResultAnswer('');
      } 
      else {
        setResultMessage('Incorrect');
        setResultAnswer(answer);
      }
      return;
    }
  }, [checkAnswer, answer, attempt]);

  if ( checkAnswer === false ) {
    return (
      <div className="module-practice-answer-check-area">
        <button 
          style={attempt.length < 1 ? {} : {color: 'white', background: '#4CAF50'}} 
          className={ checkAnswer === false ? 'answer-button answer-button-default' : 'answer-button answer-button-continue' } 
          onClick={progress} disabled={attempt.length < 1 ? 'disabled' : ''}>Check Answer</button>
      </div>
    );
  }
  else {
    return (
      <div className="module-practice-answer-result-area">
        <div style={ answer === attempt ? { backgroundColor: 'rgb(99, 217, 104)', color: 'rgb(48, 113, 51)' } : { backgroundColor: 'rgb(255, 160, 176)', color: 'rgb(196, 0, 33)' } } className="module-practice-answer-result">

          <button 
            style={ answer === attempt ? { backgroundColor: 'rgb(48, 113, 51)', color: 'white' } : { backgroundColor: 'rgb(196, 0, 33)', color: 'white' } } 
            className="answer-button"
            onClick={ progress }>Continue
          </button>

          <div className="result-info-container">
            <div className="result-info">
              <h4 style={ answer === attempt ? { color: 'rgb(48, 113, 51)' } : { color: 'rgb(196, 0, 33)' } }>{ resultMessage }</h4>
              <p>{ answer === attempt ? '' : <strong>Answer: </strong> } { resultAnswer }</p>
            </div>
          </div>

        </div>
        <ModuleFinished />
      </div>
    );
  }

}

export default ModulePracticeAnswerResult;