import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <Form>
      <h2>Contact Us</h2>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">Submit</Button>
    </Form>
  );
}
