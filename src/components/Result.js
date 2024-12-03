import React from 'react';

function Result({ score, total, onRestart }) {
  const shareResult = () => {
    if (navigator.share) {
      navigator.share({ text: `I scored ${score}/${total} in the quiz!` });
    } else {
      alert('Sharing not supported on this browser.');
    }
  };

  return (
    <div className='container'>
      <h2>Your Score: {score}/{total}</h2>
      <button onClick={onRestart}>Restart Quiz</button>
      <button onClick={shareResult}>Share Result</button>
    </div>
  );
}

export default Result;
