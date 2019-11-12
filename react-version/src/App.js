import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import ModuleList from './components/ModuleList';

function App() {
  return (
    <div className="App">
      <PracticeContextProvider>
        <ModuleList />
      </PracticeContextProvider>
    </div>
  );
}

export default App;
