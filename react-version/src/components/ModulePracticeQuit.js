import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// The quit practice button
const ModulePracticeQuit = ( { moduleId } ) => {
  const { setQuestionIndex, setProgressPercent } = useContext(PracticeContext);

  const quitPractice = () => {
    setQuestionIndex(0); 
    setProgressPercent(0);
  };

  return (
    <button className="quit-practice" onClick={ quitPractice }>X</button>
  );

}

export default ModulePracticeQuit;