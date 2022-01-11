import React, { useState, useEffect } from 'react';
import { Dropdown } from 'semantic-ui-react';
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

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuStock from '../Components/layout/MenuStock';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Note from '../assets/icon/address_book.png';
import Add from '../assets/icon/add_menu.png';
import { Switch } from 'antd';
import Save from '../assets/icon/save.png';
import Delete from '../assets/icon/new-re-turn.png';
import Out from '../assets/icon/out.png';
import 'semantic-ui-css/semantic.min.css';
import ReactTagInput from '@pathofdev/react-tag-input';
import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

export default function EditBank() {
  const [statusService, setStatusService] = useState(false);
  const history = useHistory();
  const [showCutStock, setShowCutStock] = useState(false);
  const [admit, setAdmit] = useState(true);
  const [takeOut, setTakeOut] = useState(true);
  const [count, setCount] = useState([{ value: '', label: '' }]);

  const [nameBank, setNameBank] = useState({ value: '', label: '' });
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };

  function close() {
    let path = `/`;
    history.push(path);
  }
  const optionsBank = [
    { value: 'ธนาคารกสิกรไทย', label: 'ธนาคารกสิกรไทย' },
    { value: 'ธนาคารกรุงไทย', label: 'ธนาคารกรุงไทย' },
    { value: 'ธนาคารกรุงเทพ', label: 'ธนาคารกรุงเทพ' },
  ];

  function SetฺBank(data) {
    setNameBank({ value: data.value, label: data.value });
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
                  <b>ตั้งค่า &gt; เพิ่ม/แก้ไขธนาคาร</b>
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
                  <b>ตั้งค่า &gt; เพิ่ม/แก้ไขธนาคาร</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form>
                  <div className="set-height">
                    <Row className="g-0 justify-content-start">
                      <Col lg={6}>
                        <Row className="mt-4 mb-4">
                          <Col lg={12} className="d-flex">
                            <Form.Label className="pl-3">ชื่อธนาคาร</Form.Label>
                          </Col>
                          <Col lg={12}>
                            <Select
                              defaultValue={[optionsBank[0]]}
                              isMulti
                              placeholder=""
                              options={optionsBank}
                              onChange={(data) => SetฺBank(data)}
                              className="basic-multi-select"
                              classNamePrefix="select"
                            />
                          </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                          <Col lg={12} className="d-flex">
                            <Form.Label className="pl-3">สาขาธนาคาร</Form.Label>
                          </Col>
                          <Col lg={12}>
                            <Form.Control></Form.Control>
                          </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                          <Col lg={12} className="d-flex">
                            <Form.Label className="pl-3">ชื่อบัญชี</Form.Label>
                          </Col>
                          <Col lg={12}>
                            <Form.Control></Form.Control>
                          </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                          <Col lg={12} className="d-flex">
                            <Form.Label className="pl-3">เลขบัญชี</Form.Label>
                          </Col>
                          <Col lg={12}>
                            <Form.Control></Form.Control>
                          </Col>
                        </Row>
                        <Row className="mt-4 mb-4">
                          <Col lg={12} className="d-flex">
                            <Row>
                              <Col
                                lg={6}
                                className="pl-4 d-flex align-items-center"
                              >
                                {statusService ? (
                                  <span>เปิดใช้งาน</span>
                                ) : (
                                  <span>ปิดใช้งาน</span>
                                )}
                              </Col>
                              <Col lg={4}>
                                <Switch onClick={statusServiceToggler} />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                  <Row className="g-0 justify-content-between">
                    <Col lg={6} className="mt-2 mb-2">
                      <Row className="justify-content-start">
                        <Col xs={6} lg={5} xl={4}>
                          <Button type="button" className="button">
                            <img src={Save} /> &nbsp; บันทึก
                          </Button>
                        </Col>
                        <Col xs={6} lg={5} xl={4}>
                          <Button type="button" className="button">
                            <img src={Delete} /> &nbsp; ลบ
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6} className="mt-2 mb-2">
                      <Row className="justify-content-end">
                        <Col lg={5} xl={4}>
                          <Button type="button" className="button">
                            <img src={Out} /> &nbsp; ออก
                          </Button>
                        </Col>
                      </Row>
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
