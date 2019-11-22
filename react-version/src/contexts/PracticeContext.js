import React, { createContext, useState, useEffect } from 'react';

export const PracticeContext = createContext(); // new context - no default value

const PracticeContextProvider = (props) => {
  // const url = 'http://localhost:5984/react-test/_design/test/_view/test'; // couchDB
  const url = 'http://localhost:5000/practice'; // base route used with MongoDB  

  // Hooks useState return [value, function] via array destructuring.
  // Hooks example - const [count, setCount] = useState(0); // count = 0
  // A hooks function is triggered by events in the form of onClick={() => setCount(prevCount => prevCount + 1)} // or call the function from outside 
  const [modules, setModules] = useState([]); // here default value of modules = []
  const [activeModule, setActiveModule] = useState(null); // here default value of activeModule = null
  const [selectedPractice, setSelectedPractice] = useState();
  const [questionIndex, setQuestionIndex] = useState(0); 
  const [selectedPracticeEnd, setSelectedPracticeEnd] = useState(false); 

  // activeModule = whatever the user selected from the menu. default = null

  // The useEffect hook replaces lifecycle methods componentDidMount, componentDidUpdate, componentWillUnmount.
  // Use useEffect when reaching outside of the component to do something (a side effect).
  // useEffect takes a callback function. 
  useEffect(() => {
    async function getModules() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('Raw:', json);
        //console.log('jsonArray',jsonArray);

        setModules(json); // Set state here in your fetch callback
      } 
      catch (error) {
        console.log('Fetch', error);
      }      
    }
    getModules();
  }, []); // [] will make a single request (ie, it won't loop). Put a useState variable inside, and it will run every time that variable state changes

  useEffect(() => {
    // should fire when a module is selected 
    console.log('activeModule:', activeModule);
    setQuestionIndex(0); // new module selected reset question count
    setSelectedPracticeEnd(false);
  }, [activeModule]);

  useEffect(() => {
    console.log('selectedPractice:', selectedPractice);
  }, [selectedPractice]);

  useEffect(() => {
    console.log('Context questionIndex:', questionIndex);

    if (selectedPractice === undefined) {
      return;
    }
    // check for last question of practice
    if (selectedPractice.questions.length === questionIndex + 1) {
      setSelectedPracticeEnd(true);
    }

  }, [questionIndex]);

  return (
    <PracticeContext.Provider value={{ 
      modules, 
      activeModule, setActiveModule, 
      selectedPractice, setSelectedPractice, 
      questionIndex, setQuestionIndex,
      selectedPracticeEnd
    }}>
      { props.children }
    </PracticeContext.Provider>
  );
}

export default PracticeContextProvider;