import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/iconfinder-search.png';
import Return from '../../assets/icon/undo_icon.png';
import Increase from '../../assets/icon/increase.png';
import Select, { components } from 'react-select';
import Arrow from '../../assets/icon/arrow.png';
import Document from '../../assets/icon/document.png';
import PurchaseOrder from '../../assets/icon/order.png';
import MenuSend from '../../assets/icon/send-file.png';
export default function MenuStock() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');
  const handleSelectType = (e) => setType(e);
  const handleSelectCategory = (e) => setCategory(e);

  const [display, setDisplay] = useState([
    {
      value: 'สินค้าใกล้หมด',
      label: 'สินค้าใกล้หมด',
    },
    {
      value: 'สินค้าหมดแล้ว',
      label: 'สินค้าหมดแล้ว',
    },
    {
      value: 'ใหม่-เก่า',
      label: 'ใหม่-เก่า',
    },
    {
      value: 'เก่า-ใหม่',
      label: 'เก่า-ใหม่',
    },
  ]);
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
          placeholder="ค้นหาด้วยชื่อสินค้า,รหัสสินค้า"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>
      <Col xs={12} sm={6} md={4} lg={3} xl={3} className=" mt-2 mb-2">
        <Select
          className=""
          aria-label="Default select example"
          placeholder="การแสดงผล"
          options={display}
        />
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
          <img src={Search} /> &nbsp; ค้นหา
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
          <img src={Return} /> &nbsp; คืนค่า
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
        <Button className="button-menu">
          <img src={Arrow} /> &nbsp; ปรับสต๊อก
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
        <Button className="button-menu">
          <img src={Document} /> &nbsp; ตัดสต็อก
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
        <Button className="button-menu">
          <img src={PurchaseOrder} /> &nbsp; ใบสั่งซื้อ
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
        <Button className="button-menu">
          <img src={MenuSend} /> &nbsp; รายการรับเข้า/สั่งซื้อ
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
        <Button className="button-menu">
          <p>คำร้องสั่งสินค้า</p>
        </Button>
      </Col>
    </Row>
  );
}
