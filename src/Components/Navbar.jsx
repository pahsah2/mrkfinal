import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LogoutModal from './LogoutModal';
import '../assets/scss/style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import Mr1 from '../assets/icon/Mr1.png';
import Setting from '../assets/icon/setting.png';
import Staff from '../assets/icon/staff.png';
export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function close() {
    setShow(false);
  }
  return (
    <div>
      <nav className="navbar fixed-bottom navbar-expand-lg">
        <div className="navbar-nav d-none d-lg-block">
          <div className="start-button">
            <img src={Mr1} />
          </div>
        </div>
        <div className="navbar-right d-flex align-items-center">
          <div className="d-none d-lg-flex">
            {' '}
            <LogoutModal />{' '}
          </div>
          {/* <NavbarProfile
            myBranch={this.props.myBranch}
            openTabsModal={(type) => this.navTextMenu(type)}
            branch={this.props.branch}
            name={this.props.name}
          /> */}
          <div className="set-button">
            <button type="button" className="button-profile">
              <img src={Setting} onClick={handleShow} />
              <img src={Staff} />
              <span className="login-name">admin admin</span>
            </button>
          </div>
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
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า (ประเภทรถ)</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า (ยี่ห้อรถ/รุ่นรถ)</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า (แผนก)</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า (หน่วย)</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า (หมวดหมู่สินค้า)</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่าการใช้งาน</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่าธนาคาร</Button>
            </Col>
          </Row>
          <Row className="justify-content-center mt-3 mb-3">
            <Col lg={4}>
              <Button className="button">ตั้งค่า Segment</Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
}
