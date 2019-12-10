import React, { useContext, useEffect } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Details about the module and link to execute the practice
const ModuleDetails = ({ module }) => {
const { setActiveModule } = useContext(PracticeContext);
const { showModuleMenu, setShowModuleMenu } = useContext(PracticeContext);

  function selectModule(e) { 
    e.preventDefault();
    setActiveModule(e.currentTarget.dataset.moduleid);
    setShowModuleMenu(false);
  }

  useEffect(() => {
    //console.log('ModuleDetails showModuleMenu', showModuleMenu);
  }, [showModuleMenu, setShowModuleMenu]);

  return (
    <div className="module-practice-link-container">
      <button onClick={selectModule} data-moduleid={module._id}>{ module.title }</button>
    </div>
  );
}

export default ModuleDetails;