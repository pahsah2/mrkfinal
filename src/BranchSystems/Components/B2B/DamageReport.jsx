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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { Table, Label, Input, FormGroup } from 'reactstrap';
import Select, { components } from 'react-select';

import Search from '../../assets/icon/iconfinder-search.png';
export default function DamageReport() {
  const [startDate, setStartDate] = useState('');
  const [damagereport, setDamagereport] = useState('');
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const job_number = [{ value: '0123', label: '02134' }];
  return (
    <>
      <Container fluid style={{ padding: 0 }} className="damage-report-b2b">
        <Row className="section1">
          <Col lg={6} className="justify-content-start">
            <Form>
              <Row>
                <Col lg={5} className="d-flex justify-content-start">
                  <Select
                    className="text-left select-style"
                    aria-label="Default select example"
                    placeholder="เลขที่ Job"
                    options={job_number}
                  />
                </Col>

                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input-style form-control"
                    placeholder="วันที่"
                  />
                </Col>
              </Row>
              <Row className="mt-4">
                <Col lg={12} className="d-flex justify-content-start">
                  <Form.Control
                    as="textarea"
                    placeholder="ความเสียหาย"
                    className="text-left search-btn-top input-area"
                  />
                </Col>
              </Row>
              <Row className="mt-3" style={{ padding: 0 }}>
                <Col lg={5}>
                  <Form.Control
                    type="text"
                    name="damagereport"
                    value={damagereport}
                    onChange={(e) => setDamagereport(e.target.value)}
                    placeholder="มูลค่าความเสียหาย"
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col lg={2} className="col-hour">
                  {' '}
                  <Form.Control
                    type="text"
                    name="hour"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    placeholder="ชั่วโมง"
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col lg={2} className="col-minute">
                  {' '}
                  <Form.Control
                    type="text"
                    name="minute"
                    value={minute}
                    onChange={(e) => setMinute(e.target.value)}
                    placeholder="นาที"
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col className="d-flex justify-content-start">
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
                <Col lg={6} className="d-flex justify-content-center">
                  <Row>
                    <p className="title">มูลค่าความเสียหาย</p>
                    <p className="point">2,700</p>
                    <p className="unit">บาท</p>
                  </Row>
                </Col>
                <Col lg={6} className="d-flex justify-content-center">
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
            <Row>
              <Col
                lg={2}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="input-style form-control"
                />
              </Col>
              <Col lg={2} className="d-flex justify-content-start">
                <Button type="button" className="increase search-button">
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
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </Col>
        </Row>
      </Container>
    </>
  );
}
