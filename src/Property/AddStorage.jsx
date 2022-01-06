import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';
import MenuProperty from '../Components/layout/MenuProperty';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Branch_manage from '../assets/icon/branch-manage.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Note from '../assets/icon/address_book.png';
import View from '../assets/icon/view-member.png';
import Property from '../Components/Property/Property';
import ViewAll from '../Components/Property/ViewAll';
import Data from '../Components/Property/Data';
import Storage from '../Components/Property/Storage';
import Increase from '../assets/icon/add-staff.png';
import Save from '../assets/icon/save.png';
import Turn_Off from '../assets/icon/new-re-turn.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

export default function AddStorage() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);
  const [key, setKey] = useState('Data');

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <NavbarTop />
      <Container
        fluid
        className="package-container Staff   Property Property-data bg-mrk"
      >
        <Form>
          <div className="package">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Service} />
                    <b>เพิ่มรายการจัดเก็บ</b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closePackage}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-header-mobile">
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closePackage}
                  >
                    <img src={Back} />
                  </button>
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Service} />
                    <b>เพิ่มรายการจัดเก็บ</b>
                  </h5>
                </div>
                <div className="modal-body">
                  <Row className="g-0 tabsicon justify-content-center ">
                    <TabsIcon />
                  </Row>
                  <Row>
                    <div className="box-typecar "></div>
                  </Row>
                  <Row className="justify-content-center ">
                    <Col lg={10} className="d-flex">
                      <p className="title">ข้อมูลจัดซื้อ</p>
                    </Col>
                    <Col lg={10}>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>วันที่ซื้อ</Form.Label>
                            </Col>
                            <Col>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                                style={{ borderRadius: '0px' }}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>ซื้อจาก</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>ซื้อโดย</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>ราคา</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>จำนวน</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>ใบรับประกันสินค้า</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="d-flex align-items-center set-button-upload">
                          <Button
                            type="button"
                            className="button-increase button"
                          >
                            อัพโหลด
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 justify-content-center  mt-5">
                    <Col lg={10} className="d-flex">
                      <p className="title">ข้อมูลจัดเก็บ</p>
                    </Col>
                    <Col lg={10}>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>สถานที่</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>

                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>จุดที่วาง</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col></Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex ">
                              <Form.Label>จำนวน</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="d-flex"></Col>
                      </Row>
                      <Row>
                        <Col md={12} lg={6}>
                          <Row>
                            <Col lg={4} className="d-flex "></Col>
                            <Col className="mt-4 mb-3">
                              <Button type="button" className="button-increase">
                                <img src={Increase} /> &nbsp; เพิ่มรายการ
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="d-flex"></Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="mt-5 m-5  justify-content-between">
                    <Col xs={6} sm={6} md={6} lg={4} className="">
                      <Button type="button" className="button-increase">
                        <img src={Save} /> &nbsp; บันทึก
                      </Button>
                    </Col>

                    <Col xs={6} sm={6} md={6} lg={4} className="">
                      <Button type="button" className="button-increase">
                        <img src={Turn_Off} /> &nbsp; ออก
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Container>
      <Footer />
    </>
  );
}
