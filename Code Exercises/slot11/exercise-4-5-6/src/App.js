import React from 'react';
import ValidatedLoginForm from './components/ValidatedLoginForm';
import ComplexValidatedForm from './components/ComplexValidatedForm';

function App() {
  return (
    <div className="container mt-5">
      <h1>Exercise 5: Form Xác thực Email & Mật khẩu</h1>
      <ValidatedLoginForm />
      <hr className="my-5" />
      <h1>Exercise 6: Form Đầy Đủ Các Trường</h1>
      <ComplexValidatedForm />
    </div>
  );
}

export default App;
