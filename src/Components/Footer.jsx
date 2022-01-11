import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../assets/scss/style.scss';
import LogoutModal from './LogoutModal';
import Mr1 from '../assets/icon/Mr1.png';
import Setting from '../assets/icon/setting.png';
import Staff from '../assets/icon/staff.png';
import Logout_img from '../assets/icon/logout.png'
import Cookies from 'js-cookie';

export default function Footer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showLogout, setShowLogout] = useState(false);
  const handleCloseLogout = () => setShowLogout(false);
  const handleShowLogout = () => setShowLogout(true);

  function close() {
    setShow(false);
  }
  function Logout() {
    Cookies.remove('token');
    window.location.reload();
  }
  return (
    <>
    <div className="d-none d-sm-block footer">
      <nav className="navbar   navbar-expand-lg">
        <div className="navbar-nav d-none d-sm-block">
          <button className="start-button">
            <img src={Mr1} />
          </button>
        </div>
        <div className="navbar-right set-width-logout">
          <Row className="m-0">
          <Col sm={4} className="p-0">
          <div >
            <button type="button" className="button-logout" onClick={handleShowLogout}>
              <img src={Logout_img} /> &nbsp; ออกระบบ
            </button>
          </div>
          </Col>
          <Col sm={8} className="p-0 pr-3 pl-3">
          <div className="set-button ">
            <button type="button" className="button-profile">
              <img src={Setting} onClick={handleShow} />
              <img src={Staff} />
              <span className="login-name">admin admin</span>
            </button>
          </div>
          </Col>
          </Row>
        </div>
      </nav>
      <Modal
        className="modal-Confirm-Admit"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header-Confirm-Admit">
          <img src={Setting} /> &nbsp;
          <p>
            <b>ตั้งค่า</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={close}
          >
            <span aria-hidden="true">X</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/type-cars">
                <Button className="button">ตั้งค่า (ประเภทรถ)</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/brand-car">
                <Button className="button">ตั้งค่า (ยี่ห้อรถ/รุ่นรถ)</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/division">
                <Button className="button">ตั้งค่า (แผนก)</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/unit">
                <Button className="button">ตั้งค่า (หน่วย)</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/category-and-service">
                <Button className="button">ตั้งค่า (หมวดหมู่สินค้า)</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/setup">
                <Button className="button">ตั้งค่าการใช้งาน</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Link to="/setting/bank">
                <Button className="button">ตั้งค่าธนาคาร</Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <Col lg={4}>
              <Link to="/setting/segment">
                <Button className="button">ตั้งค่า Segment</Button>
              </Link>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>

    <Modal
        id="_logout_modal"
        className="modal-Login"
        centered
        show={showLogout}
        onHide={handleCloseLogout}
      >
        <Modal.Header className="modal-header-login">
          <p className="title-header">
            <b>ออกระบบ</b>
          </p>
          <button
            type="button "
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleCloseLogout}
          >
            <span aria-hidden="true">X</span>
          </button>
        </Modal.Header>
        <Modal.Body className="custom-setting set-logout-modal">
          <div className="logout-modal">
            <h5>คุณต้องการออกระบบหรือไม่</h5>
            <div className="confirm-logout">
              <Row>
              <Col className="mt-2 mb-2"> 
              <Button onClick={() => Logout()} className="text-dark button-logout">ใช่</Button>
              </Col>
              <Col className="mt-2 mb-2">
              <Button onClick={handleCloseLogout} className="text-dark button-logout">ไม่ใช่</Button>
              </Col>
              </Row>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
    
  );
}
