import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  MenuItem,
  Pagination,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

import { Table, Label, Input, FormGroup } from 'reactstrap';
import Select, { components } from 'react-select';
import { DatePicker, Space } from 'antd';

import Search from '../../assets/icon/iconfinder-search.png';
import Calendar from '../../assets/icon/calendar-bg.png';

export default function DamageReport() {
  const [startDate, setStartDate] = useState('');
  const [damagereport, setDamagereport] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const job_number = [{ value: '0123', label: '02134' }];
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <Container fluid style={{ padding: 0 }} className="damage-report-b2b">
        <Row className="section1">
          <Col lg={6} className="justify-content-start">
            <Form>
              <Row className="align-items-center">
                <Col xs={12} lg={6} className="justify-content-start mt-2 mb-2">
                  <Select
                    className="text-left select-style"
                    aria-label="Default select example"
                    placeholder="เลขที่ Job"
                    options={job_number}
                  />
                </Col>

                <Col lg={6} className=" justify-content-start mt-2 ">
                  <DatePicker
                    onChange={onChange}
                    placeholder=""
                    suffixIcon={<img src={Calendar} />}
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={12} className="d-flex justify-content-start">
                  <Form.Control
                    as="textarea"
                    placeholder="ความเสียหาย"
                    className="text-area"
                    rows={8}
                  />
                </Col>
              </Row>
              <Row className="mt-3">
                <Col xs={6} sm={6} md={6} lg={5}>
                  <Form.Control
                    type="text"
                    name="damagereport"
                    value={damagereport}
                    onChange={(e) => setDamagereport(e.target.value)}
                    placeholder="มูลค่าความเสียหาย"
                    className="input-damage "
                  ></Form.Control>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} className="col-hour">
                  <Form.Control
                    type="text"
                    name="hour"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    placeholder="ชั่วโมง"
                    className="input-damage "
                  ></Form.Control>
                </Col>
                <Col xs={3} sm={3} md={3} lg={3} className="col-minute">
                  <Form.Control
                    type="text"
                    name="minute"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                    placeholder="นาที"
                    className="input-damage "
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="d-flex justify-content-start set-button-position">
                  <Button type="button" className="increase">
                    <span> เพิ่ม </span>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
          <Col lg={6} className="d-flex justify-content-end">
            <div className="view-damage-hour">
              <Row>
                <Col xs={6} lg={6} className="d-flex justify-content-center">
                  <Row>
                    <p className="title">มูลค่าความเสียหาย</p>
                    <p className="point">2,700</p>
                    <p className="unit">บาท</p>
                  </Row>
                </Col>
                <Col xs={6} lg={6} className="d-flex justify-content-center">
                  <Row>
                    <p className="title">ระยะเวลา </p>
                    <p className="point">4.5</p>
                    <p className="unit">ชั่วโมง</p>
                  </Row>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="">
          <Col lg={12}>
            <Row className="align-items-center">
              <Col xs={6} lg={3} className="justify-content-start">
                <DatePicker
                  onChange={onChange}
                  placeholder=""
                  suffixIcon={<img src={Calendar} />}
                />
              </Col>
              <Col xs={6} lg={3} className="justify-content-start ">
                <Button type="button" className="button m-0">
                  <img src={Search} />
                  <span> ค้นหา </span>
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={12}>
            <Table responsive className="table-custom text-nowrap mt-4">
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>เลขที่ Job</th>
                  <th>รายละเอียด</th>
                  <th>มูลค่าความเสียหาย</th>
                  <th>ระยะเวลา(ชั่วโมง)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>20/10/2021</td>
                  <td>MRK00001</td>
                  <td>ฟิล์มยับ</td>
                  <td>1,200</td>
                  <td>2</td>
                  <td>คืนค่า</td>
                </tr>
                <tr>
                  <td>20/10/2021</td>
                  <td>MRK00001</td>
                  <td>ฟิล์มยับ</td>
                  <td>1,200</td>
                  <td>2</td>
                  <td>คืนค่า</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col
            className="d-flex justify-content-center mt-4 mb-2"
            style={{ padding: 0 }}
          >
            <div className="box-paginate">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item active>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
                <Pagination.Item>{6}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
