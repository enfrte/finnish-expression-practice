import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModulePracticeAnswerArea from './ModulePracticeAnswerArea';
import ModulePracticeQuestion from './ModulePracticeQuestion';
import ModulePracticeProgress from './ModulePracticeProgress';

// have access to the modules
// have access to user selected module item
// if selected module item, populate the stage and answer area with the module questions 

// The stage/container for the module practice
const ModulePractice = () => {
  const { modules } = useContext(PracticeContext);
  const { activeModule } = useContext(PracticeContext);
  const { selectedPractice, setSelectedPractice } = useContext(PracticeContext);
  const { questionIndex } = useContext(PracticeContext);

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
    <div className="w3-container module-practice">
    {/*selectedPractice ? <p>{selectedPractice.title}</p> : <h3>Please select a module from the menu.</h3>*/}
      {
        selectedPractice ? 
          <React.Fragment>
            <ModulePracticeProgress questionNumber={ questionIndex } /> 
            <ModulePracticeQuestion module={ selectedPractice } questionNumber={ questionIndex } /> 
            <ModulePracticeAnswerArea module={ selectedPractice } questionNumber={ questionIndex } /> 
          </React.Fragment>
        : 
          <h3>Please select a module from the menu.</h3>
      }
    </div>
  );

}

export default ModulePractice;