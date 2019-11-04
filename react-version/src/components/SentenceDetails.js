import React, { useContext } from 'react';


const SentenceDetails = ({ sentence }) => {
  return (
    <p>{ sentence.sentence }</p>
  );
}

export default SentenceDetails;