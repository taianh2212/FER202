import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ValidatedLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  useEffect(() => {
    if (emailTouched) setEmailValid(isEmail(email));
  }, [email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) setPasswordValid(password.length >= 8);
  }, [password, passwordTouched]);

  const isFormValid = emailValid && passwordValid && email && password;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Đăng nhập thành công!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setEmailTouched(true)}
          isValid={emailTouched && emailValid}
          isInvalid={emailTouched && !emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mt-3" controlId="formPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => setPasswordTouched(true)}
          isValid={passwordTouched && passwordValid}
          isInvalid={!passwordValid && passwordTouched}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự!
        </Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-4" type="submit" disabled={!isFormValid}>
        Đăng nhập
      </Button>
    </Form>
  );
};

export default ValidatedLoginForm;
