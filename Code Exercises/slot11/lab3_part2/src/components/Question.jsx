import React from 'react';

function Question({ question, options, selectedAnswer, onAnswerSelect, onSubmit }) {
  return (
    <div className="question-box">
      <h2>{question}</h2>
      <ul>
        {options.map((opt, idx) => (
          <li key={idx}>
            <label>
              <input
                type="radio"
                value={opt}
                checked={selectedAnswer === opt}
                onChange={() => onAnswerSelect(opt)}
              />
              {opt}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={onSubmit} disabled={!selectedAnswer}>Trả lời</button>
    </div>
  );
}

export default Question;
