import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/search.png';
import Return from '../../assets/icon/undo_icon.png';
import Add from '../../assets/icon/add-staff.png';
import { Link } from 'react-router-dom';

import Select, { components } from 'react-select';
export default function MenuInput() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState([{ value: '', label: ' ' }]);
  const [category, setCategory] = useState([{ value: '', label: ' ' }]);
  const [button_Search, setButton_Search] = useState('');

  function SetType(data) {
    setType({ value: data.value, label: data.value });
  }
  function SetCategory(data) {
    setCategory({ value: data.value, label: data.value });
  }
  const reset_value = () => {
    setSearch('');
    setType('');
    setCategory('');
  };

  const optionServiceType = [
    { value: ' บริการทำความสะอาดรถ', label: 'บริการทำความสะอาดรถ' },
    {
      value: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
      label: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
    },
    { value: 'เหมาบริการ + เคลือบ Wax', label: 'เหมาบริการ + เคลือบ Wax' },
    { value: 'แพคเกจล้างรถ + เคลือบ Wax', label: 'แพคเกจล้างรถ + เคลือบ Wax' },
    {
      value: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
      label: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
    },
  ];

  const optionCategory = [
    { value: 'บริการทำความสะอาดรถ', label: 'บริการทำความสะอาดรถ' },
    {
      value: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
      label: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
    },
    { value: 'เหมาบริการ + เคลือบ Wax', label: 'เหมาบริการ + เคลือบ Wax' },
    { value: 'แพคเกจล้างรถ + เคลือบ Wax', label: 'แพคเกจล้างรถ + เคลือบ Wax' },
    {
      value: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
      label: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
    },
  ];
  return (
    <Row className="g-0">
      <Col lg={4} className="d-flex justify-content-center mt-2 mb-2">
        <Form.Control
          type="text"
          placeholder="ค้นหาด้วยรหัสสินค้า,ประเภท,หมวดหมู่"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>
      <Col className=" my-auto mt-2 mb-2 set-dropdown">
        <Select
          options={optionServiceType}
          placeholder=""
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetType(data)}
          className="select-list"
        />
      </Col>
      <Col className=" my-auto mt-2 mb-2 set-dropdown">
        <Select
          options={optionCategory}
          placeholder=""
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetCategory(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className=" mt-2 mb-2">
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
      <Col xs={6} lg={2} className=" mt-2 mb-2">
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
      <Col xs={6} className=" mt-2 mb-2 d-md-none">
        <Link to="/service/add-member">
          <Button className="button-menu">
            <Row className="justify-content-center align-items-center">
              <Col className="p-0 d-flex justify-content-end">
                <img src={Add} />
              </Col>
              <Col className="p-0 d-flex justify-content-start">
                <p>เพิ่มรายชื่อ</p>
              </Col>
            </Row>
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
