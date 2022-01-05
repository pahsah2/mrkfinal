import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';

import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import '../../assets/scss/style.scss';
import save from '../../assets/icon/new-save.png';
import cancel from '../../assets/icon/new-cancel.png';

export default function CustomerInfo() {
  const [phone, setPhone] = React.useState([]);
  const [phone2, setPhone2] = React.useState([]);

  const [company, setCompany] = useState('');
  const [branch, setBranch] = useState('');
  const [address_tax_invoice, setAddress_tax_invoice] = useState('');
  const [email, setEmail] = useState('');

  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postcode, setPostcode] = useState('');
  const [recommender, setRecommender] = useState('');
  const [recommender2, setRecommender2] = useState('');
  const [comment, setComment] = useState('');
  const [isPublished, setIsPublished] = useState(true);

  const handleSelectCity = (e) => setCity(e);
  const handleSelectDistrict = (e) => setDistrict(e);
  const optionCity = [{ value: '', label: '' }];
  const optionDistrict = [{ value: '', label: '' }];
  function SetCity(data) {
    setCity({ value: data.value, label: data.value });
  }
  function SetDistrict(data) {
    setDistrict({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid className="custominfo">
        <Form>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row className=" align-items-center">
                <Col className="text-left" lg={4}>
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
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row>
                <Col className="text-left" lg={4}>
                  <Form.Label>ชื่อองค์กร</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row>
                <Col className="text-left" lg={2}>
                  <Form.Label>สาขา</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="">
              <Row>
                <Col className="text-left" lg={5}>
                  <Form.Label>เลขประจำตัวผู้เสียภาษี</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={12} className="">
              <Row>
                <Col lg={2} className="text-left">
                  <Form.Label>ที่อยู่ออกใบกำกับภาษี</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={address_tax_invoice}
                    onChange={(e) => setAddress_tax_invoice(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="">
              <Row>
                <Col lg={5} className="text-left">
                  <Form.Label>จังหวัด</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionCity}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetCity(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>อำเภอ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionDistrict}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetDistrict(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row>
                <Col lg={5} className="text-left">
                  <Form.Label>รหัสไปรษณีย์ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={5} className="">
              <Row>
                <Col lg={3} className="text-left">
                  <Form.Label>E-mail</Form.Label>
                </Col>
                <Col className=" ">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>ชื่อผู้แนะนำ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={recommender}
                    onChange={(e) => setRecommender(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                </Col>
                <Col className="">
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
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>ชื่อผู้แนะนำ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={recommender2}
                    onChange={(e) => setRecommender2(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                </Col>
                <Col className="">
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
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={5} className="">
              <Row>
                <Col lg={3} className="text-left">
                  <Form.Label>หมายเหตุ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '121px' }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="set-row">
            <Button type="" className="btn-modal">
              <img src={save} /> บันทึก
            </Button>
            <Button type="" className="btn-modal">
              <img src={cancel} /> ออก
            </Button>
          </Row>
        </Form>
      </Container>
    </>
  );
}
