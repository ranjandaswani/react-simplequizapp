import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import questions from './data/questions.json';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [feedback, setFeedback] = useState(null); // To track if the answer was correct or not

  const handleAnswer = (isCorrect) => {
    setFeedback(isCorrect ? "Correct!" : "Wrong!");
    if (isCorrect) setScore(score + 1);
    setTimeout(() => {
      const next = current + 1;
      if (next < questions.length) {
        setCurrent(next);
        setFeedback(null); // Reset feedback for the next question
      } else {
        setCompleted(true);
      }
    }, 1500); // Wait for 1.5 seconds before moving to the next question
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setCompleted(false);
    setFeedback(null);
  };

  return (
    <div className='main'>
      <div className='header'>
        <h3>Quiz Application</h3>
      </div>
      {!completed ? (
        <Quiz 
          question={questions[current]} 
          onAnswer={handleAnswer} 
          feedback={feedback} 
        />
      ) : (
        <Result 
          score={score} 
          total={questions.length} 
          onRestart={restartQuiz} 
        />
      )}
    </div>
  );
}

export default App;
