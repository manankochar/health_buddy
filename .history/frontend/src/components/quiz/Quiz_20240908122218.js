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
  const [scroreDisplay,setScrorDisplay] = useState(false)

  const handleOptionClick = (e,answer) => {
    e.preventDefault();
    const newAnswers = [...answers];
    newAnswers[activeStep] = answer;
    setAnswers(newAnswers);
    if (activeStep < questionsData.length - 1) {
      setActiveStep(activeStep + 1);
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

  const quizForm = (e) => {
    e.preventDefault();
    console.log("Quiz COmpelete")
    console.log(answers)
    console.log(calculateScore())
  }

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


       {
        scroreDisplay === false ? 
       }

     
    </div>
  );
};

export default Quiz;
