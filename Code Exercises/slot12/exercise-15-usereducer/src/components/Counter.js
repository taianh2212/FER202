// ✅ Bài 1 - useReducer cho Counter (Đếm số tăng/giảm/reset)

import React, { useReducer } from "react";

// Hàm reducer xử lý các hành động
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  // Khởi tạo useReducer với giá trị ban đầu là count = 0
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      {/* Gửi hành động tăng */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      {/* Gửi hành động giảm */}
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      {/* Gửi hành động reset */}
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default Counter;
