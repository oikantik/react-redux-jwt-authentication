import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { showHideModal } from "../actions/actions";

class LoginModal extends Component {
  handleClose = () => {
    this.props.dispatch(showHideModal());
  };
  render() {
    return (
      <Fragment>
        <Modal show={this.props.showModal}>
          <Modal.Header>Alert</Modal.Header>
          <Modal.Body>{this.props.error.msg}</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, success, error, token, showModal } = state.loginReducer;
  return {
    loading,
    success,
    error,
    token,
    showModal
  };
};

export default connect(mapStateToProps)(LoginModal);
