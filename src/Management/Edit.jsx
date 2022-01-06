import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
} from 'react-bootstrap';
import ReactTagInput from '@pathofdev/react-tag-input';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabIconManagement from '../Components/layout/TabIconManagement';
import MenuManagement from '../Components/layout/MenuManagement';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Branch_manage from '../assets/icon/branch-manage.png';
import Save from '../assets/icon/save.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Note from '../assets/icon/address_book.png';
import View from '../assets/icon/view-member.png';
import TabsIcon from '../Components/layout/TabsIcon';
import Select, { components } from 'react-select';
import Increase from '../assets/icon/increase.png';
import Delete_Button from '../assets/icon/flat-style-circle-delete.png';
import Calendar from '../assets/icon/calendar-bg.png';
import { DatePicker, Space, Switch } from 'antd';
export default function Edit() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);
  const [startDate, setStartDate] = useState('');
  const [open, setOpen] = useState([{ value: '', label: '' }]);
  const [close, setClose] = useState([{ value: '', label: '' }]);
  const [nameContract, setNameContract] = useState('');
  const [phone, setPhone] = useState([]);

  const [bank, setBank] = useState('');
  const [nameaccount, setNameaccount] = useState('');
  const [target, setTarget] = useState('');
  const [statusService, setStatusService] = useState(false);
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  const account_number = [
    { value: 'xxxxx-xx-xx-x-x', label: 'x-xxxx-x-x-x-x' },
  ];
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container  management-edit bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Branch_manage} />
                  <b>การจัดการสาขา &gt; แก้ไข</b>
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
                  <img className="logo pr-2" src={Branch_manage} />
                  <b>การจัดการสาขา &gt; แก้ไข</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="line-top-form justify-content-center"></Row>

                <Form>
                  <Row className="justify-content-center">
                    <Col lg={10}>
                      <Row className="d-md-block d-lg-none">
                        <Col className="d-flex justify-content-start ">
                          <Switch onClick={statusServiceToggler} />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start "
                            >
                              <Form.Label className="mt-3">ชื่อสาขา</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input-search-add-staff"></Form.Control>
                              <p className="text-right m-0">18/150</p>
                            </Col>
                          </Row>
                        </Col>
                        <Col
                          lg={5}
                          className="d-flex justify-content-start   d-md-none d-lg-block"
                        >
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start"
                            >
                              <Switch onClick={statusServiceToggler} />
                            </Col>
                            <Col className="d-flex justify-content-start align-items-center">
                              <Form.Label className="text-bold">
                                เปิด/ปิดการใช้งาน
                              </Form.Label>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start align-items-center"
                            >
                              <Form.Label>เบอร์โทรศัพท์</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Form.Control className="input-search-add-staff"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}></Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start"
                            >
                              <Form.Label className="mt-3">ที่อยู่</Form.Label>
                            </Col>
                            <Col className="d-flex justify-content-end">
                              <Form.Control
                                as="textarea"
                                rows={3}
                                className="input-area-box"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}></Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row className="align-items-center">
                            <Col
                              lg={3}
                              className="d-flex justify-content-start"
                            >
                              <Form.Label>เวลาเปิด-ปิด</Form.Label>
                            </Col>
                            <Col className="">
                              <Row>
                                <Col xs={5} lg={5}>
                                  <Select
                                    className="text-left select-style"
                                    aria-label="Default select example"
                                    placeholder=""
                                    options={open}
                                  />
                                </Col>
                                <Col
                                  xs={2}
                                  lg={2}
                                  className="d-flex justify-content-center align-items-center"
                                >
                                  &ndash;
                                </Col>
                                <Col xs={5} lg={5}>
                                  <Select
                                    className="text-left select-style"
                                    aria-label="Default select example"
                                    placeholder=""
                                    options={close}
                                  />
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}></Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col lg={10}>
                          <Row className="align-items-center">
                            <Col xs={12} sm={12} lg={6}>
                              <Row className="align-items-center">
                                <Col lg={4} className="text-left">
                                  <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
                                </Col>
                                <Col>
                                  <Form.Control className=" input-search-add-staff"></Form.Control>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={12} sm={12} lg={5}>
                              <Row className="align-items-center">
                                <Col lg={3} className="text-left">
                                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                </Col>
                                <Col lg={9}>
                                  <ReactTagInput
                                    placeholder="กรุณากรอกเบอร์โทรศัพท์"
                                    editable={true}
                                    readOnly={false}
                                    removeOnBackspace={true}
                                    maxTags={2}
                                    tags={phone}
                                    onChange={(e) => setPhone(e)}
                                    className="input-search-add-staff"
                                  />
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={12} sm={12} lg={1} className="">
                              <Button
                                type="button"
                                className="delete-button full-width-button"
                              >
                                <img src={Delete_Button} />
                                <p className="delete-hidden">
                                  &nbsp; ลบผู้ติดต่อ
                                </p>
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={2} className="">
                          <Button type="button" className="in-save ">
                            <img src={Increase} /> &nbsp; เพิ่มรายชื่อ
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start align-items-center"
                            >
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control className="input-search-add-staff"></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}></Col>
                      </Row>
                      <Row>
                        <Col>
                          <Row>
                            <Col
                              lg={3}
                              className="d-flex justify-content-start align-items-center"
                            >
                              ชื่อผู้ใช้
                            </Col>
                            <Col>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={open}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={5}></Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 set-row-add-staff mt-5 mb-5 d-flex justify-content-center ">
                    <Col
                      xs={12}
                      sm={12}
                      md={10}
                      lg={8}
                      className="border-colum-time"
                    >
                      <Row>
                        <Col ms={12} sm={12} lg={6}>
                          <Row>
                            <Col
                              xs={4}
                              sm={3}
                              md={4}
                              lg={3}
                              className="text-input d-flex justify-content-start align-items-center"
                            >
                              <p>เป้าขาย</p>
                            </Col>
                            <Col xs={8} sm={9} md={8} lg={9}>
                              <Form.Control
                                type="text"
                                placeholder=""
                                // defaultValue={statepage[0]}
                                value={target}
                                onChange={(e) => setTarget(e.target.value)}
                                className="input-search-add-staff"
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col ms={12} sm={12} lg={6}>
                          <Row>
                            <Col
                              xs={4}
                              sm={3}
                              md={3}
                              lg={3}
                              className="text-input d-flex justify-content-start align-items-center"
                            >
                              <p>ช่วงเวลา</p>
                            </Col>
                            <Col xs={8} sm={9} md={9} lg={9}>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="mt-3 mb-3">
                      <Button type="button" className="in-save ">
                        <img src={Save} /> &nbsp; บันทึก
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
