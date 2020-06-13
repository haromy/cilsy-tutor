import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';
import InputComponent from '../components/inputComponent';

// function component
const Register = (props) => {
  const { data, history } = props;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return(
    <Container
    style={{ backgroundColor: '#efefef', borderWidth: 1, marginTop: 10, padding: 10}}
    >
        <div style={{ backgroundColor: '#ededed', padding: 10 }}>
          <div>SIGN UP FOR FREE</div>
          <Row>
            <Col>
              <InputComponent
                value={firstName}
                placeholder="First Name"
                onChange={(val) => setFirstName(val)}
              />
            </Col>
            <Col>
              <InputComponent
                value={lastName}
                placeholder="last Name"
                onChange={(val) => setLastName(val)}
              />
            </Col>
          </Row>
          <Form>
            <InputComponent
              value={email}
              placeholder="Your email"
              onChange={(val) => setEmail(val)}
            />
            <InputComponent
              value={phone}
              placeholder="Your Phone"
              onChange={(val) => setPhone()}
            />
            <InputComponent
              value={password}
              placeholder="Password"
              onChange={(val) => {
                setPassword(val);
              }}
            />
          </Form>
        </div>
    </Container>
  );
};

export default Register;
