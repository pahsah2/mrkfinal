import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
} from 'react-bootstrap';

import Service from '../assets/icon/management.png';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuJob from '../Components/layout/MenuJob';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import AddLink from '../assets/icon/add-link.png';

import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Product_Component from '../Components/Job/Product';
import Service_Component from '../Components/Job/Service';
import Package_Component from '../Components/Job/Package';

export default function CompanyB2BMember() {
  const [searchMember, setSearMember] = useState([
    { value: 'นภาวรรณ ยั่งยืน (คุณมิว)', label: ' นภาวรรณ ยั่งยืน (คุณมิว)' },
    { value: 'นภาพร วิบูลกิจ (คุณนัท)', label: ' นภาพร วิบูลกิจ (คุณนัท)' },
    {
      value: <img src={AddLink} />,
      label: (
        <a href="/member" className="link">
          <img src={AddLink} /> เพิ่มรายชื่อ
        </a>
      ),
    },
  ]);
  const [regisNumber, setRegisNumber] = useState([
    { value: 'กด-252 ', label: ' กด-252 ' },
    { value: 'กก -3654', label: ' กก -3654' },
    { value: 'ไม่ระบุ', label: ' ไม่ระบุ' },
    {
      value: <img src={AddLink} />,
      label: (
        <a href="#" className="link">
          <img src={AddLink} /> เพิ่มรถ
        </a>
      ),
    },
  ]);
  const history = useHistory();

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function close() {
    let path = `/`;
    history.push(path);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Job">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  JOB &gt; Company (B2B)
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-header-mobile">
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  JOB &gt; Company (B2B)
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>

                {/* <Row className="g-0 justify-content-center">
                  <GroupButtonStock />
                </Row> */}
                <Row className="justify-content-center set-height-order">
                  <Col lg={11}>
                    <Row className="mt-4 mb-4 justify-content-center">
                      <Col xs={12} lg={6}>
                        <Row className="justify-content-center">
                          <Col className="d-flex justify-content-start">
                            <p className="font-weight-bold">ค้นหาลูกค้า</p>
                          </Col>
                        </Row>
                        <Row className=" mt-3 mb-3">
                          <Col lg={12}>
                            <Select
                              className="text-left select-style"
                              aria-label="Default select example"
                              placeholder="ค้นหาด้วยชื่อ,รหัสสมาชิก,เบอร์โทรศัพท์"
                              options={searchMember}
                            />
                          </Col>
                          <Col></Col>
                        </Row>
                        <Row className=" mt-3 mb-3">
                          <Col lg={12}>
                            <Select
                              className="text-left select-style"
                              aria-label="Default select example"
                              placeholder="ค้นหาเลขทะเบียน"
                              options={regisNumber}
                            />
                          </Col>
                          <Col></Col>
                        </Row>
                      </Col>
                      <Col xs={12} lg={6}>
                        <Row className="justify-content-end">
                          <Col xs={12} lg={4}>
                            <Button type="button" className="button">
                              สร้างรายชื่อใหม่
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={12} lg={4}>
                        <Row>
                          <Col xs={12} lg={12} className="mt-3 mb-3">
                            <Row>
                              <Col xs={12} md={12} className="text-left">
                                <Form.Label className="font-weight-bold">
                                  ข้อมูลโชว์รูม
                                </Form.Label>
                              </Col>
                              <Col md={12} className="ml-3  mt-3 text-left">
                                <p>บริษัท เจริญมอเตอร์เบนซ์ จำกัด</p>
                                <p>
                                  3 ถนน รัตนโกสินทร์ ตำบลศรีภูมิ
                                  อำเภอเมืองเชียงใหม่ เชียงใหม่ 50200
                                </p>

                                <p>065-4859926,081-9945623</p>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={12} lg={12} className="mt-3 mb-3">
                            <Row>
                              <Col xs={12} md={12} className="text-left">
                                <Form.Label className="font-weight-bold">
                                  พนักงานขายที่ดูแล
                                </Form.Label>
                              </Col>
                              <Col md={12} className="ml-3  mt-3 text-left">
                                <p>วุฒิไกร ใจสั่งมา</p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col xs={12} lg={8}>
                        <Row>
                          <Col xs={12} lg={12} className="mt-3 mb-3">
                            <Row>
                              <Col xs={12} md={12} className="text-left">
                                <Form.Label className="font-weight-bold">
                                  ข้อมูลลูกค้า
                                </Form.Label>
                              </Col>
                              <Col md={12} className="ml-3  mt-3 text-left">
                                <Row>
                                  <Col xs={4} lg={3}>
                                    <Form.Label>รหัสสมาชิก</Form.Label>
                                  </Col>
                                  <Col>
                                    <p>MRK6010300002</p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={4} lg={3}>
                                    <Form.Label>ชื่อ</Form.Label>
                                  </Col>
                                  <Col>
                                    <p>
                                      นภาวรรณ ยั่งยืน (คุณมิว) ชื่อAKA น้องมิว
                                    </p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={4} lg={3}>
                                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                  </Col>
                                  <Col>
                                    <p>065-4859926,081-9945623</p>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={4} lg={3}>
                                    <Form.Label>รถที่เข้ารับบริการ</Form.Label>
                                  </Col>
                                  <Col>
                                    <span>
                                      เลขทะเบียนรถ : กด-252 &nbsp; รายละเอียด :
                                      ยี่ห้อ : Honda, รุ่น Civic -1.8 el, สี :
                                      ขาว, ป้าย : ธรรมดา จังหวัด : เชียงใหม่
                                      เลขตัวถัง : 484226
                                    </span>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={4} lg={3}>
                                    <Form.Label>หมายเหตุ</Form.Label>
                                  </Col>
                                  <Col>
                                    <p>VVIP</p>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>

                      <Col sm={12} className="mt-3 mb-3">
                        <Row className="justify-content-center">
                          <Col xs={4} lg={3}>
                            <Button type="button" className="button">
                              ถัดไป
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
