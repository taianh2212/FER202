import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    id: 1,
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library"
  },
  {
    id: 2,
    question: "What is JSX?",
    options: ["Java XML", "JSON", "JavaScript Syntax Extension", "React file"],
    answer: "JavaScript Syntax Extension"
  },
  {
    id: 3,
    question: "Who maintains React?",
    options: ["Google", "Facebook", "Microsoft", "Amazon"],
    answer: "Facebook"
  }
];

export default function Quiz() {
  const [answers, setAnswers] = useState({});        
  const [submitted, setSubmitted] = useState(false);  


  const handleSelect = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };


  const score = questions.reduce((acc, q) => {
    if (answers[q.id] === q.answer) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <h2>Quiz Page</h2>

      {questions.map((q) => (
        <Question
          key={q.id}
          data={q}
          selectedAnswer={answers[q.id] || ''}
          onSelect={handleSelect}
        />
      ))}

      <button onClick={handleSubmit} disabled={submitted} className="btn btn-primary mt-3">
        Nộp bài
      </button>

      {submitted && (
        <div className="mt-3">
          <h4>🎉 Bạn đã làm đúng {score}/{questions.length} câu hỏi!</h4>
        </div>
      )}
    </div>
  );
}
