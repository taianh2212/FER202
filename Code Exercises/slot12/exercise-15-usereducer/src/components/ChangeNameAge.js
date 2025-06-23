// ✅ Bài 2 - useReducer để cập nhật form name và age

import React, { useReducer } from "react";

// Hàm reducer xử lý cập nhật name và age
function formReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.value };
    case "SET_AGE":
      return { ...state, age: action.value };
    default:
      return state;
  }
}

function ChangeNameAge() {
  // Khởi tạo state với useReducer
  const [state, dispatch] = useReducer(formReducer, { name: "", age: "" });

  return (
    <div>
      <label>Name:</label>
      {/* Cập nhật name khi người dùng nhập */}
      <input
        type="text"
        value={state.name}
        onChange={(e) => dispatch({ type: "SET_NAME", value: e.target.value })}
      />

      <label>Age:</label>
      {/* Cập nhật age khi người dùng nhập */}
      <input
        type="text"
        value={state.age}
        onChange={(e) => dispatch({ type: "SET_AGE", value: e.target.value })}
      />

      <h3>Name: {state.name}</h3>
      <h3>Age: {state.age}</h3>
    </div>
  );
}

export default ChangeNameAge;
