import React, {useContext} from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

// Displays the question to the user
const ModulePracticeTutorial = ( { module } ) => {
  const { showPracticeTutorial, setShowPracticeTutorial } = useContext(PracticeContext);

  return (
    <div className="module-practice-tutorial-container">
      <button className="answer-button tutorial-button" onClick={ () => setShowPracticeTutorial(!showPracticeTutorial) }>Tutorial</button>
      <div className={ showPracticeTutorial ? 'module-practice-tutorial-screen' : 'hidden' }>
        <div className="module-practice-tutorial">
          <h2>{module.title}</h2>
          <div>{ReactHtmlParser(module.tutorial)}</div>
          <button className="answer-button answer-button-continue" onClick={ () => setShowPracticeTutorial(!showPracticeTutorial) }>CLOSE TUTORIAL</button>
        </div>
      </div>
    </div>
  );
}

export default ModulePracticeTutorial;