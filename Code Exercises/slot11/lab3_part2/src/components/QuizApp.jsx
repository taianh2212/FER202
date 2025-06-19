import React, { useState } from 'react';
import Question from './Question';
import Result from './Result';

const questionsData = [
  {
    question: "Thủ đô của Việt Nam là gì?",
    options: ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Huế"],
    answer: "Hà Nội"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Màu cờ của Việt Nam là gì?",
    options: ["Đỏ", "Xanh", "Vàng", "Trắng"],
    answer: "Đỏ"
  }
];

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questionsData[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion + 1 < questionsData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="quiz-container">
      {isFinished ? (
        <Result score={score} total={questionsData.length} onRestart={handleRestart} />
      ) : (
        <Question
          question={questionsData[currentQuestion].question}
          options={questionsData[currentQuestion].options}
          selectedAnswer={selectedAnswer}
          onAnswerSelect={handleAnswerSelect}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default QuizApp;