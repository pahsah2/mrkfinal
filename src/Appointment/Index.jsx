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
                <Row className="g-0 justify-content-center mt-3">
                  <Col className="">
                    <Row>
                      <Col></Col>
                      <Col></Col>
                      <Col>
                        <Row>
                          <Col>
                            <Button type="button" className="button">
                              เลื่อนนัด
                            </Button>
                          </Col>
                          <Col>
                            <Button type="button" className="button">
                              เลิกแจ้งเตือน
                            </Button>
                          </Col>
                          <Col>
                          <img src={} />
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
