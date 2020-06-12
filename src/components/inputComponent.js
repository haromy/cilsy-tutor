import React from 'react';
import {
  Form,
  Row,
  Col
} from 'react-bootstrap';

// ini adalah HOC
// High Order Component
const InputComponent = (props) => {
  const {
    label,
    placeholder,
    value,
    onChange,
  } = props;

  return (

    <Form.Group as={Row} controlId="formPlaintextEmail">
      <Form.Label column sm="2">
        {label}
      </Form.Label>
      <Col sm="10">
        <Form.Control
          value={value}
          placeholder={placeholder}
          onChange={(val) => onChange(val.target.value)}
        />
      </Col>
    </Form.Group>
  );
}

export default InputComponent;