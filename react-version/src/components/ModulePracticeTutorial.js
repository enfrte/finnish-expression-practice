import React, {useContext} from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ReactHtmlParser from 'react-html-parser';
import {BrowserRouter as Router, Link } from 'react-router-dom';

const ModulePracticeTutorial = ( { moduleId } ) => {
  const { tutorialsJson } = useContext(PracticeContext); 

  return (
    <div className="module-practice-tutorial-container">
      <div className="module-practice-tutorial">
        <h2>{tutorialsJson[moduleId].title}</h2>
        <div>{ReactHtmlParser(tutorialsJson[moduleId].tutorial)}</div>
        <Link to={'/Practice/' + moduleId}>
          <button className="answer-button answer-button-continue">CLOSE TUTORIAL</button>
        </Link>
      </div>
    </div>
  );
}

export default ModulePracticeTutorial;