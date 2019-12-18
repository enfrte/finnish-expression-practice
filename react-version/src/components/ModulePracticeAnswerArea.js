import React, { useEffect, useState, useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import ModulePracticeAnswerResult from './ModulePracticeAnswerResult';

// 
const ModulePracticeAnswerArea = ( {module, questionNumber} ) => {
  const { languageSwitch } = useContext(PracticeContext);

  const [shuffledWords, setShuffledWords] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [sentence, setSentence] = useState(''); // the current nativeLang sentence shown to the user
  const [answers, setAnswers] = useState(''); // all possible answers (the answer can be phrased differently and have same meaning)
  const [isQuestion, setIsQuestion] = useState(false); // check if the question is a question(?) and not a statement
  
  let shuffleWords = (array) => {
    array.forEach((value, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [array[index], array[j]] = [array[j], array[index]];
    });
    return array;
  }

  useEffect(() => {
    setAnswerArray([]); // disgard the previous question's answer
    let sentenceLanguage = languageSwitch ? module.questions[questionNumber].foreignLang[0] : module.questions[questionNumber].nativeLang[0];
    const answersLanguage = languageSwitch ? module.questions[questionNumber].foreignLang : module.questions[questionNumber].nativeLang;
    // We want the question mark to disappear from the answers area. Check for question mark, and remove if found
    if(sentenceLanguage.match(/\?/g)) {
      sentenceLanguage = sentenceLanguage.replace('?','');
      setIsQuestion(true);
    }
    else { setIsQuestion(false); }

    setSentence(sentenceLanguage); 
    setAnswers(answersLanguage); // there can be more than one answer
    let sentenceArray = sentence.split(' ');  
    setShuffledWords(shuffleWords(sentenceArray));
  }, [module, questionNumber, setAnswers, sentence, languageSwitch]); 
  
  // user chooses words to create an answer
  const choose = (e) => {
    const id = e.target.id;
    shuffledWords.splice(id.replace('word_',''), 1)
    setShuffledWords([...shuffledWords]); 
    setAnswerArray([...answerArray, e.target.innerText]);
  }

  // user can edit their answer by sending words back to the list of choices
  const remove = (e) => {
    const id = e.target.id;
    answerArray.splice(id.replace('word_',''), 1)
    setAnswerArray([...answerArray]); 
    setShuffledWords([...shuffledWords, e.target.innerText]);
  }

  useEffect(() => {
    // for debugging 
    console.log('shuffledWords useEffect:', shuffledWords);
    console.log('answerArray useEffect:', answerArray);
  }, [shuffledWords, answerArray]);

  return (
    <div className="module-practice-answer-area">
      <div id="answerArea" className="text-area">
      <p>
        {/* the user's answer goes here */}
        { 
          answerArray.map((word, i) => 
            <button className="word-button" id={'word_'+i} onClick={remove} key={i}>
              { /* i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word */} {/* capitalise the first letter of sentence */}
              { (isQuestion === true) && (i === answerArray.length - 1) ? word = word.concat('?') : word  } {/* if a question, concat last word with ? */}
            </button>
          ) 
        }
        { /*(answerArray.length > 0) && (isQuestion === true) ? <button className="word-button" style={{backgroundColor:'snow'}}>?</button> : '' */} 
      </p>
    </div>
    <div id="optionsArea" className="text-area options-area">
      <p>
        {/* the question choices goes here */}
        { 
          shuffledWords.map((word, i) => 
            <button className="word-button" style={{backgroundColor:'snow'}} id={'word_'+i} onClick={choose} key={i}>
              { (isQuestion === true) && (word.match(/\?/) === null) ? word : word = word.replace('?', '') }
            </button>) 
        }
      </p>
    </div>
    <ModulePracticeAnswerResult 
      questionNumber={ questionNumber } 
      attempt={ answerArray.join(" ") } 
      answer={ sentence /* shown to the user if their answer is incorrect */} 
      answers={ answers /* list of all possible answers */} 
      isQuestion={ isQuestion }
    /> 
    </div>
  );
}

export default ModulePracticeAnswerArea;