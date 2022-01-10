import React, { useState } from 'react';
import { Button,  Label } from 'reactstrap';
import { Modal , Row ,Col } from 'react-bootstrap';
import Cookies from 'js-cookie';
import '../assets/css2/css/modal.css';
import '../assets/scss/style.scss';
import imageLogout from '../assets/icon/msg_error-0 1.png';
export default function LogoutModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState(false);
  function openLogoutModal() {
    setState({
      logoutModal: !state.logoutModal,
    });
  }

  function Logout() {
    Cookies.remove('token');
    window.location.reload();
  }
  const closeBtn = (
    <Button
      type="button"
      className="close"
      aria-label="Close"
      onClick={openLogoutModal.bind(this)}
    >
      <img src="icon/close-icon.png" alt="" width="15" height="16" />
    </Button>
  );
  return (
    <>
      <Button
        className="logout-btn d-none d-lg-flex"
        onClick={handleShow}
      >
        <img src={imageLogout} alt="" /> ออกระบบ
      </Button>

      <Button
        className="dash-icon d-flex d-lg-none"
        onClick={handleShow}
      >
        <img src={imageLogout} className="icon" />
        <p className="p-1">ออกระบบ</p>
      </Button>

      <Modal
        id="_logout_modal"
        className="modal-Login"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header-login">
          <p className="title-header">
            <b>ออกระบบ</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="custom-setting set-logout-modal">
          <div className="logout-modal">
            <h5>คุณต้องการออกระบบหรือไม่</h5>
            <div className="confirm-logout">
              <Row>
              <Col className="mt-2 mb-2"> 
              <Button onClick={() => Logout()}>ใช่</Button>
              </Col>
              <Col className="mt-2 mb-2">
              <Button onClick={openLogoutModal.bind(this)}>ไม่ใช่</Button>
              </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
