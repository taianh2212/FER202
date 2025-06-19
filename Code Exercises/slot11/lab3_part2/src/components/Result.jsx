import React from 'react';

function Result({ score, total, onRestart }) {
  return (
    <div className="result-box">
      <h2>Bạn đã hoàn thành!</h2>
      <p>Điểm của bạn: {score} / {total}</p>
      <button onClick={onRestart}>Chơi lại</button>
    </div>
  );
}

export default Result;





