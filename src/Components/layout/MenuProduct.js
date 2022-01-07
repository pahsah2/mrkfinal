import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/search.png';
import Return from '../../assets/icon/undo_icon.png';
import Select, { components } from 'react-select';
import Add from '../../assets/icon/add-staff.png';
import { Link } from 'react-router-dom';

export default function MenuProduct() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState([{ value: '', label: ' ' }]);
  const [category, setCategory] = useState([{ value: '', label: ' ' }]);

  const reset_value = () => {
    setSearch('');
    setType('');
    setCategory('');
  };
  function SetType(data) {
    setType({ value: data.value, label: data.value });
  }
  function SetCategory(data) {
    setCategory({ value: data.value, label: data.value });
  }

  const optionProductType = [
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
  ];
  const optionProductCategory = [
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
    { value: ' ', label: '' },
  ];

  return (
    <Row className="g-0">
      <Col lg={4} className="d-flex justify-content-center mt-2 mb-2">
        <Form.Control
          type="text"
          placeholder="ค้นหาด้วยชื่อ,เบอร์โทร"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>
      <Col xs={12} lg={2} className=" my-auto mt-2 mb-2 set-dropdown-division">
        <Select
          options={optionProductType}
          placeholder="สินค้า"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetType(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className=" my-auto mt-2 mb-2 set-dropdown-division">
        <Select
          options={optionProductCategory}
          placeholder="หมวดหมู่"
          isClearable={false}
          isSearchable={false}
          onChange={(data) => SetCategory(data)}
          className="select-list"
        />
      </Col>
      <Col xs={12} lg={2} className="d-flex justify-content-center mt-2 mb-2">
        <Button className="button-menu">
          <img src={Search} /> &nbsp; ค้นหา
        </Button>
      </Col>
      <Col xs={6} lg={2} className="d-flex justify-content-center mt-2 mb-2">
        <Button className="button-menu" onClick={reset_value}>
          <img src={Return} /> &nbsp; คืนค่า
        </Button>
      </Col>
      <Col xs={6} className=" mt-2 mb-2 d-md-none">
        <Link to="/product/add">
          <Button className="button-menu">
            <Row className="justify-content-center align-items-center">
              <Col className="p-0 d-flex justify-content-end">
                <img src={Add} />
              </Col>
              <Col className="p-0 d-flex justify-content-start">
                <p>เพิ่มสินค้า</p>
              </Col>
            </Row>
          </Button>
        </Link>
      </Col>
    </Row>
  );
}
