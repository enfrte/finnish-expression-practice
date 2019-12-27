import React, { createContext, useState, useEffect } from 'react';

export const PracticeContext = createContext(); // new context - no default value

const PracticeContextProvider = (props) => {
  // const url = 'http://localhost:5984/react-test/_design/test/_view/test'; // couchDB
  //const url = 'js/practice-data.json?v=20191219'; // in public/js/ - a hard copy of data for production  
  const url = 'http://localhost:5000/practice'; // base route used with MongoDB and express in /backend folder 

  // Hooks useState return [value, function] via array destructuring.
  // Hooks example - const [count, setCount] = useState(0); // count = 0
  // A hooks function is triggered by events in the form of onClick={() => setCount(prevCount => prevCount + 1)} // or call the function from outside 
  const [modules, setModules] = useState([]); // container to hold all the practice modules 
  const [activeModule, setActiveModule] = useState(null); // module id of current selected practice module
  const [selectedPractice, setSelectedPractice] = useState(); // module data selected by the user to practice
  const [questionIndex, setQuestionIndex] = useState(0); // the current question in the module practice
  const [selectedPracticeEnd, setSelectedPracticeEnd] = useState(false); // indicates the practice has finished (when the user reaches the last question in the practice)
  const [showModuleFinished, setShowModuleFinished] = useState(false); // show / hide the module modal
  const [showModuleMenu, setShowModuleMenu] = useState(true); // show / hide the module menu 
  const [progressPercent, setProgressPercent] = useState(0);
  const [showPracticeTutorial, setShowPracticeTutorial] = useState(false);
  const [languageSwitch, setLanguageSwitch] = useState(false); // by default the question language is FInnish and the answer language is English (nativeLang). If the user changes this setting, the languages are switched.  

  // The useEffect hook replaces lifecycle methods componentDidMount, componentDidUpdate, componentWillUnmount.
  // Use useEffect when reaching outside of the component to do something (a side effect).
  // useEffect takes a callback function. 
  useEffect(() => {
    async function getModules() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setModules(json); // Set state here in your fetch callback
      } 
      catch (error) {
        console.log('Fetch', error);
      }
    }
    getModules();
  }, []); // [] will make a single request (ie, it won't loop). Put a useState variable inside, and it will run every time that variable state changes

  /*useEffect(() => { 
    console.log('languageSwitch:', languageSwitch);
  }, [languageSwitch]);*/

  useEffect(() => {
    //console.log('PracticeContextProvider selectedPractice:', selectedPractice);
    //console.log('Context questionIndex:', questionIndex);

    if (selectedPractice === undefined || selectedPractice === false) {
      return;
    }
    // check for last question of practice
    if (selectedPractice.questions.length === questionIndex + 1) {
      setSelectedPracticeEnd(true);
    }

  }, [questionIndex, selectedPractice]);

  return (
    <PracticeContext.Provider value={{ 
      modules, 
      activeModule, setActiveModule, 
      selectedPractice, setSelectedPractice, 
      questionIndex, setQuestionIndex,
      selectedPracticeEnd, setSelectedPracticeEnd,
      showModuleFinished, setShowModuleFinished,
      progressPercent, setProgressPercent,
      showModuleMenu, setShowModuleMenu,
      showPracticeTutorial, setShowPracticeTutorial,
      languageSwitch, setLanguageSwitch
    }}>
      { props.children }
    </PracticeContext.Provider>
  );
}

export default PracticeContextProvider;