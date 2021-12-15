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
export default function MenuStockReceiptOrder() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');
  const handleSelectType = (e) => setType(e);
  const handleSelectCategory = (e) => setCategory(e);

  const [display, setDisplay] = useState([
    {
      value: 'ทั้งหมด',
      label: 'ทั้งหมด',
    },
    {
      value: 'สั่งซื้อ',
      label: 'สั่งซื้อ',
    },
    {
      value: 'รับเข้า',
      label: 'รับเข้า',
    },
    {
      value: 'ยกเลิก',
      label: 'ยกเลิก',
    },
    {
      value: 'สำเร็จ',
      label: 'สำเร็จ',
    },
  ]);
  const reset_value = () => {
    setSearch('');
  };
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
      <Col xs={6} sm={6} md={4} lg={2} xl={2} className=" mt-2 mb-2">
        <Select
          className=""
          aria-label="Default select example"
          placeholder="ทั้งหมด"
          options={display}
        />
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
          <img src={PurchaseOrder} />
          <p>ใบสั่งซื้อ</p>
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
          <img src={Search} />
          <p>ค้นหา</p>
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
          <img src={Return} />
          <p>คืนค่า</p>
        </Button>
      </Col>
    </Row>
  );
}
