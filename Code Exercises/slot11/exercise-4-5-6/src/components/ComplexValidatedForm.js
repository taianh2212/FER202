import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ComplexValidatedForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agree, setAgree] = useState(false);
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid = name.trim() !== "" && gender && country && agree;
    setFormValid(isValid);
  }, [name, gender, country, agree]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Gửi form thành công!");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
        />
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Nam"
            name="gender"
            value="Nam"
            checked={gender === "Nam"}
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            type="radio"
            label="Nữ"
            name="gender"
            value="Nữ"
            checked={gender === "Nữ"}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Chọn quốc gia --</option>
          <option value="Vietnam">Việt Nam</option>
          <option value="USA">Mỹ</option>
          <option value="Japan">Nhật</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mt-3">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với điều khoản"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
      </Form.Group>

      <Button className="mt-3" type="submit" disabled={!formValid}>
        Gửi
      </Button>
    </Form>
  );
};

export default ComplexValidatedForm;
