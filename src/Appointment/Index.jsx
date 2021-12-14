import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Status from '../assets/icon/ststus-appointment.png';

export default function Index() {
  const [notification, setNotification] = useState([{ value: '', label: '' }]);
  const [notificationType, setNotificationType] = useState([
    { value: '', label: '' },
  ]);
  const [appointment, setAppointment] = useState({
    Order: [
      {
        id: 2021010001,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'ทรีตเมนต์ 3/5',
        date: '03/12/2021',
        time: '10:00',
        status: 'ใกล้ถึงวันนัด',
      },
      {
        id: 2021010002,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'พ่นเคลือบ 1/1',
        date: '03/12/2021',
        time: '10:00',
        status: 'ครบกำหนด',
      },
      {
        id: 2021010003,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'ทรีตเมนต์ 3/5',
        date: '03/12/2021',
        time: '10:00',
        status: 'เลยกำหนด',
      },
      {
        id: 2021010004,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'พ่นเคลือบ 1/1',
        date: '03/12/2021',
        time: '10:00',
        status: 'ใกล้ถึงวันนัด',
      },
      {
        id: 2021010005,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'พ่นเคลือบ 1/1',
        date: '03/12/2021',
        time: '10:00',
        status: 'ครบกำหนด',
      },
      {
        id: 2021010006,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'พ่นเคลือบ 1/1',
        date: '03/12/2021',
        time: '10:00',
        status: 'ใกล้ถึงวันนัด',
      },
    ],
  });

  const history = useHistory();
  const [key, setKey] = useState('all');

  function close() {
    let path = `/`;
    history.push(path);
  }
  const optionNotification = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: 'today', label: 'วันนี้' },
    { value: 'late', label: 'เลยกำหนด' },
  ];
  const optionNotificationType = [
    { value: 'ทรีตเมนต์', label: 'ทรีตเมนต์' },
    { value: 'เช็คการเซ็ตตัว', label: 'เช็คการเซ็ตตัว' },
    { value: 'พ่นเคลือบ', label: 'พ่นเคลือบ' },
    { value: 'เก็บงาน', label: 'เก็บงาน' },
  ];
  function SetNotification(data) {
    setNotification([{ value: data.value, label: data.value }]);
  }
  function SetNotificationType(data) {
    setNotificationType([{ value: data.value, label: data.value }]);
  }

  useEffect(() => {
    // Update the document title using the browser API
    console.group('notification', notification);
  });

  const [showNote, setShowNote] = useState(false);

  const handleCloseNote = () => setShowNote(false);
  const handleShowNote = () => setShowNote(true);

  const [showPostpone, setShowPostpone] = useState(false);

  const handleClosePostpone = () => setShowPostpone(false);
  const handleShowPostpone = () => setShowPostpone(true);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <NavbarTop />
      <Container
        fluid
        className="package-container Service Stock Job Appointment"
      >
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  การนัดหมาย
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
                  <img className="logo pr-2" src={Service} />
                  การนัดหมาย
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-between ">
                  <Col lg={8}>
                    <Row>
                      <Col lg={5} className="mb-2">
                        <Select
                          options={optionNotification}
                          placeholder="การแจ้งเตือน"
                          isClearable={false}
                          isSearchable={false}
                          onChange={(data) => SetNotification(data)}
                          className="select-list"
                        />
                      </Col>
                      <Col lg={5} className=" mb-2">
                        <Select
                          options={optionNotificationType}
                          placeholder="ประเภทการแจ้งเตือน"
                          isClearable={false}
                          isSearchable={false}
                          onChange={(data) => SetNotificationType(data)}
                          className="select-list"
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6} lg={3} className="mt-4 mb-4 text-left">
                        <Form.Label className="font-weight-bold">
                          คิวนัดวันนี้ 5 ราย
                        </Form.Label>
                      </Col>
                      <Col xs={6} lg={3} className="mt-4 mb-4 text-left">
                        <Form.Label className="font-weight-bold">
                          มาตามนัด 5 ราย
                        </Form.Label>
                      </Col>
                      <Col className="mt-4 mb-4 text-left">
                        <Form.Label className="font-weight-bold">
                          นัดที่ต้องติดตาม 5 ราย
                        </Form.Label>
                      </Col>
                      <Col className="mt-4 mb-4 text-left">
                        <Form.Label className="font-weight-bold">
                          ติดตามแล้ว 5 ราย
                        </Form.Label>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row className="justify-content-end set-row-export">
                      <Col xs={5} lg={9}>
                        <Button type="button" className="button">
                          Export
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 justify-content-center mt-3 set-height-aappointment">
                  {appointment.Order.map((item, index) => {
                    return (
                      <LinkContainer to={`/appointment/${item.id}`}>
                        <Col xs={12} key={item.id} className="mb-3">
                          <div className="body-text-appointment">
                            <Row className="align-items-center">
                              <Col xs={12} lg={5} className="text-left pl-5">
                                <p className="m-0">
                                  <b>Order {item.id}</b> สาขา{item.branch}
                                </p>
                                <p className="m-0">
                                  {item.name} ({item.phone})
                                </p>
                                <p className="m-0">
                                  {item.work} ({item.date}) เวลา {item.time} น.
                                </p>
                              </Col>
                              <Col xs={12} lg={3} className="mt-2 mb-2">
                                <Row>
                                  <Col xs={5} lg={7} className="pl-5">
                                    <Form.Label className="font-weight-bold">
                                      {item.status}
                                    </Form.Label>
                                  </Col>
                                  <Col xs={3} lg={5}>
                                    <a
                                      href="#"
                                      className="link link-note"
                                      onClick={handleShowNote}
                                    >
                                      หมายเหตุุ
                                    </a>
                                  </Col>
                                </Row>
                              </Col>
                              <Col xs={12} lg={4}>
                                <Row className="justify-content-center">
                                  <Col xs={4}>
                                    <Button
                                      type="button"
                                      className="button"
                                      onClick={handleShowPostpone}
                                    >
                                      เลื่อนนัด
                                    </Button>
                                  </Col>
                                  <Col xs={4}>
                                    <Button type="button" className="button">
                                      เลิกแจ้งเตือน
                                    </Button>
                                  </Col>
                                  <Col xs={3} className="text-left">
                                    <Button
                                      type="button"
                                      className="button-image"
                                    >
                                      <img src={Status} />
                                    </Button>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </LinkContainer>
                    );
                  })}
                </Row>
                <Row className="justify-content-center mt-4 mb-4">
                  <Col className="d-flex justify-content-center set-paginate">
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

      <Modal
        className="modal-style"
        centered
        show={showNote}
        onHide={setShowNote}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>หมายเหตุ</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleCloseNote}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row
              className="justify-content-center  align-items-center"
              style={{ height: '300px' }}
            >
              <Col xs={10} lg={10} className="mt-2 ">
                <Row className="align-items-center mt-2">
                  <Form.Control
                    as="textarea"
                    rows={8}
                    className="form-control-area"
                  />
                </Row>
              </Col>

              <Col xs={12} lg={7} className="">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      <img src={Save} /> &nbsp; บันทึก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>

      <Modal
        className="modal-style"
        centered
        show={showPostpone}
        onHide={setShowPostpone}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>เลื่อนนัด</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClosePostpone}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row
              className="justify-content-center  align-items-center"
              style={{ height: '400px' }}
            >
              <Col xs={12} lg={10} className="mt-2 ">
                <Row className="align-items-center mt-2">
                  <Col xs={12} className="text-left">
                    <Row>
                      <Col xs={6} lg={4}>
                        <Form.Label className="font-weight-bold pl-3">
                          วันนัดปัจจุบัน
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Label>16/06/2564</Form.Label>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={12} className="text-left mt-3 mb-3">
                    <Row className="align-items-center">
                      <Col xs={6} lg={4}>
                        <Form.Label className="font-weight-bold pl-3">
                          วันที่เลื่อนนัด
                        </Form.Label>
                      </Col>
                      <Col xs={6} lg={6}>
                        <DatePicker
                          onChange={onChange}
                          placeholder=""
                          suffixIcon={<img src={Calendar} />}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={12} className="text-left">
                    <Form.Label className="font-weight-bold pl-3">
                      หมายเหตุ
                    </Form.Label>
                  </Col>
                  <Col xs={12}>
                    <Form.Control
                      as="textarea"
                      rows={8}
                      className="form-control-area"
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12} lg={7} className="">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      <img src={Save} /> &nbsp; บันทึก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
