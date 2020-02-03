import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModulePracticeAnswerArea from './ModulePracticeAnswerArea';
import ModulePracticeQuestion from './ModulePracticeQuestion';
import ModulePracticeProgress from './ModulePracticeProgress';
import ModulePracticeTutorial from './ModulePracticeTutorial';

// The stage/container for the module practice
const ModulePractice = ( {moduleId} ) => {
  //const { modules } = useContext(PracticeContext);
  const { 
    modulesJson, activeModule, setActiveModule, selectedPractice, setSelectedPractice, questionIndex, setQuestionIndex, setShowModuleMenu, setProgressPercent, setSelectedPracticeEnd 
  } = useContext(PracticeContext);

  const quitPractice = () => {
    setShowModuleMenu(true);
    setQuestionIndex(0); 
    setSelectedPractice(false);
    setActiveModule(null);
    setProgressPercent(0);
    setSelectedPracticeEnd(false); // needed to reset this too, in case user quits on the last question
  };

  // create the user selected module for practice
  useEffect(() => {
    //console.log('moduleId',moduleId);
    if (moduleId !== null) {
      //setSelectedPractice(moduleId);
      //console.log('>>>', selectedPractice);
    }
  }, [setSelectedPractice, activeModule, modulesJson, moduleId, selectedPractice]);

  // output the user selected module
  return (
    <div className="module-practice-screen">
      <div className="module-practice-container">
        <button className="quit-practice" onClick={ quitPractice }>X</button>
        {
          moduleId ? 
            <React.Fragment>
              <ModulePracticeTutorial moduleId={ moduleId } /> 
              <ModulePracticeProgress questionNumber={ questionIndex } /> 
              <ModulePracticeQuestion moduleId={ moduleId } questionNumber={ questionIndex } /> 
              <ModulePracticeAnswerArea moduleId={ moduleId } questionNumber={ questionIndex } /> 
            </React.Fragment>
          : 
            <h3>The menu should appear here!</h3>
        }
      </div>
    </div>
  );

}

export default ModulePractice;