import React from 'react';

// 
const ModulePracticeProgress = ( {questionNumber} ) => {
  return (
    <div className="w3-container module-practice-progress">
      <p>Question number: { questionNumber + 1 }</p>
    </div>
  );
}

export default ModulePracticeProgress;