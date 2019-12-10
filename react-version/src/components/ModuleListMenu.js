import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleDetails from './ModuleDetails';

// Module list/menu - Return visible (in production) modules.  
const ModuleListMenu = ( ) => {
  const { modules } = useContext(PracticeContext);
  const { showModuleMenu, setShowModuleMenu } = useContext(PracticeContext);

  useEffect(() => {
    //console.log('ModuleListMenu showModuleMenu', showModuleMenu);
  }, [showModuleMenu, setShowModuleMenu]);

  return modules.length ? (
    <div id="moduleList" style={ showModuleMenu ? {display: 'flex'} : {display: 'none'} } className="module-list-container">
      <h3>Select a practice module</h3>
      {
        modules.map(module => {
          if (module.inProduction === true) {
            return (
              // pass module data to ModuleDetails component
              <ModuleDetails module={ module } key={ module._id }></ModuleDetails>
            )
          }
          return null; // removes warning about map not returning something
        })
      }
    </div>
  ) : (
    <h2>No modules found/created!</h2>
  );
};

export default ModuleListMenu;