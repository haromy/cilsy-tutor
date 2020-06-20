import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';
import InputClass from '../components/inputClass';
// import InputComponent from '../components/inputComponent';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      password: '',
    }
  }
  render() {
    const {
      history
    } = this.props;
    const {
      firstName,
      password,
    } = this.state;
    return(
      <Container>
        <div>page login 2 aja login lagi</div>
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
              value={firstName}
              placeholder="Masukkan username"
              onChange={(val) => this.setState({ firstName: val })}
            />
            <InputClass
              label="Password"
              value={password}
              placeholder="Masukkan password"
              onChange={(val) => this.setState({ password: val })}
            />
          </Form>
          <div>username : {firstName}</div>
          <div>password : {password}</div>
        </div>
      </Container>
    )
  }
}

export default Login;
