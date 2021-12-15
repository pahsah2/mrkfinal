import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  Button,
  Modal,
} from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/iconfinder-search.png';
import Return from '../../assets/icon/undo_icon.png';
import Increase from '../../assets/icon/increase.png';
import Select, { components } from 'react-select';
import Arrow from '../../assets/icon/arrow.png';
import Document from '../../assets/icon/document.png';
import PurchaseOrder from '../../assets/icon/order.png';
import MenuSend from '../../assets/icon/send-file.png';
export default function MenuJob() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');

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
  const [InOrder, setInOrder] = useState([
    {
      value: '',
      label: '',
    },
  ]);
  const [statusJob, setStatusJob] = useState([
    {
      value: '',
      label: '',
    },
  ]);
  const reset_value = () => {
    setSearch('');
    setType('');
    setCategory('');
  };
  return (
    <Row className="g-0">
      <Col lg={5} xl={4} className="d-flex justify-content-center mt-2 mb-2">
        <Form.Control
          type="text"
          placeholder="ค้นหาด้วยชื่อลูกค้า,เลขทะเบียน,ตัวถัง"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={2} className=" mt-2 mb-2">
        <Select
          className=""
          aria-label="Default select example"
          placeholder="เรียงตามลำดับ"
          options={InOrder}
        />
      </Col>
      <Col xs={6} sm={6} md={4} lg={3} xl={2} className=" mt-2 mb-2">
        <Select
          className=""
          aria-label="Default select example"
          placeholder="สถานะ JOB"
          options={statusJob}
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
      <Col
        xs={12}
        sm={12}
        md={12}
        className="d-flex justify-content-center mt-2 mb-2 d-sm-none"
      >
        <Button className="button-menu" onClick={reset_value}>
          <img src={Increase} />
          <p>สร้าง JOB</p>
        </Button>
      </Col>
    </Row>
  );
}
