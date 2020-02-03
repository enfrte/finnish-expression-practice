import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Details about the module and link to execute the practice
const ModuleDetails = ({ module }) => {

  return (
    <div className="module-practice-link-container">
      <button>
        { module.title }
      </button>
    </div>
  );
}

export default ModuleDetails;