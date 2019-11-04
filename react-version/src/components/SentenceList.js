import React, { useContext } from 'react';
import { PracticeContext } from '../contexts/PracticeContext';
import SentenceDetails from './SentenceDetails';

const SentenceList = () => {
  const { sentences } = useContext(PracticeContext);
  return sentences.length ? (
    <div>{
      sentences.map(sentence => {
        return (
          <SentenceDetails sentence={ sentence } key={ sentence.id }></SentenceDetails>
        )
      })
    }</div>
  ) : (
    <h2>No questions found!</h2>
  );
};

export default SentenceList;