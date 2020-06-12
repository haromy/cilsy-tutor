import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
} from 'react-bootstrap';
import InputClass from '../components/inputClass';
import InputComponent from '../components/inputComponent';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    const {
      history
    } = this.props;
    const {
      username,
      password
    } = this.state;
    return(
      <Container>
        <div>page login</div>
        <Button
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <div style={{ backgroundColor: '#ededed', padding: 10 }}>
          <div>Child component dengan class</div>
          <Form>
            <InputClass
              label="Username"
              value={username}
              placeholder="Masukkan username"
              onChange={(val) => this.setState({ username: val })}
            />
            <InputClass
              label="Password"
              value={password}
              placeholder="Masukkan password"
              onChange={(val) => this.setState({ password: val })}
            />
          </Form>
          <div>username : {username}</div>
          <div>password : {password}</div>
        </div>
        <div style={{ backgroundColor: '#ededed', padding: 10 }}>
          <div>Child component dengan function</div>
          <Form>
            <InputComponent
              label="Username"
              value={username}
              placeholder="Masukkan username"
              onChange={(val) => this.setState({ username: val })}
            />
            <InputComponent
              label="Password"
              value={password}
              placeholder="Masukkan password"
              onChange={(val) => this.setState({ password: val })}
            />
          </Form>
          <div>username : {username}</div>
          <div>password : {password}</div>
        </div>
      </Container>
    )
  }
}

export default Login;
