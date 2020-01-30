import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleListMenu from './ModuleListMenu';

// Module list/menu - Return visible (in production) modules.  
const ModuleList = () => {
  const { modulesJson } = useContext(PracticeContext);
  //const { selectedPractice } = useContext(PracticeContext);

  return modulesJson.length ? (
    <ModuleListMenu modules={ modulesJson } />
  ) : (
    <h2>No modules found/created!</h2>
  );
};

export default ModuleList;