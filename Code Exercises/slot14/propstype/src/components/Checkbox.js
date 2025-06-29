import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const Checkbox = ({ label, name, checked, onChange, error }) => (
  <Form.Group controlId={name} className="mb-3">
    <Form.Check
      type="checkbox"
      label={label}
      name={name}
      checked={checked}
      onChange={onChange}
      isInvalid={!!error}
      feedback={error}
      feedbackType="invalid"
    />
    {error && (
      <Form.Text className="text-danger">{error}</Form.Text>
    )}
  </Form.Group>
);

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Checkbox;
