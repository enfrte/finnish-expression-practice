import React from "react";
import ModulePracticeTutorial from '../components/ModulePracticeTutorial';
import {BrowserRouter as Router, useParams} from 'react-router-dom';

const Tutorial = () => {
  const { moduleId } = useParams();
  
  return (
    <div>
      <ModulePracticeTutorial moduleId={moduleId} />
    </div>
  );
};

export default Tutorial;