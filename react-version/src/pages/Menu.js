import React, { useContext } from 'react';
import {BrowserRouter as Router, Route, Switch, Link, useParams, useLocation, useRouteMatch} from 'react-router-dom';
import { PracticeContext } from '../contexts/PracticeContext';
import Practice from './Practice';
import ModuleLanguageSelector from '../components/ModuleLanguageSelector';
import ModuleListMenuItem from '../components/ModuleListMenuItem';

const Menu = () => {
  const { modulesJson } = useContext(PracticeContext);
  // Link to Button - https://stackoverflow.com/questions/42463263/wrapping-a-react-router-link-in-an-html-button/49439893
  console.log(123);

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
        </Switch>
      </Router>
      
    </div>
  );

}

export default Menu;