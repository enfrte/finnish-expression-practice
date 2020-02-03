import React from "react";
import ModulePracticeTutorial from '../components/ModulePracticeTutorial';
import {useParams, useLocation } from "react-router";

const Tutorial = () => {
  const location = useLocation();
  console.log(location);
  const { id } = useParams(); // !!! set up the links in the module practice 
  return (
    <div>
      <h1>Tutorial</h1>
      <ModulePracticeTutorial moduleId={id} />{/* The area to practice */}
    </div>
  );
};

export default Tutorial;