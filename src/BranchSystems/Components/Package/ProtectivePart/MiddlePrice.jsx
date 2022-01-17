import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import Delete from '../../../assets/icon/delete.png';
import Increase from '../../../assets/icon/increase.png';
import { Switch, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

import Write from '../../../assets/icon/flat-style-circle-write.png';
import DeleteWash from '../../../assets/icon/flat-style-circle-delete.png';
import Save from '../../../assets/icon/flat-style-circle-save.png';
import Turnoff from '../../../assets/icon/flat-style-circle-turn-on.png';

export default function MiddlePrice() {
  const [showroom, setShowRoom] = useState('');
  const [package_name, setPackage_Name] = useState('');
  const [pass_package, setPass_package] = useState('');
  const [time_service, setTime_service] = useState('');
  const [calendar, setCalendar] = useState('');
  const [number_Service, setNumber_Service] = useState('');
  const [upload_image, setUpload_image] = useState('');

  // ขนาดรถและราคา
  const [bonnet, setBonnet] = useState('');
  const [boot, setBoot] = useState('');
  const [front_door, setFront_door] = useState('');
  const [back_door, setBack_door] = useState('');
  const [bumper, setBumper] = useState('');
  const [roof, setRoof] = useState('');
  const [cheek, setCheek] = useState('');

  const [time_bonnet, setTime_bonnet] = useState('');
  const [time_boot, setTime_boot] = useState('');
  const [time_front_door, setTime_front_door] = useState('');
  const [time_back_door, setTime_back_door] = useState('');
  const [time_bumper, setTime_bumper] = useState('');
  const [time_roof, setTime_roof] = useState('');
  const [time_cheek, setTime_cheek] = useState('');

  // วัสดุ/อุปกรณ์อ้างอิง
  const [size_S, setSize_S] = useState('');
  const [size_M, setSize_M] = useState('');
  const [size_L, setSize_L] = useState('');
  const [truck, setTruck] = useState('');
  const [suv, setSuv] = useState('');
  const [truck4Door, setTruck4Door] = useState('');
  const [size_XL, setSize_XL] = useState('');
  const [van, setVan] = useState('');
  const [statusService, setStatusService] = useState(false);
  const [coating_after_install, setCoating_after_install] = useState('');

  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const handleSelectShowRoom = (e) => setShowRoom(e);
  return (
    <>
      <Container fluid className="set-heght">
        <Form>
          <p className="form-title">ข้อมูลแพคเกจ</p>
          <Form.Group className="package-data" controlId="formBasicEmail">
            <Row className="g-0">
              <Col xs={2} sm={3} md={3} lg={2} xl={2} className="text-title">
                <p>ชื่อแพคเกจ</p>
              </Col>
              <Col xs={10} md={6} lg={5} xl={4}>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={package_name}
                  onChange={(e) => setPackage_Name(e.target.value)}
                  className="input-middle-price"
                ></Form.Control>
              </Col>
              <Col className="set-col-button-delete">
                <Button type="button" className="delete-package">
                  <img src={Delete} className="" /> &nbsp; ลบแพคเกจ
                </Button>
              </Col>
            </Row>
            <Row className="g-0">
              <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-title">
                <p>รหัสแพคเกจ</p>
              </Col>
              <Col xs={8} md={8} lg={3} xl={2}>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={pass_package}
                  onChange={(e) => setPass_package(e.target.value)}
                  className="input-middle-price"
                ></Form.Control>
              </Col>
              <Col>
                <Row>
                  <Col
                    xs={7}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={3}
                    className="text-title"
                  >
                    <p>กำหนดพ่นเคลือบหลังติดตั้ง</p>
                  </Col>
                  <Col xs={5} md={8} lg={5} xl={3}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={coating_after_install}
                      onChange={(e) => setCoating_after_install(e.target.value)}
                      className="input-middle-price"
                    ></Form.Control>
                  </Col>
                  <Col
                    xs={12}
                    sm={2}
                    lg={3}
                    className="text-title wrong-coat-install"
                  >
                    <p>วัน (แจ้งเตือน)</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="g-0">
              <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-title">
                <p>ระยะเวลารับประกัน</p>
              </Col>
              <Col xs={8} md={8} lg={6} xl={4}>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="ใส่ตัวเลข"
                      // defaultValue={statepage[0]}
                      value={time_service}
                      onChange={(e) => setTime_service(e.target.value)}
                      className="input-middle-price"
                    ></Form.Control>
                  </Col>
                  <Col className="text-title">
                    <p>ปี</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="g-0">
              <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-title">
                <p>จำนวนครั้งที่รับบริการ</p>
              </Col>
              <Col xs={8} md={8} lg={6} xl={4}>
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={number_Service}
                  onChange={(e) => setNumber_Service(e.target.value)}
                  className="input-middle-price"
                ></Form.Control>
              </Col>
            </Row>
            <Row className="g-0">
              <Col xs={4} sm={3} md={3} lg={2} xl={2} className="text-title">
                <p>อัพโหลดโลโก้</p>
              </Col>
              <Col xs={10} md={6} lg={5} xl={4} className="display-text-upload">
                <Form.Control
                  type="text"
                  placeholder=""
                  // defaultValue={statepage[0]}
                  value={upload_image}
                  onChange={(e) => setUpload_image(e.target.value)}
                  className="input-middle-price"
                ></Form.Control>
              </Col>
              <Col style={{ margin: '6px' }}>
                <Button type="button" className="delete-package">
                  อัพโหลดโลโก้
                </Button>
              </Col>
            </Row>
          </Form.Group>
          <p className="form-title">ขนาดรถและราคา</p>
           <Form.Group className="package-data " controlId="formBasicEmail">
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>กระโปรงหน้า</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={bonnet}
                      onChange={(e) => setBonnet(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_bonnet}
                      onChange={(e) => setTime_bonnet(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>กระโปรงหลัง</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={boot}
                      onChange={(e) => setBoot(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_boot}
                      onChange={(e) => setTime_boot(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>ประตูหน้า</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={front_door}
                      onChange={(e) => setFront_door(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_front_door}
                      onChange={(e) => setTime_front_door(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>ประตูหลัง</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={back_door}
                      onChange={(e) => setBack_door(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_back_door}
                      onChange={(e) => setTime_back_door(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>กันชน</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={bumper}
                      onChange={(e) => setBumper(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_bumper}
                      onChange={(e) => setTime_bumper(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>หลังคา</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={roof}
                      onChange={(e) => setRoof(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_roof}
                      onChange={(e) => setTime_roof(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={4}
                    xl={4}
                    className="text-title"
                  >
                    <p>แก้ม</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={cheek}
                      onChange={(e) => setCheek(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>บาท</p>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col
                    xs={4}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    className="text-title"
                  >
                    <p>เวลาดำเนินการ</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={time_cheek}
                      onChange={(e) => setTime_cheek(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} sm={2} className="text-bath">
                    <p>นาที</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </Form.Group>
          {/* sssss */}
          <p className="form-title">วัสดุ/อุปกรณ์อ้างอิง</p>

          <Row>
            <Col lg={6}>
              <Row>
                <Col xs={8}>
                  <div className="input-dropdown-middle-stock">
                    <Form.Control
                      type="text"
                      placeholder="ค้นหาสต๊อก"
                      // defaultValue={statepage[0]}
                      value={showroom}
                      onChange={(e) => setShowRoom(e.target.value)}
                      disabled
                    ></Form.Control>
                    <Col
                      className="d-flex justify-content-end set-dropdown"
                      style={{ padding: 0 }}
                    >
                      <Dropdown
                        onSelect={handleSelectShowRoom}
                        className="dropdown"
                      >
                        <Dropdown.Toggle
                          variant="secondary "
                          id="dropdown-basic"
                        >
                          {/* {value} */}
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
                <Col className="text-title">
                  <p>(มิลลิลิตร)</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>S</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_S}
                onChange={(e) => setSize_S(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>M</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_M}
                onChange={(e) => setSize_M(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>L</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_L}
                onChange={(e) => setSize_L(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={5} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>TRUCK CAB</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={truck}
                onChange={(e) => setTruck(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>SUV</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={suv}
                onChange={(e) => setSuv(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={5} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>TRUCK 4 DOOR </p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={truck4Door}
                onChange={(e) => setTruck4Door(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>XL</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_XL}
                onChange={(e) => setSize_XL(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>VAN</p>
            </Col>
            <Col xs={9} sm={4} md={4} lg={3} xl={2} className="input-stock">
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={van}
                onChange={(e) => setVan(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={0} sm={3} md={3} lg={2} xl={2} className="text-title">
              {/* <p>S</p> */}
            </Col>
            <Col
              xs={12}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              className="set-row-group-input"
            >
              <Button
                type="submit"
                className="button-package-save mt-4 mb-4"
                style={{ margin: 0 }}
              >
                <img src={Increase} className="" /> &nbsp; &nbsp; &nbsp; เพิ่ม
              </Button>
            </Col>
          </Row>
        </Form>
        <Row className="g-0" style={{ overflow: 'scroll', height: '200px' }}>
          <table className="table table-responsive table-wash-part ">
            <thead>
              <tr className="t-header-package">
                <th style={{ width: '20%' }}>ชื่ออุปกรณ์/ขนาด</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>TRUCK CAB</th>
                <th>SUV</th>
                <th>TRUCK 4 DOOR </th>
                <th>XL</th>
                <th>VANS</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody className="t-body-package ">
              <tr>
                <td>น้ำยา WAX</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>

              <tr>
                <td>น้ำยาเคลือบรถ</td>
                <td>0.5</td>
                <td>0.5</td>
                <td>1</td>
                <td>1</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Row>
        <Row>
          <Col className="colum-open-service">
            <p>เปิด/ปิด ให้บริการ</p> <Switch onClick={statusServiceToggler} />{' '}
          </Col>
        </Row>
        <Row className="g-0 d-flex justify-content-center row-delete-mobile">
          <Button type="submit" className="button-package-save">
            <img src={Delete} className="" /> &nbsp; ลบแพคเกจ
          </Button>
        </Row>
        <Row className="g-0 mt-5 mb-5">
          <Col className="d-flex justify-content-center">
            <Button type="submit" className="button-package-save">
              <img src={Save} className="" /> &nbsp; &nbsp; บันทึก
            </Button>
            <Button type="submit" className="button-package-save">
              <img src={Turnoff} className="" /> &nbsp; &nbsp; ออก
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
