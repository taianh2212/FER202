import React from 'react';
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
  }
];

export default function Quiz() {
  return (
    <div>
      <h2>Quiz Page</h2>
      {questions.map((q) => (
        <Question key={q.id} data={q} />
      ))}
    </div>
  );
}
