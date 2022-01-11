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
import TabsIconSetBank from '../Components/layout/TabsIconSetBank';
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
import Search from '../assets/icon/search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
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
  const [bank, setBank] = useState([
    { value: 'กสิกร', label: 'กสิกร' },
    { value: 'กรุงไทย', label: 'กรุงไทย' },
  ]);
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
                  <b> ตั้งค่า &gt; ธนาคาร</b>
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
                  <img className="logo pr-2" src={Setting} />
                  <b> ตั้งค่า &gt; ธนาคาร</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIconSetBank />
                </Row>

                <Row className="g-0 justify-content-center">
                  <Col xs={12}>
                    <Row>
                      <Col xs={12} md={4} lg={4} className="mt-3">
                        <Form.Control
                          placeholder="ค้นหาชื่อบัญชี,เลขบัญชี"
                          className="input-search"
                        ></Form.Control>
                      </Col>
                      <Col xs={12} md={4} lg={3} className="mt-3">
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder="ธนาคาร"
                          options={bank}
                        />
                      </Col>
                      <Col md={3} lg={3} xl={2} className="mt-3">
                        <Button type="button" className="button">
                          <img src={Search} /> &nbsp; ค้นหา
                        </Button>
                      </Col>
                      <Col
                        xs={12}
                        md={9}
                        lg={3}
                        className="mt-3 set-hidden-add"
                      >
                        <Button type="" className="button">
                          <img src={Add} />
                          &nbsp; เพิ่มรายการ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="set-height">
                  <Row className="g-0   mt-3 justify-content-center">
                    <Row className=" mt-3">
                      <table className="table table-responsive ">
                        <thead>
                          <tr className="t-header-setting">
                            <th className="text-left">ธนาคาร</th>
                            <th className="text-left">ชื่อบัญชี</th>
                            <th className="text-left">สาขาธนาคาร</th>
                            <th>เลขบัญชี</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="t-tr-setting">
                            <td className="text-left">ธนาคารกสิกรไทย</td>
                            <td className="text-left">
                              <Col className="text-left" style={{ padding: 0 }}>
                                ธณวรรณ
                              </Col>
                              <Col className="text-left" style={{ padding: 0 }}>
                                ธณวรรณ
                              </Col>
                            </td>
                            <td className="text-left">
                              <Col className="text-left" style={{ padding: 0 }}>
                                เซ็นทรัลแอพอร์ท เชียงใหม่
                              </Col>
                              <Col className="text-left" style={{ padding: 0 }}>
                                เซ็นทรัลแอพอร์ท เชียงใหม่
                              </Col>
                            </td>
                            <td>
                              <Col>0123456789</Col>
                              <Col>9876543210</Col>
                            </td>
                            <td>
                              <Switch onClick={statusServiceToggler} />
                              {/* {statusService ? (
                                <span>well</span>
                              ) : (
                                <span>Bad</span>
                              )} */}
                            </td>
                            <td className="text-left">
                              <Button type="" className="button-image">
                                <img src={Write} />
                              </Button>
                            </td>
                          </tr>
                          <tr className="t-tr-setting">
                            <td className="text-left">ธนาคารไทยพาณิชย์</td>
                            <td className="text-left">วรเดช</td>
                            <td className="text-left">ช้างคลาน</td>
                            <td>3216549870</td>
                            <td>
                              <Switch onClick={statusServiceToggler} />
                              {/* {statusService ? (
                                <span>well</span>
                              ) : (
                                <span>Bad</span>
                              )} */}
                            </td>
                            <td className="text-left">
                              <Button type="" className="button-image">
                                <img src={Write} />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Row>
                  </Row>
                </div>
                <Row className="g-0 mt-3 mb-3">
                  <Col md={6} lg={4} className=" set-page">
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>แสดง</p>
                      </Col>
                      <Col md={6} lg={6}>
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder=""
                          options={page}
                        />
                      </Col>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>รายการ</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="d-flex justify-content-end set-paginate">
                    <div className="box-paginate">
                      <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>

                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item active>{3}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Next />
                      </Pagination>
                    </div>
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
