// This component is a modal popup that displays when the user has finished their practice. 
// Upon state change, it is responsible for resetting state so that other modules can be loaded. 

import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const ModuleFinished = () => {
  const { selectedPractice } = useContext(PracticeContext);
  const { showModuleFinished, setShowModuleFinished } = useContext(PracticeContext);
  const { setQuestionIndex } = useContext(PracticeContext);
  const { setSelectedPracticeEnd } = useContext(PracticeContext);
  const { setProgressPercent } = useContext(PracticeContext);
  
  const { setSelectedPractice } = useContext(PracticeContext);
  const { setActiveModule } = useContext(PracticeContext);
  const { setShowModuleMenu } = useContext(PracticeContext);

  useEffect(() => {
    if (showModuleFinished) {
      // show the modal popup
      setShowModuleFinished(true); 
    }
  }, [setShowModuleFinished, showModuleFinished]);

  function closeModule() {
    // reset the exercises
    setQuestionIndex(0); 
    setSelectedPractice(false);
    setActiveModule(null);
    setSelectedPracticeEnd(false);
    setShowModuleFinished(false);
    setProgressPercent(0);
    setShowModuleMenu(true);
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