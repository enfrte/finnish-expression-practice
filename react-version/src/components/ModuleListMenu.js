import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModuleDetails from './ModuleDetails';

// Module list/menu - Return visible (in production) modules.  
const ModuleListMenu = ( {modules} ) => {
  //const { modules } = useContext(PracticeContext);
  //const { modulesJson } = useContext(PracticeContext);
  //const { questionsJson } = useContext(PracticeContext);
  //const { showModuleMenu } = useContext(PracticeContext);
  const {  showModuleMenu, languageSwitch, setLanguageSwitch } = useContext(PracticeContext);
  
  /*useEffect(() => {
    //console.log('ModuleListMenu showModuleMenu', showModuleMenu);    
  }, [showModuleMenu, setShowModuleMenu]);*/

  return modules.length ? (
    <div id="moduleList" style={ showModuleMenu ? {display: 'flex'} : {display: 'none'} } className="module-list-container">
      <div className="language-switcher-container">
        <h4>Select question language:</h4>
        <div className="language-switcher-buttons-container">
          <button className={languageSwitch ? 'answer-button-continue' : ''} onClick={()=>{setLanguageSwitch(true)} }>English</button>
          <button className={languageSwitch ? '' : 'answer-button-continue'} onClick={()=>{setLanguageSwitch(false)} }>Finnish</button>
        </div>
      </div>
      <h3>Select a practice module</h3>      
      {
        modules.map(module => {
          return (
            // pass module data to ModuleDetails component
            <ModuleDetails module={ module } key={ module._id }></ModuleDetails>
          )
        })
      }
      <p><a href="https://www.reddit.com/r/CodingInTheCold/comments/ebdkgb/finnish_expression_practice/">Submit corrections</a></p>
    </div>
  ) : (
    <h2>No modules found/created!</h2>
  );
};

export default ModuleListMenu;