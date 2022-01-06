import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Grid } from 'semantic-ui-react';

import Calendar from '../../assets/icon/calendar-bg.png';
import { DatePicker, Space } from 'antd';
import Select, { components } from 'react-select';
import { Formik, FieldArray, Field } from 'formik';
import Delete from '../../assets/icon/delete.png';
import increate from '../../assets/icon/add-staff.png';

export default function CompanyB2BJobAssign() {
  const onChange = () => {};
  const [hour, setHour] = useState([{ value: '', label: '' }]);
  const [minute, setMinute] = useState([{ value: '', label: '' }]);
  const [work, setWork] = useState([{ value: '', label: '' }]);
  const [people, setPeople] = useState([{ value: '', label: '' }]);
  const optionHour = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
  ];
  const optionMinute = [
    { value: '01', label: '01' },
    { value: '02', label: '02' },
    { value: '03', label: '03' },
    { value: '04', label: '04' },
    { value: '05', label: '05' },
    { value: '06', label: '06' },
    { value: '07', label: '07' },
    { value: '08', label: '08' },
    { value: '09', label: '09' },
    { value: '10', label: '10' },
    { value: '11', label: '11' },
    { value: '12', label: '12' },
    { value: '13', label: '13' },
    { value: '14', label: '14' },
    { value: '15', label: '15' },
    { value: '16', label: '16' },
    { value: '17', label: '17' },
    { value: '18', label: '18' },
    { value: '19', label: '19' },
    { value: '20', label: '20' },
    { value: '21', label: '21' },
    { value: '22', label: '22' },
    { value: '23', label: '23' },
    { value: '24', label: '24' },
    { value: '25', label: '25' },
    { value: '26', label: '26' },
    { value: '27', label: '27' },
    { value: '28', label: '28' },
    { value: '29', label: '29' },
    { value: '30', label: '30' },
    { value: '31', label: '31' },
    { value: '32', label: '32' },
    { value: '33', label: '33' },
    { value: '34', label: '34' },
    { value: '35', label: '35' },
    { value: '36', label: '36' },
    { value: '37', label: '37' },
    { value: '38', label: '38' },
    { value: '39', label: '39' },
    { value: '40', label: '40' },
    { value: '41', label: '41' },
    { value: '42', label: '42' },
    { value: '43', label: '43' },
    { value: '44', label: '44' },
    { value: '45', label: '45' },
    { value: '46', label: '46' },
    { value: '47', label: '47' },
    { value: '48', label: '48' },
    { value: '49', label: '49' },
    { value: '50', label: '50' },
    { value: '51', label: '51' },
    { value: '52', label: '52' },
    { value: '53', label: '53' },
    { value: '54', label: '54' },
    { value: '55', label: '55' },
    { value: '56', label: '56' },
    { value: '57', label: '57' },
    { value: '58', label: '58' },
    { value: '59', label: '59' },
    { value: '60', label: '60' },
  ];
  const optionWork = [{ value: 'ล้างรถ', label: 'ล้างรถ' }];
  const optionPeoPle = [{ value: 'สมชาย  ใจดี', label: 'สมชาย  ใจดี' }];
  function SetHour(data) {
    setHour({ value: data.value, label: data.value });
  }
  function Setminut(data) {
    setMinute({ value: data.value, label: data.value });
  }
  function SetWork(data) {
    setWork({ value: data.value, label: data.value });
  }
  function SetPeople(data) {
    setPeople({ value: data.value, label: data.value });
  }
  const initialValues = {
    mainField: '',
    operation: '',
    value: [],
  };
  return (
    <>
      <Container fluid className="set-height-order">
        <Form>
          <Row>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }} lg={10}>
              <Row className="mt-3 mb-3">
                <Col className="text-left">
                  <p className="font-weight-bold">ข้อมูลการรับรถ</p>
                </Col>
              </Row>
              <Row className="align-items-center mt-3 mb-3">
                <Col xs={4} lg={2} className="text-left">
                  <Form.Label>วันที่รับบริการ</Form.Label>
                </Col>
                <Col xs={8} lg={3}>
                  <DatePicker
                    onChange={onChange}
                    placeholder=""
                    suffixIcon={<img src={Calendar} />}
                  />
                </Col>
              </Row>
              <Row className="align-items-center mt-3 mb-3">
                <Col xs={4} lg={2} className="text-left mt-2  mb-2">
                  <Form.Label>เวลานัดรับรถ</Form.Label>
                </Col>
                <Col xs={8} lg={3} className="text-left  mt-2  mb-2">
                  <DatePicker
                    onChange={onChange}
                    placeholder=""
                    suffixIcon={<img src={Calendar} />}
                  />
                </Col>
                <Col xs={5} lg={2} className="text-left  mt-2  mb-2">
                  <Select
                    options={optionHour}
                    defaultValue={optionHour[0]}
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetHour(data)}
                    className="select-list"
                  />
                </Col>
                :
                <Col xs={5} lg={2} className="text-left  mt-2  mb-2">
                  <Select
                    options={optionMinute}
                    defaultValue={optionMinute[0]}
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => Setminut(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
              <Row className="align-items-center mt-3 mb-3">
                <Col xs={4} lg={2} className="text-left mt-2  mb-2">
                  <Form.Label>เวลามารับรถ</Form.Label>
                </Col>
                <Col xs={8} lg={3} className="text-left  mt-2  mb-2">
                  <DatePicker
                    onChange={onChange}
                    placeholder=""
                    suffixIcon={<img src={Calendar} />}
                  />
                </Col>
                <Col xs={5} lg={2} className="text-left  mt-2  mb-2">
                  <Select
                    options={optionHour}
                    defaultValue={optionHour[0]}
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetHour(data)}
                    className="select-list"
                  />
                </Col>
                :
                <Col xs={5} lg={2} className="text-left  mt-2  mb-2">
                  <Select
                    options={optionMinute}
                    defaultValue={optionMinute[0]}
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => Setminut(data)}
                    className="select-list"
                  />
                </Col>
                <Col xs={12} lg={2} className="text-left set-text-mobile">
                  <Form.Label>บันทึกโดย &nbsp; สุรศักดิ์ สวัสดี</Form.Label>
                </Col>
              </Row>
            </Col>
            <Col
              xs={{ order: 'first' }}
              md={{ order: 'last' }}
              lg={2}
              className="text-left"
            >
              <Col className="p-0 mt-2 mb-2">
                <Form.Label className="font-weight-bold">
                  ผู้ดูแล JOB
                </Form.Label>
              </Col>
              <Col className="p-0 mt-2 mb-2">
                <Form.Label>สุรศักดิ์ สวัสดี</Form.Label>
              </Col>
              <Col className="p-0 mt-2 mb-2">
                <Form.Label className="font-weight-bold">
                  เวลาที่คาดว่าจะเสร็จ
                </Form.Label>
              </Col>
              <Col className="p-0 mt-2 mb-2">
                <Form.Label>12/10/2021 13:30</Form.Label>
              </Col>
            </Col>
          </Row>
          <Row className="mt-4 ">
            <Col sm={12} lg={12}>
              <Row>
                <Col xs={5} sm={3}>
                  <Form.Label>งาน</Form.Label>
                </Col>
                <Col xs={5} sm={5} lg={3}>
                  <Form.Label>ผู้รับผิดชอบ</Form.Label>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
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
                              <Col
                                sm={12}
                                lg={12}
                                key={`mainfield-operation-value-${index}`}
                              >
                                <Row className="align-items-center">
                                  <Col xs={5} lg={3} className="mt-3 mb-3">
                                    <Select
                                      options={optionWork}
                                      defaultValue={optionWork[0]}
                                      isClearable={false}
                                      isSearchable={false}
                                      onChange={(data) => SetWork(data)}
                                      className="select-list"
                                    />
                                  </Col>
                                  <Col xs={5} lg={3} className="mt-3 mb-3">
                                    <Select
                                      options={optionPeoPle}
                                      defaultValue={optionPeoPle[0]}
                                      isClearable={false}
                                      isSearchable={false}
                                      onChange={(data) => SetPeople(data)}
                                      className="select-list"
                                    />
                                  </Col>

                                  <Col xs={1} sm={1}>
                                    {values.rows.length !== 1 && (
                                      <Button
                                        className="button-package"
                                        onClick={() => remove(index)}
                                      >
                                        <img src={Delete} />
                                      </Button>
                                    )}
                                  </Col>
                                  <Col lg={3} xl={2}>
                                    {values.rows.length - 1 === index && (
                                      <Button
                                        className="button"
                                        onClick={() => push(initialValues)}
                                      >
                                        <img src={increate} /> &nbsp; เพิ่ม
                                      </Button>
                                    )}
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
            </Col>
          </Row>
          <Row className="mt-4 justify-content-between">
            <Col lg={6}>
              <Row>
                <Col lg={4} xl={4} className=" mt-3 mb-3">
                  <Button type="button" className="button">
                    ออกใบรับรถ
                  </Button>
                </Col>
                <Col lg={4} xl={4} className=" mt-3 mb-3">
                  <Button type="button" className="button">
                    ออกใบ Order Job
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row className="justify-content-end">
                <Col lg={4} xl={4} className=" mt-3 mb-3">
                  <Button type="button" className="button">
                    บันทึก
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}
