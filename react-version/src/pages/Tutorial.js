import React, {useContext} from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ReactHtmlParser from 'react-html-parser';
import {BrowserRouter as Router, Link, useParams } from 'react-router-dom';

const Tutorial = () => {
  const { tutorialsJson } = useContext(PracticeContext); 
  const { moduleId } = useParams();

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
};

export default Tutorial;