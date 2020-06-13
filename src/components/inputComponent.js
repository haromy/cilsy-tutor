import React, { useState, useEffect } from 'react';
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
      {
        label && (
          <Form.Label column sm="2">
            {label}
          </Form.Label>
        )
      }
      <Col sm={label ? 10 : 12}>
        <Form.Control
          className="validate"
          style={{ borderColor: value.length === 0 ? 'red' : 'transparent' }}
          value={value}
          placeholder={placeholder}
          onChange={(val) => onChange(val.target.value)}
        />
      </Col>
    </Form.Group>
  );
}

export default InputComponent;