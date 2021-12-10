import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../assets/scss/style.scss';
import LogoutModal from './LogoutModal';
import Mr1 from '../assets/icon/Mr1.png';
import Setting from '../assets/icon/setting.png';
import Staff from '../assets/icon/staff.png';
export default function Footer() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function close() {
    setShow(false);
  }
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col className="button-mrk">
            <div className="start-button">
              <img src={Mr1} />
            </div>
          </Col>
          <Col col={6} sm={6} md={4} lg={4} xl={3} className="">
            <div className="set-button">
              <div className="mr-2">
                <LogoutModal />
              </div>
              <button type="button" className="button-profile ">
                <img src={Setting} onClick={handleShow} />
                <img src={Staff} />
                <span className="login-name">admin admin</span>
              </button>
            </div>
          </Col>
        </Row>
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
                <a href="/setting/type-cars">
                  <Button className="button">ตั้งค่า (ประเภทรถ)</Button>
                </a>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/brand-car">
                  <Button className="button">ตั้งค่า (ยี่ห้อรถ/รุ่นรถ)</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/division">
                  <Button className="button">ตั้งค่า (แผนก)</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/unit">
                  <Button className="button">ตั้งค่า (หน่วย)</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/category-and-service">
                  <Button className="button">ตั้งค่า (หมวดหมู่สินค้า)</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/setup">
                  <Button className="button">ตั้งค่าการใช้งาน</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col lg={4}>
                <Link href="/setting/bank">
                  <Button className="button">ตั้งค่าธนาคาร</Button>
                </Link>
              </Col>
            </Row>
            <Row className="justify-content-center mt-3 mb-3">
              <Col lg={4}>
                <Link href="/setting/segment">
                  <Button className="button">ตั้งค่า Segment</Button>
                </Link>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
