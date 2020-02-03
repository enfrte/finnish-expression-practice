import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useParams, useLocation, useRouteMatch} from 'react-router-dom';
import { PracticeContext } from '../contexts/PracticeContext';

import Menu from './Menu';

import ModulePracticeAnswerArea from '../components/ModulePracticeAnswerArea';
import ModulePracticeQuestion from '../components/ModulePracticeQuestion';
import ModulePracticeProgress from '../components/ModulePracticeProgress';
import ModulePracticeTutorial from '../components/ModulePracticeTutorial';

const Practice = () => {
  //console.log("Practice component:", location);
  const { moduleId } = useParams();

  const { 
    //modulesJson, activeModule, setActiveModule, selectedPractice, setSelectedPractice, setQuestionIndex, setShowModuleMenu, setProgressPercent, setSelectedPracticeEnd,  
    questionIndex
  } = useContext(PracticeContext);


  return (
    <Router>
      <div className="module-practice-screen">
        <h1>Practice</h1>
        <div className="module-practice-container">
          <Link to={'/'}>
            <button className="quit-practice">X</button>
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
              <h3>The menu should appear here!</h3>
          }
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Menu} />
      </Switch>
    </Router>
  );
};

export default Practice;