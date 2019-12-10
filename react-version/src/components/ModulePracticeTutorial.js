import React, {useContext} from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Displays the question to the user
const ModulePracticeTutorial = ( { module } ) => {
  const { showPracticeTutorial, setShowPracticeTutorial } = useContext(PracticeContext);

  return (
    <div className="module-practice-tutorial-container">
      <button className="answer-button tutorial-button" onClick={ () => setShowPracticeTutorial(!showPracticeTutorial) }>Tutorial</button>
      <div className={ showPracticeTutorial ? 'module-practice-tutorial-screen' : 'hidden' }>
        <div className="module-practice-tutorial">
          <h3>{module.title}</h3>
          <p>{module.tutorial}</p>
          <button className="answer-button answer-button-continue" onClick={ () => setShowPracticeTutorial(!showPracticeTutorial) }>CLOSE TUTORIAL</button>
        </div>
      </div>
    </div>
  );
}

export default ModulePracticeTutorial;