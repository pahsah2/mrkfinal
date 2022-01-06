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
import { Switch } from 'antd';
import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuUser from '../Components/layout/MenuUser';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import New_Save from '../assets/icon/save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Note from '../assets/icon/address_book.png';
import TriangleArrow from '../assets/icon/TriangleArrow.png';

export default function EditUser() {
  const history = useHistory();
  const [hide, setHide] = useState(true);
  const [employee, setEmployee] = useState([{ value: '', label: ' ' }]);
  const [level, setLevel] = useState([{ value: '', label: ' ' }]);
  const [statusService, setStatusService] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  const optionEmployee = [
    { value: 'อภิชาติ', label: 'อภิชาติ' },
    { value: 'กิตติจร', label: 'กิตติจร' },
    { value: 'อวิกา ศรีโพธิ์ทอง', label: 'อวิกา ศรีโพธิ์ทอง' },
  ];
  const optionLevel = [
    { value: 'Level 1', label: 'Level 1' },
    { value: 'Level 2', label: 'Level 2' },
    { value: 'Level 3', label: 'Level 3' },
  ];
  function SetEmployee(data) {
    setEmployee({ value: data.value, label: data.value });
  }
  function SetLevel(data) {
    setLevel({ value: data.value, label: data.value });
  }
  useEffect(() => {
    // Update the document title using the browser API
    console.group('switch', statusService);
  });
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>User &gt; รายชื่อผู้ใช้ระบบ &gt; แก้ไขผู้ใช้งาน</b>
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
                  <b>User &gt; รายชื่อผู้ใช้ระบบ &gt; แก้ไขผู้ใช้งาน</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form className="form-user-create">
                  <Row className="g-0 justify-content-start m-0   set-line mb-4">
                    <Col xs={12} className="p-0 mt-2 mb-2">
                      <div className="box-user">
                        <Form.Label>ข้อมูลส่วนตัว</Form.Label>
                      </div>
                    </Col>
                    <Col xs={12} lg={7} className="mt-3 mb-3">
                      <Row>
                        <Col lg={2} xl={2}></Col>
                        <Col xs={12} lg={10}>
                          <Row className="justify-content-start align-items-center">
                            <Col xs={5} lg={3} className="mt-4 mb-4 text-left">
                              <Form.Label>ชื่อพนักงาน</Form.Label>
                            </Col>
                            <Col
                              xs={7}
                              lg={6}
                              xl={5}
                              className="mt-4 mb-4 text-left"
                            >
                              <Select
                                options={optionEmployee}
                                placeholder="พนักงาน"
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetEmployee(data)}
                                className="select-list"
                              />
                            </Col>
                          </Row>
                          <Row className="justify-content-center">
                            <Col xs={5} lg={3} className="mt-4 mb-4 text-left">
                              <Form.Label>สาขา</Form.Label>
                            </Col>
                            <Col className="mt-4 mb-4 text-left">
                              <Form.Label>สวนดอก</Form.Label>
                            </Col>
                          </Row>
                          <Row className="justify-content-center">
                            <Col xs={5} lg={3} className="mt-4 mb-4 text-left">
                              <Form.Label>แผนก</Form.Label>
                            </Col>
                            <Col className="mt-4 mb-4 text-left">
                              <Form.Label>การเงิน</Form.Label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 justify-content-start m-0   set-line">
                    <Col xs={12} lg={7} className="mt-5 mb-3">
                      <Row>
                        <Col lg={2} xl={2}></Col>
                        <Col xs={12} lg={10}>
                          <Row className="align-items-center">
                            <Col xs={5} lg={3} className="mt-3 mb-3 d-flex">
                              <Form.Label className="font-weight-bold">
                                Account
                              </Form.Label>
                            </Col>
                            <Col className="mt-3 mb-3 d-flex">
                              <Switch onClick={statusServiceToggler} />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      {statusService === false ? (
                        <Row>
                          <Col lg={2} xl={2}></Col>
                          <Col xs={12} lg={10}>
                            <Row className="justify-content-start align-items-center">
                              <Col
                                xs={5}
                                lg={3}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Label>ชื่อพนักงาน</Form.Label>
                              </Col>
                              <Col
                                xs={7}
                                lg={6}
                                xl={5}
                                className="mt-3 mb-3 text-left"
                              >
                                <Select
                                  options={optionLevel}
                                  placeholder="เลเวล"
                                  isClearable={false}
                                  isSearchable={false}
                                  onChange={(data) => SetLevel(data)}
                                  className="select-list"
                                />
                              </Col>
                            </Row>
                            <Row className="justify-content-start align-items-center">
                              <Col xs={12}></Col>
                              <Col
                                xs={5}
                                lg={3}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Label>ชื่อผู้ใช้</Form.Label>
                              </Col>
                              <Col
                                xs={7}
                                lg={6}
                                xl={5}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Control
                                  value={username}
                                  onChange={(e) => setUsername(e.target.value)}
                                ></Form.Control>
                              </Col>
                            </Row>
                            <Row className="justify-content-start align-items-center">
                              <Col
                                xs={5}
                                lg={3}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Label>รหัสผ่าน</Form.Label>
                              </Col>
                              <Col
                                xs={7}
                                lg={6}
                                xl={5}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Control
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                ></Form.Control>
                              </Col>
                            </Row>
                            <Row className="justify-content-start align-items-center">
                              <Col
                                xs={5}
                                lg={3}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                              </Col>
                              <Col
                                xs={7}
                                lg={6}
                                xl={5}
                                className="mt-3 mb-3 text-left"
                              >
                                <Form.Control
                                  value={confirmPassword}
                                  onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                  }
                                ></Form.Control>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      ) : (
                        ''
                      )}
                    </Col>
                  </Row>
                  <Row className="g-0 justify-content-center  mt-5 mb-5">
                    <Col xs={6} lg={3}>
                      <Button type="button" className="button">
                        <img src={New_Save} /> &nbsp; บันทึก
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
