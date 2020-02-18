// This component displays when the user has finished their practice. 
// Upon state change, it is responsible for resetting state so that other modules can be loaded. 

import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import { Link } from 'react-router-dom';

const ModuleFinished = () => {
  const { 
    setQuestionIndex, setProgressPercent,
  } = useContext(PracticeContext);

  function closeModule() {
    // reset the exercises
    setQuestionIndex(0); 
    setProgressPercent(0);
  }

  return (
    <div className="module-finished-container">
      <h3>You have completed the module.</h3>
      <Link to={'/'}>
        <button className="answer-button answer-button-continue" onClick={closeModule}>BACK TO EXERCISES</button>
      </Link>
    </div>
  );
}

export default ModuleFinished;