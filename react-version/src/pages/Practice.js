import React, { useContext } from 'react';
import {BrowserRouter as Router, Link, useParams} from 'react-router-dom';
import { PracticeContext } from '../contexts/PracticeContext';

import ModulePracticeAnswerArea from '../components/ModulePracticeAnswerArea';
import ModulePracticeQuestion from '../components/ModulePracticeQuestion';
import ModulePracticeProgress from '../components/ModulePracticeProgress';

const Practice = () => {
  const { moduleId } = useParams();

  const { 
    //modulesJson, activeModule, setActiveModule, selectedPractice, setSelectedPractice, setQuestionIndex, setShowModuleMenu, setProgressPercent, setSelectedPracticeEnd,  
    questionIndex
  } = useContext(PracticeContext);


  return (
      <div className="module-practice-screen">
        <h1>Practice</h1>

        <div className="module-practice-container">
          <Link to={'/'}>
            <button className="quit-practice">X</button>
          </Link>
          <Link to={'/Tutorial/' + moduleId}>
            <button className="answer-button tutorial-button">Tutorial</button>
          </Link>
          {
            moduleId ? 
              <React.Fragment>
                {/*<ModulePracticeTutorial moduleId={ moduleId } />*/} 
                <ModulePracticeProgress questionNumber={ questionIndex } /> 
                <ModulePracticeQuestion moduleId={ moduleId } questionNumber={ questionIndex } /> 
                <ModulePracticeAnswerArea moduleId={ moduleId } questionNumber={ questionIndex } /> 
              </React.Fragment>
            : 
              <h3>No module ID!</h3>
          }
        </div>

      </div>
  );
};

export default Practice;