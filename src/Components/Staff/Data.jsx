import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select, { components } from 'react-select';
import { DatePicker, Space } from 'antd';
import Calendar from '../../assets/icon/calendar-bg.png';
import Save from '../../assets/icon/save.png';
export default function Data() {
  const [code_staff, setCode_staff] = useState('');
  const [prefix, setPrefix] = useState([
    {
      value: 'นาย',
      label: 'นาย',
    },
    {
      value: 'นาง',
      label: 'นาง',
    },
    {
      value: 'นางสาว',
      label: 'นางสาว',
    },
  ]);
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  const [date, setDate] = useState('');
  const [AKA, setAKA] = useState('');
  const [blood_type, setBlood_type] = useState([
    {
      value: '',
      label: '',
    },
  ]);
  const optionBloodType = [
    {
      value: 'A+',
      label: 'A+',
    },
    {
      value: 'A-',
      label: 'A-',
    },
    {
      value: 'B+',
      label: 'B+',
    },
    {
      value: 'B-',
      label: 'B-',
    },
    {
      value: 'O+',
      label: 'O+',
    },
    {
      value: 'O-',
      label: 'O-',
    },
    {
      value: 'AB+',
      label: 'AB+',
    },
    {
      value: 'AB-',
      label: 'AB-',
    },
  ];
  function SetBloodType(data) {
    setBlood_type({ value: data.value, label: data.value });
  }
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [skin_color, setSkin_color] = useState('');
  const [congenital_disease, setCongenital_Disease] = useState('');
  const [Food_Allergy, setFood_Allergy] = useState('');
  const [Drug_Allergy, setDrug_Allergy] = useState('');
  const [personalities, setPersonalities] = useState([
    {
      value: 'นักออกแบบ',
      label: 'นักออกแบบ',
    },
    {
      value: 'นักตรรกะ',
      label: 'นักตรรกะ',
    },
    {
      value: 'ผู้บัญชาการ',
      label: 'ผู้บัญชาการ',
    },
    {
      value: 'นักโต้วาที',
      label: 'นักโต้วาที',
    },
    {
      value: 'ผู้แนะนำ',
      label: 'ผู้แนะนำ',
    },
    {
      value: 'ผู้ไกล่เกลี่ย',
      label: 'ผู้ไกล่เกลี่ย',
    },
    {
      value: 'ตัวเอก',
      label: 'ตัวเอก',
    },
    {
      value: 'นักรณรงค์',
      label: 'นักรณรงค์',
    },
    {
      value: 'นักคำนวณ',
      label: 'นักคำนวณ',
    },
    {
      value: 'ผู้ตั้งรับ',
      label: 'ผู้ตั้งรับ',
    },
    {
      value: 'ผู้บริหาร',
      label: 'ผู้บริหาร',
    },
    {
      value: 'ผู้ให้คำปรึกษา',
      label: 'ผู้ให้คำปรึกษา',
    },
    {
      value: 'ผู้เชี่ยวชาญด้านศิลปะ',
      label: 'ผู้เชี่ยวชาญด้านศิลปะ',
    },
    {
      value: 'นักผจญภัย',
      label: 'นักผจญภัย',
    },
    {
      value: 'ผู้ประกอบการ',
      label: 'ผู้ประกอบการ',
    },
    {
      value: 'ผู้มอบความบันเทิง',
      label: 'ผู้มอบความบันเทิง',
    },
  ]);
  const [musicianship, setMusicianship] = useState('');
  const [normalGear, setNormalGear] = useState('');
  const [startDate, setStartDate] = useState('');
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <Form>
        <Row className="set-row-add-staff">
          <Col lg={4} xl={3}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                className="d-flex align-items-center set-input"
              >
                <Form.Label className="label-input">รหัสพนักงาน</Form.Label>
              </Col>
              <Col className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <p>คำนำหน้าชื่อ</p>
              </Col>
              <Col>
                <Select
                  options={prefix}
                  placeholder=""
                  isClearable={false}
                  isSearchable={false}
                  // onChange={(data) => SetNumberPerPage(data)}
                  className="select-list"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <p>ชื่อ-นามสกุล</p>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff">
          <Col lg={4} xl={3}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">ชื่อเล่น</Form.Label>
              </Col>
              <Col className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <p>ชื่อAKA</p>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <p>วัน/เดือน/ปีเกิด</p>
              </Col>
              <Col>
                <DatePicker
                  onChange={onChange}
                  placeholder=""
                  suffixIcon={<img src={Calendar} />}
                />
              </Col>
            </Row>
          </Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff">
          <Col lg={4} xl={3}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">กรุ๊ปเลือด</Form.Label>
              </Col>
              <Col>
                <Select
                  options={optionBloodType}
                  placeholder=""
                  isClearable={false}
                  isSearchable={false}
                  onChange={(data) => SetBloodType(data)}
                  className="select-list"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">น้ำหนัก</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">ส่วนสูง</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">สีผิว</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff">
          <Col lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">โรคประจำตัว</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex align-items-center">
                <Form.Label className="label-input">การแพ้อาหาร</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff">
          <Col lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">การแพ้ยา</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff">
          <Col lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">
                  16 Personalities
                </Form.Label>
              </Col>
              <Col lg={9} xl={9}>
                <Select
                  options={personalities}
                  placeholder=""
                  isClearable={false}
                  isSearchable={false}
                  // onChange={(data) => SetNumberPerPage(data)}
                  className="select-list"
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff mt-2 mb-2">
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex  set-input">
                <Form.Label className="label-input">
                  ความสามารถด้านดนตรี
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff mt-2 mb-2">
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex  set-input">
                <Form.Label className="label-input">
                  ความสามารถด้านกีฬา
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff mt-2 mb-2">
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex  set-input">
                <Form.Label className="label-input">
                  ความสามารถด้านในการขับขี่
                </Form.Label>
              </Col>
              <Col>
                <Row>
                  <Col lg={12}>
                    <Row>
                      <Col lg={5} xl={4}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="รถบรรทุก"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                      <Col lg={7}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="รถแมคโค"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                      <Col></Col>
                    </Row>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={5} xl={4} className="d-flex align-items-center">
                        <Form.Label className="label-input">
                          รถยนต์ส่วนบุคคล{' '}
                        </Form.Label>
                      </Col>
                      <Col lg={7} xl={4}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="เกียร์ธรรมดา"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                      <Col lg={7} xl={4}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="เกียร์ออโต้"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={12}>
                    <Row>
                      <Col lg={5} xl={4} className="d-flex align-items-center">
                        <Form.Label className="label-input">
                          จักรยานยนต์
                        </Form.Label>
                      </Col>
                      <Col lg={7} xl={4}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="Bigbike"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                      <Col lg={7} xl={4}>
                        <Form.Check
                          type="checkbox"
                          aria-label="radio 1"
                          label="Normal"
                          onChange={(e) => setNormalGear(e.target.value)}
                          checked={normalGear}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff mt-5">
          <Col lg={4} xl={3}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">สาขา</Form.Label>
              </Col>
              <Col className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">แผนก</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">เริ่มงาน</Form.Label>
              </Col>
              <Col>
                <DatePicker
                  onChange={onChange}
                  placeholder=""
                  suffixIcon={<img src={Calendar} />}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">สิ้นสุดงาน</Form.Label>
              </Col>
              <Col>
                <DatePicker
                  onChange={onChange}
                  placeholder=""
                  suffixIcon={<img src={Calendar} />}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff ">
          <Col lg={12}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={1}
                className="d-flex align-items-center  set-input mr-4"
              >
                <Form.Label className="label-input">ที่อยู่</Form.Label>
              </Col>
              <Col lg={10} className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col xs="auto"></Col>
          <Col xs="auto"></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff ">
          <Col lg={4} xl={3}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">จังหวัด</Form.Label>
              </Col>
              <Col className="d-flex align-items-center">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">อำเภอ</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">ตำบล</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xl={3}>
            <Row>
              <Col xs={12} sm={12} lg={5} className="d-flex align-items-center">
                <Form.Label className="label-input">รหัสไปรษณีย์</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff ">
          <Col lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">เบอร์โทรศัพท์</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className="d-flex align-items-center">
                <Form.Label className="label-input">เลขบัตรประชาชน</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col></Col>
          <Col xs="auto"></Col>
        </Row>
        <Row className="set-row-add-staff ">
          <Col md={12} lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className="d-flex align-items-center  set-input"
              >
                <Form.Label className="label-input">E-mail</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff ">
          <Col lg={6} xl={5}>
            <Row>
              <Col xs={12} sm={12} lg={3} className=" set-input">
                <Form.Label className="label-input">ประสบการณ์ทำงาน</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6} xl={6}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                xl={4}
                className="align-items-center set-input"
              >
                <Form.Label className="label-input">
                  ความต้องการในองค์กร
                </Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff mt-2 mb-2">
          <Col lg={6} xl={5}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={3}
                className=" align-items-center  set-input"
              >
                <Form.Label className="label-input">คติประจำใจ</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6} xl={6}>
            <Row>
              <Col
                xs={12}
                sm={12}
                lg={5}
                xl={4}
                className=" align-items-center"
              >
                <Form.Label className="label-input">หมายเหตุ</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="set-row-add-staff mt-2 mb-2">
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={1}
            xl={1}
            className="d-flex align-items-center set-input mr-4"
          >
            <Form.Label className="label-input">อัพโหลดไฟล์</Form.Label>
          </Col>
          <Col lg={5}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
              <Col
                md={12}
                lg="auto"
                className="d-flex justify-content-center align-items-center"
              >
                <Button type="button" className="button-save button-respon">
                  เลือกไฟล์
                </Button>
              </Col>
            </Row>
          </Col>
          <Col lg={5}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={code_staff}
                  onChange={(e) => setCode_staff(e.target.value)}
                  className="input-search-add-staff"
                ></Form.Control>
              </Col>
              <Col
                md={12}
                lg="auto"
                className="d-flex justify-content-center align-items-center"
              >
                <Button type="button " className="button-save button-respon">
                  เลือกรูปถ่าย
                </Button>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row className="g-0 set-row-add-staff mt-5 mb-5 d-flex justify-content-center ">
          <Col xs={10} sm={10} md={10} lg={8} className="border-colum-time">
            <Row>
              <Col ms={12} sm={12} lg={6}>
                <Row>
                  <Col xs={4} sm={3} md={4} lg={3} className="text-input">
                    <p>เป้าขาย</p>
                  </Col>
                  <Col xs={8} sm={9} md={8} lg={9}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={code_staff}
                      onChange={(e) => setCode_staff(e.target.value)}
                      className="input-search-add-staff"
                    ></Form.Control>
                  </Col>
                </Row>
              </Col>
              <Col ms={12} sm={12} lg={6}>
                <Row>
                  <Col xs={4} sm={3} md={3} lg={3} className="text-input">
                    <p>ช่วงเวลา</p>
                  </Col>
                  <Col xs={8} sm={9} md={9} lg={9}>
                    <DatePicker
                      onChange={onChange}
                      placeholder=""
                      suffixIcon={<img src={Calendar} />}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center ">
          <Button type="button" className="button-save button-respon">
            <img src={Save} /> &nbsp; บันทึก
          </Button>
        </Row>
      </Form>
    </>
  );
}
