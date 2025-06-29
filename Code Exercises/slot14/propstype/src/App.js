import React, { useState } from "react";
import FormValidation from "./components/FormValidation";

function App() {
  const [userName, setUserName] = useState("");

  const handleFormSubmit = (data) => {
    setUserName(data.name);
    console.log("Dữ liệu đã gửi:", data);
  };

  return (
    <div className="App">
      <h1 className="text-center my-4">Đăng ký người dùng</h1>
      <FormValidation onSubmit={handleFormSubmit} />

      {/* Hiển thị lời chào nếu đã submit */}
      {userName && (
        <h3 className="text-center mt-4 text-success">
          ✅ Xin chào, {userName}!
        </h3>
      )}
    </div>
  );
}

export default App;
