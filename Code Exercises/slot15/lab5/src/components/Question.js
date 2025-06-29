import React, { useState } from 'react';

export default function Question({ data }) {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => setSubmitted(true);

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '1rem' }}>
      <h5>{data.question}</h5>
      {data.options.map((opt, idx) => (
        <div key={idx}>
          <input
            type="radio"
            name={`q-${data.id}`}
            value={opt}
            onChange={() => setSelected(opt)}
            disabled={submitted}
          />
          {" "}{opt}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={submitted || selected === null} className="mt-2">Submit</button>
      {submitted && (
        <p className="mt-2">
          {selected === data.answer ? "✅ Correct!" : "❌ Incorrect."}
        </p>
      )}
    </div>
  );
}
