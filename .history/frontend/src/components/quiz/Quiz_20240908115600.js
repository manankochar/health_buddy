import React, { useState } from 'react';
import './Quiz.css';

const questionsData = [
  {
    question: "1. Feeling nervous, anxious, or on edge",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    question: "2. Not being able to stop or control worrying",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    question: "3. Worrying too much about different things",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    question: "4. Trouble relaxing",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
];

const Quiz = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleOptionClick = (answer) => {
    const newAnswers = [...answers];
    newAnswers[activeStep] = answer;
    setAnswers(newAnswers);
    if (activeStep < questionsData.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      console.log('Quiz Completed');
    }
  };

  const calculateScore = () => {
    let score = 0;
    answers.forEach((answer) => {
      if (answer === "Nearly every day") {
        score += 3;
      } else if (answer === "More than half the days") {
        score += 2;
      } else if (answer === "Several days") {
        score += 1;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container my-5">
      <header className="quiz-header">
        <h1>Anxiety Test</h1>
      </header>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <ul className="progress-bar">
          {questionsData.map((_, index) => (
            <li key={index} className={`progress-step ${index <= activeStep ? 'active' : ''}`}>
              <div className="step-circle">{index + 1}</div>
            </li>
          ))}
        </ul>
      </div>

      {/* Quiz Form */}
      {activeStep < questionsData.length ? (
        <form>
        <div className="quiz-form">
          <h2>{questionsData[activeStep].question}</h2>
          <div className="options">
            {questionsData[activeStep].options.map((option, index) => (
              <button
                key={index}
                className={`btn btn-outline-primary ${answers[activeStep] === option ? 'selected' : ''}`}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <button className='btn w-100 class="btn btn-outline-primary "'>Submit </button>
        </div>
        </form>
      ) : (
        <div className="quiz-result">
          <h2>Your Score: {calculateScore()}</h2>
          <p>
            Interpretation: {calculateScore() < 4 ? 'Low Anxiety' : calculateScore() < 8 ? 'Moderate Anxiety' : 'High Anxiety'}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
