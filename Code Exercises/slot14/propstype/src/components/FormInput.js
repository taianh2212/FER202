import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FormInput = ({ label, name, type, value, onChange, error }) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      isInvalid={!!error}
    />
    <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
  </Form.Group>
);

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

FormInput.defaultProps = {
  type: "text",
};

export default FormInput;
