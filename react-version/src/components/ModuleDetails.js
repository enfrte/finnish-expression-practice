import React, { useContext } from 'react';


const ModuleDetails = ({ module }) => {
  return (
    
    <a href={ module.slug }>{ module.title }</a>
  );
}

export default ModuleDetails;