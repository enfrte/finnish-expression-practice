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
        <PracticeContextProvider>{/* See import statment */}
          
          {/* 
            https://www.youtube.com/watch?v=CZeulkp1ClA
            Things/markup in this part always appear.
            Components load in this part according to the url.
            Set default page to Menu.js.
            Offer language selection (en|fi) in Menu.js, along with practice modules.
            Put <ModuleList /> in Menu.js maybe.
          */}

          <Switch>
            <Route exact path="/" component={Menu} />{/* Options in Menu.js to set the :language and :id */}
            <Route exact path="/:language/:id" component={Practice} />{/* Loads the practice area based on the parameters passed */}
          </Switch>
        </PracticeContextProvider>
      </div>
    </Router>
  );
}

export default App;
