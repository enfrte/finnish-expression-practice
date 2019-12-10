import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleListMenu from './ModuleListMenu';

// Module list/menu - Return visible (in production) modules.  
const ModuleList = () => {
  const { modules } = useContext(PracticeContext);
  //const { selectedPractice } = useContext(PracticeContext);

  return modules.length ? (
    <ModuleListMenu />
  ) : (
    <h2>No modules found/created!</h2>
  );
};

export default ModuleList;