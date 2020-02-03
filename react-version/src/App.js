import React from 'react';
import './App.css';
import PracticeContextProvider from './contexts/PracticeContext';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Menu from './pages/Menu';

function App() {
  return (
    <div className="app">      
      <PracticeContextProvider>
        <Menu />
      </PracticeContextProvider>
    </div>
  );
}

export default App;
