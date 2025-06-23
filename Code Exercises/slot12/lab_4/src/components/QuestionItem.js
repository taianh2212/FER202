import React from 'react';
import { Card, Form, Alert } from 'react-bootstrap';

const QuestionItem = ({ q, index, selectedAnswer, onAnswerChange }) => {
  const isCorrect = selectedAnswer === q.correctAnswer;

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">
          Câu {index + 1}: {q.question}
        </Card.Title>

        <Form>
          {q.answers.map((answer, i) => (
            <Form.Check
              key={i}
              type="radio"
              id={`q${index}-option${i}`}
              name={`question-${index}`}
              label={answer}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={() => onAnswerChange(index, answer)}
              className="mb-2"
            />
          ))}
        </Form>

        {selectedAnswer && (
          <Alert
            variant={isCorrect ? 'success' : 'danger'}
            className="mt-3"
          >
            {isCorrect
              ? '✅ Chính xác!'
              : `❌ Sai rồi! Đáp án đúng là: ${q.correctAnswer}`}
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
};

export default QuestionItem;
