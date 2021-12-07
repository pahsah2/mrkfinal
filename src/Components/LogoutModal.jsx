import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label } from 'reactstrap';
import Cookies from 'js-cookie';
import '../assets/css2/css/modal.css';
import '../assets/scss/style.scss';
import imageLogout from '../assets/icon/msg_error-0 1.png';
export default function LogoutModal() {
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
        onClick={openLogoutModal.bind(this)}
      >
        <img src={imageLogout} alt="" /> ออกระบบ
      </Button>

      <Button
        className="dash-icon d-flex d-lg-none"
        onClick={openLogoutModal.bind(this)}
      >
        <img src={imageLogout} className="icon" />
        <p className="p-1">ออกระบบ</p>
      </Button>

      <Modal
        id="_logout_modal"
        className="custom-modal"
        isOpen={state.logoutModal}
        toggle={openLogoutModal.bind(this)}
        backdrop={'static'}
        keyboard={true}
        centered={true}
      >
        <ModalHeader
          toggle={openLogoutModal.bind(this)}
          close={closeBtn}
          className="logout-header"
        >
          <div>ออกระบบ</div>
        </ModalHeader>
        <ModalBody className="custom-setting set-logout-modal">
          <div className="logout-modal">
            <h5>คุณต้องการออกระบบหรือไม่</h5>
            <div className="confirm-logout">
              <Button onClick={() => Logout()}>ใช่</Button>
              <Button onClick={openLogoutModal.bind(this)}>ไม่ใช่</Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}
