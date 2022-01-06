import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/search.png';
import Return from '../../assets/icon/undo_icon.png';
import Increase from '../../assets/icon/add-staff.png';
export default function MenuProperty() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');
  const handleSelectType = (e) => setType(e);
  const handleSelectCategory = (e) => setCategory(e);
  const reset_value = () => {
    setSearch('');
    setType('');
    setCategory('');
  };
  return (
    <Row className="g-0">
      <Col lg={5} className="d-flex justify-content-center mt-2 mb-2">
        <Form.Control
          type="text"
          placeholder="ค้นหาด้วยชื่อ"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>

      <Col
        xs={12}
        sm={6}
        md={4}
        lg={2}
        xl={2}
        className="d-flex justify-content-center mt-2 mb-2"
      >
        <Button className="button-menu">
          <Row className="justify-content-center align-items-center">
            <Col className="p-0 d-flex justify-content-end">
              <img src={Search} />
            </Col>
            <Col className="p-0 d-flex justify-content-start">
              <p>ค้นหา</p>
            </Col>
          </Row>
        </Button>
      </Col>
      <Col
        xs={6}
        sm={6}
        md={4}
        lg={2}
        xl={2}
        className="d-flex justify-content-center mt-2 mb-2"
      >
        <Button className="button-menu" onClick={reset_value}>
          <Row className="justify-content-center align-items-center">
            <Col className="p-0 d-flex justify-content-end">
              <img src={Return} />
            </Col>
            <Col className="p-0 d-flex justify-content-start">
              <p>คืนค่า</p>
            </Col>
          </Row>
        </Button>
      </Col>
      <Col
        xs={6}
        sm={6}
        md={4}
        lg={2}
        lg={2}
        xl={2}
        className="d-flex justify-content-center mt-2 mb-2 hide-increase"
      >
        <Button className=" button-menu ">
          <Row className="justify-content-center align-items-center">
            <Col xs={5} className="p-0 d-flex justify-content-end">
              <img src={Increase} />
            </Col>
            <Col className="p-0 d-flex">
              <p>เพิ่มสาขา</p>
            </Col>
          </Row>
        </Button>
      </Col>
    </Row>
  );
}
