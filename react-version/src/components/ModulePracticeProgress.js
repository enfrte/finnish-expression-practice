import React, { useContext }  from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Shows the progress of the practice as a progress bar
const ModulePracticeProgress = ( { questionNumber } ) => {
  const { progressPercent } = useContext(PracticeContext);

  return (
    <div className="module-practice-progress">
      {/*<p>Question: { questionNumber + 1 }</p>*/}
      <div className="question-progressbar" style={{width: progressPercent + '%'}}></div>
    </div>
  );
}

export default ModulePracticeProgress;