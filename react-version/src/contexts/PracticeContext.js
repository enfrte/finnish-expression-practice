import React, { createContext, useState, useEffect } from 'react';

export const PracticeContext = createContext();

const PracticeContextProvider = (props) => {
  // const url = 'http://localhost:5984/react-test/_design/test/_view/test'; // couchDB
  const url = 'http://localhost:5000/practice'; // base route used with MongoDB  

  const [modules, setModules] = useState([]);

  useEffect(() => {
    async function getModules() {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log('Raw:', json);
        //const jsonArray = json[0];
        //console.log('jsonArray',jsonArray);

        setModules(json); // Set state here in your fetch callback
      } 
      catch (error) {
        console.log('Fetch', error);
      }      
    }
    getModules();
  }, []); // Or [] if effect doesn't need props or state

  return (
    <PracticeContext.Provider value={{ modules }}>
      { props.children }
    </PracticeContext.Provider>
  );
}

export default PracticeContextProvider;