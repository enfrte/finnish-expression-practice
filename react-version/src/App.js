import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import ModuleList from './components/ModuleList';
import ModulePractice from './components/ModulePractice';

function App() {
  return (
    <div className="App">
      <PracticeContextProvider>
        <ModuleList />{/* A menu of practice modules */}
        <ModulePractice />{/* The area to practice */}
      </PracticeContextProvider>
    </div>
  );
}

export default App;
