import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PracticeContext } from '../contexts/PracticeContext';

import ModuleFinished from '../components/ModuleFinished';
import ModulePracticeAnswerArea from '../components/ModulePracticeAnswerArea';
import ModulePracticeQuestion from '../components/ModulePracticeQuestion';
import ModulePracticeProgress from '../components/ModulePracticeProgress';
import ModulePracticeQuit from '../components/ModulePracticeQuit';

const Practice = () => {
  const { moduleId } = useParams();

  const { 
    questionIndex, progressPercent
  } = useContext(PracticeContext);
  //console.log('questionIndex',questionIndex);

  if (progressPercent === 100) {
    return ( <ModuleFinished /> );
  } else {
    return (
        <div className="module-practice-screen">          
          <div className="module-practice-container">
            <Link to={'/'}>
              <ModulePracticeQuit />
            </Link>
            <div className="module-practice-tutorial-container">
              <Link to={'/Tutorial/' + moduleId}>
                <button className="answer-button tutorial-button">Tutorial</button>
              </Link>
            </div>
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
  }

};

export default Practice;