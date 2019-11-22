import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleDetails from './ModuleDetails';

// Module list/menu - Return visible (in production) modules.  
const ModuleList = () => {
  const { modules } = useContext(PracticeContext);

  useEffect(() => {
    // 
  }, [modules]);

  return modules.length ? (
    <div>{
      modules.map(module => {
        if (module.inProduction === true) {
          return (
            // pass module data to ModuleDetails component
            <ModuleDetails module={ module } key={ module._id }></ModuleDetails>
          )
        }
        return null; // removes warning about map not returning something
      })
    }</div>
  ) : (
    <h2>No modules found/created!</h2>
  );
};

export default ModuleList;