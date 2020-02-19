import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import { BrowserRouter as Router } from 'react-router-dom';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="app">      
      <PracticeContextProvider>
        <Router>
          <Menu />
        </Router>
      </PracticeContextProvider>
    </div>
  );
}

export default App;
