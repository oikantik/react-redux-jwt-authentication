import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { loginUser } from "../actions/actions";
import { setAuthToken } from "../utils/localstorage";
import { Redirect } from "react-router-dom";
import LoginModal from "./LoginModal";

class Login extends Component {
  onLoginSubmit = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {
      email,
      password
    };
    this.props.dispatch(loginUser(user));
  };

  render() {
    if (this.props.token !== "") {
      setAuthToken(this.props.token);
    }

    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={this.onLoginSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="register-submit-button"
                disabled={this.props.loading}
              >
                Submit
              </Button>
            </Form>
            {this.props.token ? <Redirect to="/dashboard" /> : <LoginModal />}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { loading, success, error, token } = state.loginReducer;
  return {
    loading,
    success,
    error,
    token
  };
};

export default connect(mapStateToProps)(Login);
