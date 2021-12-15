import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIcon from '../Components/layout/TabsIcon';
import Service from '../assets/icon/management.png';
import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import Print from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Money from '../assets/icon/money-bill.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

export default function Index() {
  const [tax, setTax] = useState([{ value: '', label: '' }]);
  const history = useHistory();

  function close() {
    let path = `/`;
    history.push(path);
  }
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const optionTax = [
    { value: '1', label: '1%' },
    { value: '2', label: '2%' },
    { value: '3', label: '3%' },
    { value: '4', label: '4%' },
    { value: '5', label: '5%' },
    { value: '6', label: '6%' },
    { value: '7', label: '7%' },
    { value: '8', label: '8%' },

    { value: '9', label: '9%' },
    { value: '10', label: '10%' },
  ];

  function SetTax(data) {
    setTax({ value: data.value, label: data.value });
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Bill Report ">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  รายงาน
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
                  รายงาน
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 set-body-height">
                  <Col xs={12} className="">
                    <div className="bg-white mt-3 mb-3">
                      <Col className="col-title text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          รายงานรวมทุกสาขา
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          สรุปยอดขายรายวัน
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          รายรับตามช่วงเวลา
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          แพ็คเกจยอดนิยม
                        </Form.Label>
                      </Col>
                    </div>
                  </Col>
                  <Col xs={12} className="">
                    <div className="bg-white mt-3 mb-3">
                      <Col className="col-title text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                        รายงานแยกตามสาขา
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          สรุปยอดขายรายวัน
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          รายรับตามช่วงเวลา
                        </Form.Label>
                      </Col>
                      <Col className="col-text text-left d-flex align-items-center">
                        <Form.Label className="font-weight-bold">
                          แพ็คเกจยอดนิยม
                        </Form.Label>
                      </Col>
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
