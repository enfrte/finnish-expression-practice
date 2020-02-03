import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';

// Details about the module and link to execute the practice
const ModuleLanguageSelector = ({ module }) => {
  const {  showModuleMenu, languageSwitch, setLanguageSwitch } = useContext(PracticeContext);


  return (
    <div className="language-switcher-container">
        <h4>Select question language:</h4>
        <div className="language-switcher-buttons-container">
          <button className={languageSwitch ? 'answer-button-continue' : ''} onClick={()=>{setLanguageSwitch(true)} }>English</button>
          <button className={languageSwitch ? '' : 'answer-button-continue'} onClick={()=>{setLanguageSwitch(false)} }>Finnish</button>
        </div>
      </div>
  );
}

export default ModuleLanguageSelector;