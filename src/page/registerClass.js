import React, { Component } from 'react';
import {
  Container,
  Form,
  Row,
  Col
} from 'react-bootstrap';

// class component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    const {
      data,
      history
    } = this.props;
    const {
      username,
      password
    } = this.state;

    return(
      <Container
        style={{ backgroundColor: '#ededed' , marginTop: 10, padding: 10}}
      >
        <div>Page Register (menggunakan class)</div>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Username
          </Form.Label>
          <Col sm="10">
            <Form.Control
              value={username}
              placeholder="Masukkan username"
              onChange={(val) => this.setState({ username: val.target.value })}
            />
          </Col>
        </Form.Group>
        <div>nama : {username}</div>
      </Container>
    )
  }
}

export default Login;
