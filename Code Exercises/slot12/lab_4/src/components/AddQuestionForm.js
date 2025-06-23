import React, { useState } from 'react';
import { Form, Button, Card, Row, Col } from 'react-bootstrap';

const AddQuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question.trim() || answers.some((a) => !a.trim()) || !correctAnswer.trim()) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return;
    }

    onAddQuestion({ question, answers, correctAnswer });

    setQuestion('');
    setAnswers(['', '', '']);
    setCorrectAnswer('');
  };

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title className="fw-bold">➕ Thêm câu hỏi mới</Card.Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Câu hỏi</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập nội dung câu hỏi"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </Form.Group>

          {answers.map((ans, idx) => (
            <Form.Group className="mb-3" key={idx}>
              <Form.Label>Đáp án {idx + 1}</Form.Label>
              <Form.Control
                type="text"
                placeholder={`Nhập đáp án ${idx + 1}`}
                value={ans}
                onChange={(e) => {
                  const updated = [...answers];
                  updated[idx] = e.target.value;
                  setAnswers(updated);
                }}
              />
            </Form.Group>
          ))}

          <Form.Group className="mb-3">
            <Form.Label>Chọn đáp án đúng</Form.Label>
            <Form.Select
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
            >
              <option value="">-- Chọn đáp án đúng --</option>
              {answers.map((ans, idx) => (
                <option key={idx} value={ans}>
                  {ans || `Đáp án ${idx + 1}`}
                </option>
              ))}
            </Form.Select>
          </Form.Group>

          <div className="text-end">
            <Button variant="primary" type="submit">
              ✅ Thêm câu hỏi
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AddQuestionForm;
