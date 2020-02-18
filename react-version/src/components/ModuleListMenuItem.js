import React from 'react';

// Details about the module and link to execute the practice
const ModuleListMenuItem = ({ module }) => {

  return (
    <div className="module-practice-link-container">
      <button>
        { module.title }
      </button>
    </div>
  );
}

export default ModuleListMenuItem;