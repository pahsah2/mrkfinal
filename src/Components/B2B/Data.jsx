import React, { useState } from 'react';
import '../../assets/scss/style.scss';
import Select, { components } from 'react-select';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Increase from '../../assets/icon/increase.png';
import Save from '../../assets/icon/save.png';
import Out from '../../assets/icon/out.png';
export default function Data() {
  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [TaxpayerIdentificationNo, setTaxpayerIdentificationNo] = useState('');
  const [taxinvoice, setTaxinvoice] = useState('');
  const [province, setProvince] = useState('');
  const [district, setDistrict] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [startDate, setStartDate] = useState('');
  const [nameContract, setNameContract] = useState('');
  const [phone, setPhone] = useState('');
  const [bank, setBank] = useState('');
  const [nameaccount, setNameaccount] = useState('');
  const [noaccount, setNoAccount] = useState('');
  const [comment, setComment] = useState('');

  const submithandler = () => {};
  const provinces = [
    { value: 'chaingmai', label: 'เชียงใหม่' },
    { value: 'chaingrai', label: 'เชียงราย' },
    { value: 'prae', label: 'แพร่' },
    { value: 'ayutthaya', label: 'อยุธยา' },
  ];
  const districts = [{ value: 'mouang', label: 'เมือง' }];

  const account_number = [
    { value: 'xxxxx-xx-xx-x-x', label: 'x-xxxx-x-x-x-x' },
  ];
  return (
    <>
      <Container
        fluid
        style={{ paddingTop: 0, margin: 0 }}
        className="data-b2b"
      >
        <Form onSubmit={submithandler}>
          <Row>
            <Col
              lg={4}
              className="d-flex justify-content-center"
              style={{ padding: 0 }}
            >
              <Col
                lg={3}
                className="d-flex justify-content-start"
                style={{ paddingLeft: 0 }}
              >
                <Form.Label>ชื่อองค์กร</Form.Label>
              </Col>
              <Form.Control
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col lg={3}>
                <Form.Label>สาขา</Form.Label>
              </Col>
              <Form.Control
                type="text"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
            <Col
              lg={5}
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <Col lg={5}>
                <Form.Label>เลขประจำตัวผู้เสียภาษี</Form.Label>
              </Col>
              <Form.Control
                type="text"
                name="TaxpayerIdentificationNo"
                value={TaxpayerIdentificationNo}
                onChange={(e) => setTaxpayerIdentificationNo(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={2}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>ที่อยู่ออกใบกำกับภาษี</Form.Label>
              </Col>
              <Form.Control
                type="text"
                name="taxinvoice"
                value={taxinvoice}
                onChange={(e) => setTaxinvoice(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                จังหวัด
              </Col>
              <Select
                className="text-left select-style"
                aria-label="Default select example"
                placeholder="ยี่ห้อรถ"
                options={provinces}
              />
            </Col>
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={3}
                className="d-flex justify-content-center"
                style={{ padding: 0 }}
              >
                อำเภอ
              </Col>
              <Select
                className="text-left select-style"
                aria-label="Default select example"
                placeholder="อำเภอ"
                options={districts}
              />
            </Col>
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>รหัสไปรษณีย์</Form.Label>
              </Col>
              <Form.Control
                type="text"
                name="postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col
              lg={6}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={2}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                E-mail
              </Col>
              <Form.Control
                type="text"
                name="postcode"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="text-left search-btn-top"
              ></Form.Control>
            </Col>
            <Col
              lg={4}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={4}
                className="d-flex justify-content-center"
                style={{ padding: 0 }}
              >
                วันเริ่มติดต่อ
              </Col>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input-style form-control"
              />
            </Col>
          </Row>
          <Row className=" increase-contract">
            <Col lg={10} className="set-increase-contract">
              <Row>
                <Col
                  lg={4}
                  className="d-flex justify-content-start mb-3"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={3}
                    className="d-flex justify-content-start mr-3"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="nameContract"
                    value={nameContract}
                    onChange={(e) => setNameContract(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center "
                    style={{ padding: 0 }}
                  >
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col lg={4}></Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={3}
                    className="d-flex justify-content-start mr-3"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ธนาคาร</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="bank"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center "
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ชื่อบัญชี</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="nameaccount"
                    value={nameaccount}
                    onChange={(e) => setNameaccount(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center"
                    style={{ padding: 0 }}
                  >
                    เลขที่บัญชี
                  </Col>
                  <Select
                    className="text-left select-style"
                    aria-label="Default select example"
                    placeholder=""
                    options={account_number}
                  />
                </Col>
                <Col
                  lg={1}
                  className="d-flex justify-content-center"
                  style={{ padding: 0 }}
                >
                  <Button className="delete-button"></Button>
                </Col>
              </Row>
            </Col>
            <Col lg={10} className="set-increase-contract">
              <Row>
                <Col
                  lg={4}
                  className="d-flex justify-content-start mb-3"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={3}
                    className="d-flex justify-content-start mr-3"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="nameContract"
                    value={nameContract}
                    onChange={(e) => setNameContract(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center "
                    style={{ padding: 0 }}
                  >
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col lg={4}></Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={3}
                    className="d-flex justify-content-start mr-3"
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ธนาคาร</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="bank"
                    value={bank}
                    onChange={(e) => setBank(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={4}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center "
                    style={{ padding: 0 }}
                  >
                    <Form.Label>ชื่อบัญชี</Form.Label>
                  </Col>
                  <Form.Control
                    type="text"
                    name="nameaccount"
                    value={nameaccount}
                    onChange={(e) => setNameaccount(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
                <Col
                  lg={3}
                  className="d-flex justify-content-start"
                  style={{ padding: 0 }}
                >
                  <Col
                    lg={4}
                    className="d-flex justify-content-center"
                    style={{ padding: 0 }}
                  >
                    เลขที่บัญชี
                  </Col>
                  <Select
                    className="text-left select-style"
                    aria-label="Default select example"
                    placeholder=""
                    options={account_number}
                  />
                </Col>
                <Col
                  lg={1}
                  className="d-flex justify-content-center"
                  style={{ padding: 0 }}
                >
                  <Button className="delete-button"></Button>
                </Col>
              </Row>
            </Col>

            <Col
              lg={2}
              className="d-flex justify-content-center set-increase"
              style={{ padding: 0 }}
            >
              <Button type="button" className="increase">
                <img src={Increase} />
                <span>เพิ่มผู้ติดต่อ</span>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={1}
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Label class="align-top">ชื่อผู้ติดต่อ</Form.Label>
              </Col>
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                className="text-left search-btn-top input-area"
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-2">
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Button type="button" className="increase">
                <img src={Save} />
                <span>บันทึก</span>
              </Button>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
              <Button type="button" className="increase">
                <img src={Out} />
                <span>ออก</span>
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
