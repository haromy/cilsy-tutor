import React, { Component } from 'react';
import {
  Form,
  Row,
  Col
} from 'react-bootstrap';

class InputClass extends Component {
  render() {
    const {
      label,
      placeholder,
      value,
      onChange,
    } = this.props;
  
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
}

export default InputClass;