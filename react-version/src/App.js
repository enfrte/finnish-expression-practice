import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import SentenceList from './components/SentenceList';

function App() {
  return (
    <div className="App">
      <PracticeContextProvider>
        <SentenceList />
      </PracticeContextProvider>
    </div>
  );
}

export default App;
