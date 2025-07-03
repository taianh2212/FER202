import React from 'react';

export default function Question({ data, selectedAnswer, onSelect }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h5>{data.question}</h5>
      {data.options.map((opt, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name={`q-${data.id}`}
            value={opt}
            checked={selectedAnswer === opt}
            onChange={() => onSelect(data.id, opt)}
          />
          {" "}{opt}
        </div>
      ))}
    </div>
  );
}
