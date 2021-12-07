import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';

import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import {
  Container,
  Row,
  Col,
  Form,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap';
import Delete from '../assets/icon/restrict.png';
import add_contract from '../assets/icon/add-contract.png';
import styled from 'styled-components';

export default function AddJuristicPart() {
  const [organization, setOrganization] = useState('');
  const [iD_card, setID_card] = useState('');
  const [address_tax_invoices, setAddress_tax_invoices] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
  const [postcode, setPostcode] = useState('');
  const [email, setEmail] = useState('');
  const [recommender, setRecommender] = useState('');
  const [tags, setTags] = React.useState([]);
  const [phone, setPhone] = useState('');
  const [comment, setComment] = useState('');
  const options = [
    { value: 'Spring', label: 'Spring', color: '#C4C4C4' },
    { value: 'Summer', label: 'Summer', color: '#c19c00' },
    { value: 'Autumn', label: 'Autumn', color: '#da3b01' },
    { value: 'Winter', label: 'Winter', color: '#004e8c' },
  ];
  const [value, setValue] = useState('');
  const handleSelect = (e) => {
    console.log(e);
    setValue(e);
  };
  const handleSelectCity = (e) => {
    console.log(e);
    setCity(e);
  };

  const handleSelectDistrict = (e) => {
    console.log(e);
    setDistrict(e);
  };
  return (
    <>
      <Container fluid className="component-create-member">
        <Row className="row-form-create-memeber">
          <Col lg={6} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-start"
              lg={2}
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
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
          <Col lg={6} className="d-flex justify-content-start pass-segment">
            <Col className="d-flex justify-content-start" lg={4}>
              <Form.Label>เลขประจำตัวผู้เสียภาษี</Form.Label>
            </Col>
            <Col
              lg={5}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Control
                type="text"
                placeholder=""
                value={iD_card}
                onChange={(e) => setID_card(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={12} className="d-flex justify-content-start">
            <Col
              lg={2}
              className="d-flex justify-content-start"
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
                value={address_tax_invoices}
                onChange={(e) => setAddress_tax_invoices(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-start mr"
              lg={4}
              style={{ padding: 0 }}
            >
              <Form.Label>จังหวัด</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
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
                      <Dropdown.Item eventKey="กรุงเทพ">กรุงเทพ</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-start nam"
              lg={3}
              style={{ padding: 0 }}
            >
              <Form.Label>อำเภอ</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
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
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-start"
            style={{ paddingLeft: 0 }}
          >
            <Col
              className="d-flex justify-content-start"
              lg={4}
              style={{ padding: 0 }}
            >
              <Form.Label>รหัสไปรษณีย์ </Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
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
              lg={2}
              className="d-flex justify-content-start nam"
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
          <Col
            lg={8}
            className="d-flex justify-content-start  set-colum-contract"
          >
            <Col
              lg={5}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={3}
                className="d-flex justify-content-start nam"
                style={{ padding: 0 }}
              >
                <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
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
            <Col lg={6} className="d-flex justify-content-start">
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
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                  className="input-tage"
                />
              </Col>
            </Col>
            <Col lg={1} className="set-button-delete" style={{ padding: 0 }}>
              <Button type="button" className="delete-contract">
                <img src={Delete} />
              </Button>
            </Col>
          </Col>
          <Col lg={8} className="d-flex justify-content-start  ">
            <Col
              lg={5}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Col
                lg={3}
                className="d-flex justify-content-start nam"
                style={{ padding: 0 }}
              >
                <Form.Label>ชื่อผู้ติดต่อ</Form.Label>
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
            <Col lg={6} className="d-flex justify-content-start">
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
                  tags={tags}
                  onChange={(newTags) => setTags(newTags)}
                  className="input-tage"
                />
              </Col>
            </Col>
            <Col lg={1} className="set-button-delete" style={{ padding: 0 }}>
              <Button type="button" className="delete-contract">
                <img src={Delete} />
              </Button>
            </Col>
          </Col>
          <Col lg={2} className="set-button-add-contract">
            <Button type="button" className="add-contract-button">
              <img src={add_contract} /> &nbsp; เพิ่มผู้ติดต่อ
            </Button>
          </Col>
        </Row>
        <Row className="row-form-create-memeber comment-row">
          <Col lg={4} className="d-flex justify-content-start">
            <Col
              lg={3}
              className="d-flex justify-content-start"
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
      </Container>
    </>
  );
}
