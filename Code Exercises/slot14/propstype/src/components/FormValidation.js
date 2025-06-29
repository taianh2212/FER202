import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import Checkbox from "./Checkbox";
import { validateForm } from "../utils/validators";

const FormValidation = ({ onSubmit }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateForm(form);
    setErrors(validation.errors);
    setShowAlert(!validation.valid);
    if (validation.valid) {
      onSubmit(form);
    }
  };

  return (
    <Container>
      {showAlert && <Alert variant="danger">Vui lòng sửa lỗi bên dưới!</Alert>}

      <Form onSubmit={handleSubmit}>
        <FormInput
          label="Tên"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />

        <FormInput
          label="Tuổi"
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
          error={errors.age}
        />

        <FormInput
          label="Số điện thoại"
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />

        <Checkbox
          label="Tôi đồng ý với điều khoản"
          name="agree"
          checked={form.agree}
          onChange={handleChange}
          error={errors.agree}
        />

        <Button variant="primary" type="submit" className="mt-3">
          Gửi
        </Button>
      </Form>
    </Container>
  );
};

FormValidation.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default FormValidation;
