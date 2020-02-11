import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import { PracticeContext } from '../contexts/PracticeContext';
import Practice from './Practice';
import Tutorial from './Tutorial';

import ModuleLanguageSelector from '../components/ModuleLanguageSelector';
import ModuleListMenuItem from '../components/ModuleListMenuItem';

const Menu = () => {
  const { modulesJson } = useContext(PracticeContext);
  //console.log('modulesJson', modulesJson);
  
  return (
    <div>
      <h1>Menu</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <ModuleLanguageSelector />
            { modulesJson && (             
              modulesJson.map(module => {
                return (
                  <Link to={'/Practice/' + module._id} key={ module._id }>
                    <ModuleListMenuItem module={ module }></ModuleListMenuItem>
                  </Link>
                )
              })
            )}
          </Route>
          <Route exact path="/Practice/:moduleId" component={Practice} />
          <Route exact path="/Tutorial/:moduleId" component={Tutorial} />
        </Switch>
      </Router>
      
    </div>
  );

}

export default Menu;