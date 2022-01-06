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
import Setting from '../assets/icon/setting.png';
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
import MenuStock from '../Components/layout/MenuStock';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Note from '../assets/icon/address_book.png';
import Add from '../assets/icon/add_menu.png';
export default function TypeCars() {
  const history = useHistory();
  const [showCutStock, setShowCutStock] = useState(false);
  const [admit, setAdmit] = useState(true);
  const [takeOut, setTakeOut] = useState(true);
  const [count, setCount] = useState([{ value: '', label: '' }]);

  const [statusService, setStatusService] = useState(false);
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };

  const [statepage, setStatepage] = useState('');
  const [page, setPage] = useState([
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ]);

  const handleSelectPage = (e) => setStatepage(e);

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
      <Container fluid className="package-container Stock Setting bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Setting} />
                  <b>ตั้งค่า &gt; ประเภทรถ</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
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
                  onClick={close}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Setting} />
                  <b>ตั้งค่า &gt; ประเภทรถ</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>

                <Row className="g-0 justify-content-center mb-3">
                  <Col xs={12}>
                    <Row>
                      <Col xs={8} md={9} lg={5}>
                        <Form.Control placeholder="ชื่อประเภท"></Form.Control>
                      </Col>
                      <Col
                        xs={4}
                        md={3}
                        lg={3}
                        xl={1}
                        className="d-flex align-items-center"
                      >
                        <Switch onClick={statusServiceToggler} />
                        {/* {statusService ? <span>well</span> : <span>Bad</span>} */}
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Form>
                  <div className="set-height">
                    <Row className="g-0   mt-3 justify-content-center">
                      <Col lg={12} className="d-flex mt-2 mb-2">
                        <Form.Check inline label="" name="check" />
                        <p>เฉพาะระบบกลาง</p>
                      </Col>
                      <Col lg={12} className="d-flex mt-2 mb-2">
                        <p className="font-weight-bold">ตั้งค่า Peremission</p>
                      </Col>
                      <Row className="">
                        <table className="table table-responsive ">
                          <thead>
                            <tr className="t-header-setting">
                              <th className="text-left" width="50%">
                                ชื่อเมนู
                              </th>
                              <th>ทั้งหมด</th>
                              <th>ดู</th>
                              <th>สร้าง</th>
                              <th>แก้ไข</th>
                              <th>ลบ</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">จัดการแพ็คเกจ</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">จัดการบริการ</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group2"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group2"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group2"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group2"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">Dashboard</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group3"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group3"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group3"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group3"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group3"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">จัดการสินค้า</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group4"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group4"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group4"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group4"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group4"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">ทรัพทย์สิน</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group5"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group5"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group5"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group5"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group5"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">จัดการสาขา</td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group6"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group6"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group6"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group6"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group6"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">Stock</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group7"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group7"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group7"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group7"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    ame="group7"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">พนักงาน</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group8"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group8"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group8"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group8"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group8"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">User</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group9"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group9"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group9"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group9"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group9"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                            {['checkbox'].map((type) => (
                              <tr
                                key={`inline-${type}`}
                                className="t-tr-setting"
                              >
                                <td className="text-left">รายชื่อลูกค้า</td>

                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group10"
                                    type={type}
                                    id={`inline-${type}-1`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group10"
                                    type={type}
                                    id={`inline-${type}-2`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group10"
                                    type={type}
                                    id={`inline-${type}-3`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group10"
                                    type={type}
                                    id={`inline-${type}-4`}
                                  />
                                </td>
                                <td>
                                  <Form.Check
                                    inline
                                    label=""
                                    name="group10"
                                    type={type}
                                    id={`inline-${type}-5`}
                                  />
                                </td>
                                <td></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </Row>
                    </Row>
                  </div>

                  <Row className="justify-content-center mt-3 mb-2">
                    <Col md={3} lg={2}>
                      <Button type="button" className="button">
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
