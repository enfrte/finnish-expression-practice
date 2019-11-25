// This component is a modal popup that displays when the user has finished their practice. 
// Upon state change, it is responsible for resetting state so that other modules can be loaded. 


    import React, { useContext, useEffect, useState } from 'react';
    import { PracticeContext } from '../contexts/PracticeContext';

    const ModuleFinished = () => {
      const { selectedPractice } = useContext(PracticeContext);
      const { showModuleFinished, setShowModuleFinished } = useContext(PracticeContext);
      const { setQuestionIndex } = useContext(PracticeContext);
      const { setSelectedPracticeEnd } = useContext(PracticeContext);

      const [showHide, setShowHide] = useState('hidden');

      useEffect(() => {
        if (showModuleFinished) {
          // show the modal popup
          setShowHide('display-block'); 
        }
      }, [showModuleFinished]);

      function closeModule() {
        // close the modal popup
        setShowHide('hidden'); 
        // reset the exercises
        setQuestionIndex(0); 
        setSelectedPracticeEnd(false);
        setShowModuleFinished(false);
      }

      return (
        <div className={`module-finished-container ${showHide}`}>
          <h3>You have completed { selectedPractice.title }</h3>
          <p>Show some stats here...</p>
          <button onClick={closeModule}>Back to exercises</button>
        </div>
      );
    }

    export default ModuleFinished;