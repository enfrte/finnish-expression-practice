// the Continue button that also shows the user if they are correct or wrong
import React, { useEffect, useContext, useState } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Enables the user to check their answer, shows the result, and provides an element to proceed to the next question
const ModulePracticeAnswerResult = ( {questionNumber, answer, answers, attempt, isQuestion, totalQuestions} ) => {
  const { 
    setShowModuleFinished, questionIndex, setQuestionIndex, selectedPracticeEnd, setProgressPercent 
  } = useContext(PracticeContext);

  const [checkAnswer, setCheckAnswer] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [resultAnswer, setResultAnswer] = useState('');

  // this may need to change in future depending on whether user might be typing answers. 
  // See also localeCompare(), but I was having issues with that with Finnish öä characters 
  const checkAnwserText = (answers, attempt, isQuestion) => {
    //console.log('answers',answers);
    //console.log('attempt',attempt);
    if (isQuestion === true) { attempt = attempt.concat('?') }
      const correctAnswer = answers.some((answer) => { // The some() method checks if some array values pass a test
      return answer.toUpperCase() === attempt.toUpperCase()     
    });
    return correctAnswer; 
    // takes care of any calpitalisation false negatives entered in the database
    //return answer.toUpperCase() === attempt.toUpperCase() ? true : false;
  };

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
    // checkAnswer is true, user has already answered and received feedback. 
    // set the progress percent
    const percent = ((questionIndex + 1) / totalQuestions) * 100;
    setProgressPercent(percent);
    // progress to next question 
    setQuestionIndex(questionNumber + 1);
  }

  useEffect(() => {
    // when check answer button has been pressed, its state changes to false until the continue button is pressed
    if (checkAnswer === true) {
      // display the result of the answer
      setResultAnswer(answer);
      if (checkAnwserText(answers, attempt, isQuestion)) {
        setResultMessage('Correct');
        return;
      }
      setResultMessage('Incorrect');
    }
  }, [checkAnswer, answer, answers, attempt, isQuestion]);

  if ( checkAnswer === false ) {
    return (
      <div className="module-practice-answer-check-area">
        <button 
          style={attempt.length < 1 ? {} : {color: 'white', background: '#4CAF50'}} 
          className={ checkAnswer === false ? 'answer-button answer-button-default' : 'answer-button answer-button-continue' } 
          onClick={progress} disabled={attempt.length < 1 ? 'disabled' : ''}>CHECK</button>
      </div>
    );
  }
  else {
    return (
      <div className="module-practice-answer-result-area">
        <div style={ checkAnwserText(answers, attempt, isQuestion) ? { backgroundColor: 'rgb(99, 217, 104)', color: 'rgb(48, 113, 51)' } : { backgroundColor: 'rgb(255, 160, 176)', color: 'rgb(196, 0, 33)' } } className="module-practice-answer-result">

          <button 
            style={ checkAnwserText(answers, attempt, isQuestion) ? { backgroundColor: 'rgb(48, 113, 51)', color: 'white' } : { backgroundColor: 'rgb(196, 0, 33)', color: 'white' } }
            className="answer-button"
            onClick={ progress }>CONTINUE
          </button>

          <div className="result-info-container">
            <div className="result-info">
              <h3 style={ checkAnwserText(answers, attempt, isQuestion) ? { color: 'rgb(48, 113, 51)' } : { color: 'rgb(196, 0, 33)' } }>{ resultMessage }</h3>
              <p>{ checkAnwserText(answers, attempt, isQuestion) ? '' : <strong>Answer: </strong> } { resultAnswer.charAt(0).toUpperCase() + resultAnswer.slice(1) }{ isQuestion ? '?' : '' }</p>
            </div>
          </div>

        </div>
        {/*<ModuleFinished />*/}
      </div>
    );
  }

}

export default ModulePracticeAnswerResult;