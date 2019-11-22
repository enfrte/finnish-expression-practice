import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Details about the module and link to execute the practice
const ModuleDetails = ({ module }) => {
const { setActiveModule } = useContext(PracticeContext);

  function selectModule(e) { 
    e.preventDefault();
    setActiveModule(e.currentTarget.dataset.moduleid);
  }

  return (
    <div className="module-practice-link-container">
      <button onClick={selectModule} data-moduleid={module._id}>{ module.title }</button>
    </div>
  );
}

export default ModuleDetails;