import React, { useState } from 'react';
import '../../assets/scss/style.scss';
import Select, { components } from 'react-select';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import Increase from '../../assets/icon/add_menu.png';
import Save from '../../assets/icon/save.png';
import Out from '../../assets/icon/out.png';
import { Formik, FieldArray, Field } from 'formik';
import Delete from '../../assets/icon/delete.png';
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
  const initialValues = {};

  return (
    <>
      <Container
        fluid
        style={{ paddingTop: 0, margin: 0 }}
        className="data-b2b"
      >
        <Form onSubmit={submithandler}>
          <Row>
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col xs={12} lg={3} className="text-left ">
                  <Form.Label>ชื่อองค์กร</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col xs={12} lg={3} className="text-left ">
                  <Form.Label>สาขา</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="branch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col xs={12} lg={5} className="text-left ">
                  <Form.Label>เลขประจำตัวผู้เสียภาษี</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="TaxpayerIdentificationNo"
                    value={TaxpayerIdentificationNo}
                    onChange={(e) =>
                      setTaxpayerIdentificationNo(e.target.value)
                    }
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="">
            <Col className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col xs={12} lg={2} className="text-left ">
                  <Form.Label>ที่อยู่ออกใบกำกับภาษี</Form.Label>
                </Col>
                <Col lg={5}>
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
            </Col>
          </Row>
          <Row className="">
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label>จังหวัด</Form.Label>
                </Col>
                <Col lg={8}>
                  <Select
                    options={provinces}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    // onChange={(data) => SetNumberPerPage(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={3} className="text-left">
                  <Form.Label>อำเภอ</Form.Label>
                </Col>
                <Col lg={8}>
                  <Select
                    options={districts}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    // onChange={(data) => SetNumberPerPage(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label>รหัสไปรษณีย์</Form.Label>
                </Col>
                <Col>
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
            </Col>
          </Row>
          <Row className="">
            <Col lg={6} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={2} className="text-left">
                  <Form.Label>E-mail</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    name="postcode"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder=""
                    className="text-left search-btn-top"
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label> วันเริ่มติดต่อ </Form.Label>
                </Col>
                <Col>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="input-style form-control"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className=" increase-contract">
            <Formik
              initialValues={{ rows: [initialValues] }}
              onSubmit={(values) => {
                // transform the rows to add the condition key for each row object
                const output = values.rows.map((row, index) => {
                  if (index === 0) {
                    return { ...row, condition: 'if' };
                  } else {
                    return { ...row, condition: 'and' };
                  }
                });

                console.log(output);
              }}
            >
              {({ handleSubmit, values, setFieldValue }) => (
                <FieldArray
                  name="rows"
                  render={({ push, remove }) => {
                    return (
                      values.rows.length > 0 &&
                      values.rows.map((row, index) => {
                        return (
                          <Col xs={12}>
                            <Row className="align-items-end">
                              <Col lg={10} className="set-increase-contract">
                                <Row>
                                  <Col lg={4} className="mt mb-3">
                                    <Row className="align-items-center">
                                      <Col lg={3} className="text-left">
                                        <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          type="text"
                                          name="nameContract"
                                          value={nameContract}
                                          onChange={(e) =>
                                            setNameContract(e.target.value)
                                          }
                                          placeholder=""
                                          className="text-left search-btn-top"
                                        ></Form.Control>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={4} className="">
                                    <Row className="align-items-center">
                                      <Col lg={4} className="text-left">
                                        <Form.Label>เบอร์โทรศัพท์</Form.Label>
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          type="text"
                                          name="phone"
                                          value={phone}
                                          onChange={(e) =>
                                            setPhone(e.target.value)
                                          }
                                          placeholder=""
                                          className="text-left search-btn-top"
                                        ></Form.Control>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={4}></Col>
                                  <Col lg={4} className="">
                                    <Row className="align-items-center">
                                      <Col lg={3} className="text-left">
                                        <Form.Label>ธนาคาร</Form.Label>
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          type="text"
                                          name="bank"
                                          value={bank}
                                          onChange={(e) =>
                                            setBank(e.target.value)
                                          }
                                          placeholder=""
                                          className="text-left search-btn-top"
                                        ></Form.Control>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={4} className="">
                                    <Row className="align-items-center">
                                      <Col lg={4} className="text-left">
                                        <Form.Label>ชื่อบัญชี</Form.Label>
                                      </Col>
                                      <Col>
                                        <Form.Control
                                          type="text"
                                          name="nameaccount"
                                          value={nameaccount}
                                          onChange={(e) =>
                                            setNameaccount(e.target.value)
                                          }
                                          placeholder=""
                                          className="text-left search-btn-top"
                                        ></Form.Control>
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col lg={3} className="">
                                    <Row className="align-items-center">
                                      <Col lg={4} className="text-left">
                                        <Form.Label>เลขที่บัญชี</Form.Label>
                                      </Col>
                                      <Col>
                                        <Select
                                          options={account_number}
                                          placeholder=""
                                          isClearable={false}
                                          isSearchable={false}
                                          // onChange={(data) => SetNumberPerPage(data)}
                                          className="select-list"
                                        />
                                      </Col>
                                    </Row>
                                  </Col>
                                  <Col
                                    lg={2}
                                    xl={1}
                                    className="d-flex align-items-center justify-content-center mt-3 mb-3"
                                  >
                                    {values.rows.length !== 1 && (
                                      <Button
                                        className="button-image"
                                        onClick={() => remove(index)}
                                      >
                                        <img src={Delete} />
                                      </Button>
                                    )}
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={2} xl={2}>
                                <Row className="justify-content-center align-items-end">
                                  {values.rows.length - 1 === index && (
                                    <Button
                                      className="button"
                                      onClick={() => push(initialValues)}
                                    >
                                      <img src={Increase} /> &nbsp; เพิ่ม
                                    </Button>
                                  )}
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        );
                      })
                    );
                  }}
                />
              )}
            </Formik>
          </Row>
          <Row>
            <Col className="mt-3 mb-3">
              <Row>
                <Col lg={1} className="text-left">
                  <Form.Label class="" style={{ 'font-size': '16px' }}>
                    หมายเหตุ
                  </Form.Label>
                </Col>
                <Col lg={8}>
                  <Form.Control as="textarea" rows={5} className="text-area" />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-3 mb-2">
            <Col className="d-flex justify-content-start">
              <Button type="button" className="increase">
                <img src={Save} />
                <span>บันทึก</span>
              </Button>
            </Col>
            <Col className="d-flex justify-content-end">
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
