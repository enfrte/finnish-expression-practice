import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import ModulePractice from './components/ModulePractice';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './pages/Menu';
import Practice from './pages/Practice';

function App() {
  return (
    <Router>
      <div className="app">      
        <PracticeContextProvider>
          <Menu />
        </PracticeContextProvider>
      </div>
    </Router>
  );
}

export default App;
