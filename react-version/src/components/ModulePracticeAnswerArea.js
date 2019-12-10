import React, { useEffect, useState } from 'react';
import ModulePracticeAnswerResult from './ModulePracticeAnswerResult';

// 
const ModulePracticeAnswerArea = ( {module, questionNumber} ) => {
  const [shuffledWords, setShuffledWords] = useState([]);
  const [answerArray, setAnswerArray] = useState([]);
  const [sentence, setSentence] = useState(''); // the current nativeLang sentence

  let shuffleWords = (array) => {
    array.forEach((value, index) => {
      const j = Math.floor(Math.random() * (index + 1));
      [array[index], array[j]] = [array[j], array[index]];
    });
    return array;
  }

  useEffect(() => {
    setAnswerArray([]); // disgard the previous question's answer
    setSentence(module.questions[questionNumber].nativeLang[0]); 
    let sentenceArray = sentence.split(' ');  
    setShuffledWords(shuffleWords(sentenceArray));
  }, [module, questionNumber, sentence]); 
  
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
    //console.log('shuffledWords useEffect:', shuffledWords);
    //console.log('answerArray useEffect:', answerArray);
  }, [shuffledWords, answerArray]);

  return (
    <div className="module-practice-answer-area">
      <div id="answerArea" className="text-area">
      <p>
        {/* the user's answer goes here */}
        { 
          answerArray.map((word, i) => 
            <button className="word-button" id={'word_'+i} onClick={remove} key={i}>
              { i === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word }{/* capitalise the first letter of sentence */}
            </button>
          ) 
        }
      </p>
    </div>
    <div id="optionsArea" className="text-area options-area">
      <p>
        {/* the question choices goes here */}
        { 
          shuffledWords.map((word, i) => 
            <button className="word-button" style={{backgroundColor:'snow'}} id={'word_'+i} onClick={choose} key={i}>
              { word }
            </button>) 
        }
      </p>
    </div>
    <ModulePracticeAnswerResult 
      questionNumber={ questionNumber } 
      attempt={ answerArray.join(" ") } 
      answer={ sentence } 
    /> 
    </div>
  );
}

export default ModulePracticeAnswerArea;