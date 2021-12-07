import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/style-component.scss';
import Search from '../../assets/icon/iconfinder-search.png';
import Return from '../../assets/icon/undo_icon.png';
export default function MenuStaff() {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('');
  const [division, setDivision] = useState('');
  const [category, setCategory] = useState('');
  const [button_Search, setButton_Search] = useState('');
  const handleSelectType = (e) => setType(e);
  const handleSelectCategory = (e) => setCategory(e);
  const handleSelectDivision = (e) => setDivision(e);

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
          placeholder="ค้นหาด้วยชื่อ,เบอร์โทร"
          // defaultValue={statepage[0]}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        ></Form.Control>
      </Col>
      <Col
        xs={12}
        sm="auto"
        className="d-flex justify-content-center my-auto mt-2 mb-2 set-dropdown-division"
      >
        <div className="input-dropdown-Menu">
          <Form.Control
            type="text"
            placeholder="แผนก"
            // defaultValue={statepage[0]}
            value={division}
            onChange={(e) => setDivision(e.target.value)}
            disabled
          ></Form.Control>
          <Col
            className="d-flex justify-content-end set-dropdown"
            style={{ padding: 0 }}
          >
            <Dropdown
              onSelect={handleSelectDivision}
              className="dropdown w-100"
            >
              <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                {/* {showroom} */}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                <Dropdown.Item eventKey="บริการทำความสะอาดรถ">
                  บริการทำความสะอาดรถ
                </Dropdown.Item>
                <Dropdown.Item eventKey="แพคเกจล้างรถ (ระยะเวลา 1 ปี)">
                  แพคเกจล้างรถ (ระยะเวลา 1 ปี)
                </Dropdown.Item>
                <Dropdown.Item eventKey="เหมาบริการ + เคลือบ Wax">
                  เหมาบริการ + เคลือบ Wax
                </Dropdown.Item>
                <Dropdown.Item eventKey="แพคเกจล้างรถ + เคลือบ Wax">
                  แพคเกจล้างรถ + เคลือบ Wax
                </Dropdown.Item>
                <Dropdown.Item eventKey="กล่องสุดคุ้ม น้ำยา Wax+PCS+SC">
                  กล่องสุดคุ้ม น้ำยา Wax+PCS+SC
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </div>
      </Col>
      <Col className="d-flex justify-content-center mt-2 mb-2">
        <Button className="button-menu">
          <img src={Search} />
          <p>ค้นหา</p>
        </Button>
      </Col>
      <Col className="d-flex justify-content-center mt-2 mb-2">
        <Button className="button-menu" onClick={reset_value}>
          <img src={Return} />
          <p>คืนค่า</p>
        </Button>
      </Col>
    </Row>
  );
}
