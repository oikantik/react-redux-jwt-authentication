import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAuthToken, removeAuthToken } from "../utils/localstorage";
import { Navbar, Nav, Alert } from "react-bootstrap";
class Dashboard extends Component {
  onLogOut = event => {
    event.preventDefault();
    removeAuthToken();
    document.location = "/login#logged-out";
  };

  render() {
    const localToken = getAuthToken();
    if (!localToken) return <Redirect to="/login" />;
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/dashboard">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/login#logged-out" onClick={this.onLogOut}>
              Logout
            </Nav.Link>
          </Nav>
        </Navbar>

        <Alert key="success-1" variant="success">
          You are successfully logged in
        </Alert>
      </Fragment>
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

export default connect(mapStateToProps)(Dashboard);
