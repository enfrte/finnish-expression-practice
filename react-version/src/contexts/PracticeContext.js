import React, { createContext, useState, useEffect } from 'react';

export const PracticeContext = createContext();

const PracticeContextProvider = (props) => {
  const url = 'http://localhost:5984/react-test/_design/test/_view/test'; // couchDB

  const [sentences, setSentences] = useState([]);

    useEffect(() => {
      async function getSentences() {
        try {
          const response = await fetch(url);
          const json = await response.json();
          const jsonArray = json.rows[0].value;
          console.log('jsonArray',jsonArray);
          setSentences(jsonArray); // Set state here in your fetch callback
        } 
        catch (error) {
          console.log('Fetch', error);
        }      
      }
      getSentences();
    }, []); // Or [] if effect doesn't need props or state

  return (
    <PracticeContext.Provider value={{ sentences }}>
      { props.children }
    </PracticeContext.Provider>
  );
}

export default PracticeContextProvider;