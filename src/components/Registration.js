import React, { Component } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { registerUser } from "../actions/actions";
import { Link } from "react-router-dom";

class Registration extends Component {
  onSubmitRegistration = event => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const user = {
      email,
      password
    };
    this.props.dispatch(registerUser(user));
  };
  render() {
    return (
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <Form onSubmit={this.onSubmitRegistration}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
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
              <Form.Text className="text-muted">
                Not registered? Log in <Link to="/login">Here</Link>
              </Form.Text>
            </Form>
            {this.props.user.hasOwnProperty("token") ? (
              <div>Registered Successfully</div>
            ) : (
              <div>{this.props.error.msg}</div>
            )}
          </Col>
          <Col></Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const { loading, user, error, isAuthenticated } = state.registerReducer;
  return {
    loading,
    user,
    error,
    isAuthenticated
  };
};

export default connect(mapStateToProps)(Registration);
