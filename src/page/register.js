import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

// function component
const Register = (props) => {
  const { data, history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Container
    style={{ backgroundColor: '#efefef', borderWidth: 1, marginTop: 10, padding: 10}}
    >
      <Row>
        <Col>Page Register (menggunakan funtion)</Col>
      </Row>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={username}
              placeholder="Masukkan username"
              onChange={(val) => setUsername(val.target.value) }
            />
          </Col>
        </Form.Group>
        <div>nama : {username}</div>
    </Container>
  );
};

export default Register;
