import React from 'react';

function Quiz({ question, onAnswer, feedback }) {
  return (
    <div className='container'>
      <h3>{question.question}</h3>
      {question.options.map((option, idx) => (
        <button 
          key={idx} 
          onClick={() => onAnswer(option === question.answer)} 
          disabled={!!feedback} // Disable buttons after selection
        >
          {option}
        </button>
      ))}
      {feedback && <p>{feedback}</p>}
    </div>
  );
}

export default Quiz;
