import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';

import '@pathofdev/react-tag-input/build/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import Navbar from '../Components/Navbar';
import LogoutModal from '../Components/LogoutModal';

import { Link } from 'react-router-dom';
import '../assets/scss/style.scss';
import NavbarTop from '../Components/NavbarTop';
import Setting from '../assets/icon/setting.png';

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function close() {
    setShow(false);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="bg-mrk">
        <Row className="">
          <Col lg={8} xl={7} className="align-items-start">
            <Row>
              <Col lg={2} xl={2} className="set-col">
                <Link to="/" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/dashboard.png" className="icon" />
                    <p className="p-1">Mr. Kleane Sky</p>
                  </div>
                </Link>
              </Col>
              <Col lg={2} xl={2} className="set-col">
                <Link to="/customer" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/member.png" className="icon" />
                    <p className="p-1">Customer(B2C)</p>
                  </div>
                </Link>
                <Link to="/package" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/address_book_home.png" className="icon" />
                    <p className="p-1">Company(B2B)</p>
                  </div>
                </Link>
              </Col>
              <Col lg={2} xl={2} className="set-col">
                <Link to="/user" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/user.png" className="icon" />
                    <p className="p-1">User</p>
                  </div>
                </Link>
                <Link to="/stock" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/appwizard_list.png" className="icon" />
                    <p className="p-1">Stock</p>
                  </div>
                </Link>
                <Link to="/property" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/asset.png" className="icon" />
                    <p className="p-1">ทรัพย์สิน</p>
                  </div>
                </Link>
              </Col>
              <Col lg={2} xl={2} className="set-col">
                <Link to="/service" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/management.png" className="icon" />
                    <p className="p-1">จัดการบริการ</p>
                  </div>
                </Link>
                <Link to="/package" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/package-manage.png" className="icon" />
                    <p className="p-1">จัดการแพ็คเกจ</p>
                  </div>
                </Link>
                <Link to="/product" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/product-manage.png" className="icon" />
                    <p className="p-1">จัดการสินค้า</p>
                  </div>
                </Link>
                <Link to="/management" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/branch-manage.png" className="icon" />
                    <p className="p-1">จัดการสาขา</p>
                  </div>
                </Link>
                <Link to="/staff" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/staff.png" className="icon" />
                    <p className="p-1">ครอบครัว(MRKfam)</p>
                  </div>
                </Link>
              </Col>

              <Col lg={2} xl={2} className="set-col">
                <Link to="/notification" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/notification.png" className="icon" />
                    <p className="p-1">Notification</p>
                  </div>
                </Link>
                <Link to="/" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/purchase.png" className="icon" />
                    <p className="p-1">การนัดหมาย</p>
                  </div>
                </Link>
                <Link to="/" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/glass-staff.png" className="icon" />
                    <p className="p-1">คิวช่างกระจก</p>
                  </div>
                </Link>
                <div className="dash-icon" type="button" onClick={handleShow}>
                  <img src="icon/setting.png" className="icon" />
                  <p className="p-1">ตั้งค่า</p>
                </div>
                <Link to="/report" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/file_padlock 1.png" className="icon" />
                    <p className="p-1">รายงาน</p>
                  </div>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col lg={5} xl={5} className="align-items-right">
            <Row>
              <Col cols="4"></Col>
              <Col cols="4"></Col>
              <Col cols="4"></Col>
            </Row>
          </Col>
          <div className="div-logout">
            <LogoutModal />
          </div>
        </Row>

        <Navbar />
      </Container>
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
    </>
  );
}
