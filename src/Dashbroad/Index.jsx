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

export default function Index() {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <>
      <NavbarTop />
      <Container fluid>
        <Row className="mt-2">
          <Col lg={5} xl={5} className="align-items-start">
            <Row>
              <Col lg={3} xl={3} className="set-col">
                <Link to="/package" className="link">
                  <div
                    className="dash-icon"
                    type="button"
                    data-toggle="modal"
                    data-target="#packageModal"
                  >
                    <img src="icon/package-manage.png" className="icon" />
                    <p className="p-1">จัดการแพ็กเกจ</p>
                  </div>
                </Link>
                <div
                  className="dash-icon"
                  type="button"
                  data-toggle="modal"
                  data-target="#serviceModal"
                >
                  <img src="icon/management.png" className="icon" />
                  <p className="p-1">จัดการบริการ</p>
                </div>
                <Link to="/productmanage" className="link">
                  <div
                    className="dash-icon"
                    type="button"
                    data-toggle="modal"
                    data-target="#productModal"
                  >
                    <img src="icon/product-manage.png" className="icon" />
                    <p className="p-1">จัดการสินค้า</p>
                  </div>
                </Link>
                <div
                  className="dash-icon"
                  type="button"
                  data-toggle="modal"
                  data-target="#"
                >
                  <img src="icon/glass-staff.png" className="icon" />
                  <p className="p-1">คิวช่างกระจก</p>
                </div>
                <div
                  className="dash-icon"
                  type="button"
                  data-toggle="modal"
                  data-target="#"
                >
                  <img src="icon/dashboard.png" className="icon" />
                  <p className="p-1">Dashboard</p>
                </div>
                <div
                  className="dash-icon"
                  type="button"
                  data-toggle="modal"
                  data-target="#assetModal"
                >
                  <img src="icon/asset.png" className="icon" />
                  <p className="p-1">ทรัพย์สิน</p>
                </div>
              </Col>
              <Col lg={3} xl={2} className="set-col">
                <div className="dash-icon" type="button">
                  <img
                    src="icon/report.png"
                    className="icon"
                    data-toggle="modal"
                    data-target="#reportModal"
                  />
                  <p className="p-1">รายงาน</p>
                </div>

                <div
                  className="dash-icon"
                  type="button"
                  data-toggle="modal"
                  data-target="#"
                >
                  <img src="icon/notification.png" className="icon" />
                  <p className="p-1">Notification</p>
                </div>
                <Link to="/member" className="link">
                  <div
                    className="dash-icon"
                    type="button"
                    data-toggle="modal"
                    data-target="#"
                  >
                    <img src="icon/member.png" className="icon" />
                    <p className="p-1">Member</p>
                  </div>
                </Link>
                <Link to="/user" className="link">
                  <div
                    className="dash-icon"
                    type="button"
                    data-toggle="modal"
                    data-target="#"
                  >
                    <img src="icon/user.png" className="icon" />
                    <p className="p-1">User</p>
                  </div>
                </Link>
                <Link to="/b2b" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/address_book_home.png" className="icon" />
                    <p className="p-1">B2B (Showroom)</p>
                  </div>
                </Link>
                <Link to="/stock" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/appwizard_list.png" className="icon" />
                    <p className="p-1">Stock</p>
                  </div>
                </Link>
              </Col>
              <Col lg={3} className="set-col">
                <Link to="/job" className="link">
                  <div className="dash-icon" type="button">
                    <img src="icon/appwizard_list.png" className="icon" />
                    <p className="p-1">Job</p>
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
    </>
  );
}
