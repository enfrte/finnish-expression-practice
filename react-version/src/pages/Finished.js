import React from "react";
import ModuleFinished from '../components/ModuleFinished';
import {useParams, useLocation } from "react-router";

const Finished = () => {
  const location = useLocation();
  //console.log(location);
  const { id } = useParams(); // !!! set up the links in the module practice 
  return (
    <div>
      <h1>Finished</h1>
      <ModuleFinished moduleId={id} />{/* The area to practice */}
    </div>
  );
};

export default Finished;