import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleDetails from './ModuleDetails';

const ModuleList = () => {
  const { modules } = useContext(PracticeContext);
  return modules.length ? (
    <div>{
      modules.map(module => {
        return (
          // pass module data to ModuleDetails component
          <ModuleDetails module={ module } key={ module._id }></ModuleDetails>
        )
      })
    }</div>
  ) : (
    <h2>No questions found!</h2>
  );
};

export default ModuleList;