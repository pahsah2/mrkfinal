import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';

import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import '../../assets/scss/style.scss';
export default function CustomerInfo() {
  const [phone, setPhone] = React.useState([]);
  const [phone2, setPhone2] = React.useState([]);

  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [address_tax_invoice, setAddress_tax_invoice] = useState('');
  const [email, setEmail] = useState('');
  const [nam, setNam] = useState([
    { value: 'mr', label: 'นาย' },
    { value: 'ms', label: 'นางสาว' },
    { value: 'mrs', label: 'นาง' },
  ]);

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postcode, setPostcode] = useState('');
  const [contract, setContract] = useState('');
  const [recommender, setRecommender] = useState('');
  const [recommender2, setRecommender2] = useState('');
  const [comment, setComment] = useState('');
  const [spacial_skill, setSpacial_skill] = useState('');
  const [isPublished, setIsPublished] = useState(true);

  const handleSelectCity = (e) => setCity(e);
  const handleSelectDistrict = (e) => setDistrict(e);

  return (
    <>
      <Container fluid className="custominfo">
        <Form>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                className="d-flex justify-content-start"
                lg={4}
                style={{ padding: 0 }}
              >
                <Form.Label>ประเภทสมาชิก</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start radio"
                style={{ padding: 0 }}
              >
                <Form.Check
                  value=""
                  type="radio"
                  aria-label="radio 1"
                  label="นิติบุคคล"
                  onChange={(e) => setIsPublished(e.target.value)}
                  checked={isPublished}
                />
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                className="d-flex justify-content-start"
                lg={4}
                style={{ padding: 0 }}
              >
                <Form.Label>ชื่อองค์กร</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
            <Col lg={3} className="d-flex justify-content-start">
              <Col
                className="d-flex justify-content-start"
                lg={2}
                style={{ padding: 0 }}
              >
                <Form.Label>สาขา</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
            <Col lg={5} className="d-flex justify-content-start">
              <Col
                className="d-flex justify-content-start"
                lg={5}
                style={{ padding: 0 }}
              >
                <Form.Label>เลขประจำตัวผู้เสียภาษี</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={12} className="d-flex justify-content-start">
              <Col
                lg={2}
                className="d-flex justify-content-start nam"
                style={{ padding: 0 }}
              >
                <Form.Label>ที่อยู่ออกใบกำกับภาษี</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={address_tax_invoice}
                  onChange={(e) => setAddress_tax_invoice(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="d-flex justify-content-start">
              <Col
                lg={5}
                className="d-flex justify-content-start nam"
                style={{ padding: 0 }}
              >
                <Form.Label>จังหวัด</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <div className="input-dropdown">
                  <Form.Control
                    type="text"
                    placeholder=""
                    // defaultValue={statepage[0]}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    disabled
                  ></Form.Control>
                  <Col
                    className="d-flex justify-content-end set-dropdown"
                    style={{ padding: 0 }}
                  >
                    <Dropdown onSelect={handleSelectCity} className="dropdown">
                      <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                        {/* {value} */}
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                        <Dropdown.Item eventKey="เชียงใหม่">
                          เชียงใหม่
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="กรุงเทพ">
                          กรุงเทพ
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="เชียงราย">
                          เชียงราย
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </div>
              </Col>
            </Col>
            <Col lg={3} className="d-flex justify-content-start">
              <Col
                lg={4}
                className="d-flex justify-content-center"
                style={{ padding: 0 }}
              >
                <Form.Label>อำเภอ</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <div className="input-dropdown">
                  <Form.Control
                    type="text"
                    placeholder=""
                    // defaultValue={statepage[0]}
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    disabled
                  ></Form.Control>
                  <Col
                    className="d-flex justify-content-end set-dropdown"
                    style={{ padding: 0 }}
                  >
                    <Dropdown
                      onSelect={handleSelectDistrict}
                      className="dropdown"
                    >
                      <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                        {/* {value} */}
                      </Dropdown.Toggle>
                      <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                        <Dropdown.Item eventKey="เมือง">เมือง</Dropdown.Item>
                        <Dropdown.Item eventKey="ลาดพร้าว">
                          ลาดพร้าว
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="ลาดยาง">ลาดยาง</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </div>
              </Col>
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
                <Form.Label>รหัสไปรษณีย์ </Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={5} className="d-flex justify-content-start">
              <Col
                lg={3}
                className="d-flex justify-content-start mr-2"
                style={{ padding: 0 }}
              >
                <Form.Label>E-mail</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>ชื่อผู้แนะนำ </Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={recommender}
                  onChange={(e) => setRecommender(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <ReactTagInput
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                  editable={true}
                  readOnly={false}
                  removeOnBackspace={true}
                  maxTags={2}
                  tags={phone}
                  onChange={(e) => setPhone(e)}
                  className="input-tage"
                />
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>ชื่อผู้แนะนำ </Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  type="text"
                  placeholder=""
                  value={recommender2}
                  onChange={(e) => setRecommender2(e.target.value)}
                ></Form.Control>
              </Col>
            </Col>
            <Col lg={4} className="d-flex justify-content-start">
              <Col
                lg={4}
                className="d-flex justify-content-start"
                style={{ padding: 0 }}
              >
                <Form.Label>เบอร์โทรศัพท์</Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <ReactTagInput
                  placeholder="กรุณากรอกเบอร์โทรศัพท์"
                  editable={true}
                  readOnly={false}
                  removeOnBackspace={true}
                  maxTags={2}
                  tags={phone2}
                  onChange={(e) => setPhone2(e)}
                  className="input-tage"
                />
              </Col>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={5} className="d-flex justify-content-start">
              <Col
                lg={3}
                className="d-flex justify-content-start mr-2"
                style={{ padding: 0 }}
              >
                <Form.Label>หมายเหตุ </Form.Label>
              </Col>
              <Col
                className="d-flex justify-content-start "
                style={{ padding: 0 }}
              >
                <Form.Control
                  as="textarea"
                  placeholder=""
                  style={{ height: '121px' }}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Col>
            </Col>
          </Row>
        </Form>
        <Row className="set-row">
          <Button type="" className="btn-modal">
            <img src="icon/system_restore-2 1.png" /> บันทึก
          </Button>
          <Button type="" className="btn-modal">
            <img src="icon/unplug_storage-0 1.png" /> ออก
          </Button>
        </Row>
      </Container>
    </>
  );
}
