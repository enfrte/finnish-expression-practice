import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModulePracticeAnswerArea from './ModulePracticeAnswerArea';
import ModulePracticeQuestion from './ModulePracticeQuestion';
import ModulePracticeProgress from './ModulePracticeProgress';
import ModulePracticeTutorial from './ModulePracticeTutorial';

// have access to the modules
// have access to user selected module item
// if selected module item, populate the stage and answer area with the module questions 

// The stage/container for the module practice
const ModulePractice = () => {
  const { modules } = useContext(PracticeContext);
  const { activeModule, setActiveModule } = useContext(PracticeContext);
  const { selectedPractice, setSelectedPractice } = useContext(PracticeContext);
  const { questionIndex, setQuestionIndex } = useContext(PracticeContext);
  const { setShowModuleMenu } = useContext(PracticeContext);
  const { setProgressPercent } = useContext(PracticeContext);
  const { setSelectedPracticeEnd } = useContext(PracticeContext);

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
    if (activeModule !== null) {
      modules.map(module => {
        if (activeModule === module._id) {
          setSelectedPractice(module);
        }
        return null; //This is to remove warning because 'map' needs a return value
      });
    }
  }, [setSelectedPractice, activeModule, modules]);

  // output the user selected module
  return (
    <div className="module-practice-screen">
      <div className="module-practice-container">
        <button className="quit-practice" onClick={ quitPractice }>X</button>
        {
          selectedPractice ? 
            <React.Fragment>
            <ModulePracticeTutorial module={ selectedPractice } /> 
              <ModulePracticeProgress questionNumber={ questionIndex } /> 
              <ModulePracticeQuestion module={ selectedPractice } questionNumber={ questionIndex } /> 
              <ModulePracticeAnswerArea module={ selectedPractice } questionNumber={ questionIndex } /> 
            </React.Fragment>
          : 
            <h3>The menu should appear here!</h3>
        }
      </div>
    </div>
  );

}

export default ModulePractice;