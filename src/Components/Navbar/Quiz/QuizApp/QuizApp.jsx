import "./QuizApp.css";
import React, { useState } from "react";

export default function QuizApp() {
  const questions = [
    {
      questionText:
        "What can you do if you have a biological knowledge and enough computing power?",
      answerOptions: [
        { answerText: "Develop a new type of internet ", isCorrect: false },
        { answerText: "Create a most advanced humanoid", isCorrect: false },
        {
          answerText: "Hack millions of people around the world ",
          isCorrect: true,
        },
        { answerText: "Generate a new human spiece", isCorrect: false },
      ],
    },
    {
      questionText: "Why should you reinvent youself?",
      answerOptions: [
        { answerText: "To be experienced", isCorrect: false },
        { answerText: "To stay a relevant", isCorrect: true },
        { answerText: "To make a money", isCorrect: false },
        { answerText: "To have some fun", isCorrect: false },
      ],
    },
    {
      questionText: "Within a century or two, Earth will be dominated by whom?",
      answerOptions: [
        { answerText: "By nonconscious entities", isCorrect: true },
        { answerText: "By new social class", isCorrect: false },
        { answerText: "By 5G Internet", isCorrect: false },
        { answerText: "By mammals", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}, but that does not
          matter. You still have time to think about what you have read on this
          website. If you want to know more, you can Google me.
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="quiz-button"
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                >
                  {answerOption.answerText}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
