import React, { useState } from 'react';
import { Container, Button, Alert } from 'react-bootstrap';
import { initialQuizData } from '../data/initialData';
import QuestionItem from './QuestionItem';
import AddQuestionForm from './AddQuestionForm';

const Quiz = () => {
  const [quizData, setQuizData] = useState(initialQuizData);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const alreadyAnswered = selectedAnswers[index];

    setSelectedAnswers((prev) => ({
      ...prev,
      [index]: answer,
    }));

    if (!alreadyAnswered) {
      const isCorrect = quizData[index].correctAnswer === answer;
      if (isCorrect) setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    const next = currentQuestionIndex + 1;
    if (next < quizData.length) {
      setCurrentQuestionIndex(next);
    } else {
      setIsFinished(true);
    }
  };

  const handleAddQuestion = (newQuestion) => {
    setQuizData((prev) => [...prev, newQuestion]);
    setIsFinished(false);
    setCurrentQuestionIndex(prev => prev + 1);
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setScore(0);
    setCurrentQuestionIndex(0);
    setIsFinished(false);
  };

  return (
    <Container className="mt-4">
      {!isFinished ? (
        <>
          <QuestionItem
            q={quizData[currentQuestionIndex]}
            index={currentQuestionIndex}
            selectedAnswer={selectedAnswers[currentQuestionIndex]}
            onAnswerChange={handleAnswerChange}
          />

          <div className="text-end">
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={!selectedAnswers[currentQuestionIndex]}
            >
              {currentQuestionIndex === quizData.length - 1 ? 'Kết thúc' : 'Câu tiếp theo'}
            </Button>
          </div>
        </>
      ) : (
        <>
          <Alert variant="success" className="text-center fw-bold">
            ✅ Bạn đã hoàn thành {quizData.length} câu hỏi. <br />
            🎯 Số câu trả lời đúng: {score}/{quizData.length}
          </Alert>

          <div className="text-center mb-3">
            <Button variant="secondary" onClick={handleRestart}>
              🔁 Làm lại từ đầu
            </Button>
          </div>

          <AddQuestionForm onAddQuestion={handleAddQuestion} />
        </>
      )}
    </Container>
  );
};

export default Quiz;
