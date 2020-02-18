import React, { createContext, useState, useEffect } from 'react';

export const PracticeContext = createContext(); // new context - no default value

const PracticeContextProvider = (props) => {
  // Hooks useState return [value, function] via array destructuring.
  // Hooks example - const [count, setCount] = useState(0); // count = 0
  // A hooks function is triggered by events in the form of onClick={() => setCount(prevCount => prevCount + 1)} // or call the function from outside 
  const [questionsJson, setQuestionsJson] = useState([]); 
  const [modulesJson, setModulesJson] = useState([]); // modules are the practice lessons
  const [tutorialsJson, setTutorialsJson] = useState([]); 
  const [questionIndex, setQuestionIndex] = useState(0); // the current question in the module practice
  const [progressPercent, setProgressPercent] = useState(0); // also used to trigger the end of the practice
  const [languageSwitch, setLanguageSwitch] = useState(false); // switch the practice's question language    

  // base routes used with MongoDB and express in /backend folder 
  //const questionsUrl = 'http://localhost:5000/questions'; 
  //const modulesUrl = 'http://localhost:5000/modules'; 
  //const tutorialsUrl = 'http://localhost:5000/tutorials'; 
  // in public/js/ - a hard copy of data for production
  const questionsUrl = 'js/questions-data.json?v=20200218'; 
  const modulesUrl = 'js/modules-data.json?v=20200218'; 
  const tutorialsUrl = 'js/tutorials-data.json?v=20200218'; 

  // The useEffect hook replaces lifecycle methods componentDidMount, componentDidUpdate, componentWillUnmount.
  // Use useEffect when reaching outside of the component to do something (a side effect).
  // useEffect takes a callback function. 
  useEffect(() => {
    async function getDbData(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();

        if (url === questionsUrl) { setQuestionsJson(json) }
        else if (url === modulesUrl) { setModulesJson(json) }
        else if (url === tutorialsUrl) { setTutorialsJson(json) }
        else { console.log('No database URL found.') }
      } 
      catch (error) {
        console.log('Fetch', error);
      }
    }
    getDbData(modulesUrl);
    getDbData(questionsUrl);
    getDbData(tutorialsUrl);    
  }, []); // [] will make a single request (ie, it won't loop). Put a useState variable inside, and it will run every time that variable state changes

  return (
    <PracticeContext.Provider value={{ 
      questionsJson, modulesJson, tutorialsJson,
      questionIndex, setQuestionIndex,
      progressPercent, setProgressPercent,
      languageSwitch, setLanguageSwitch
    }}>
      { props.children }
    </PracticeContext.Provider>
  );
}

export default PracticeContextProvider;