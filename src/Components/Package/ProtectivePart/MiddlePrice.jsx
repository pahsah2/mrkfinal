import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import Delete from '../../../assets/icon/delete.png';
import Increase from '../../../assets/icon/add-staff.png';
import { Switch, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

import Write from '../../../assets/icon/add-staff.png';
import DeleteWash from '../../../assets/icon/delete.png';
import Save from '../../../assets/icon/new-save.png';
import Turnoff from '../../../assets/icon/new-cancel.png';
import Select, { components } from 'react-select';

export default function MiddlePrice() {
  const [showroom, setShowRoom] = useState('');
  const [package_name, setPackage_Name] = useState('');
  const [pass_package, setPass_package] = useState('');
  const [time_service, setTime_service] = useState('');
  const [calendar, setCalendar] = useState('');
  const [number_Service, setNumber_Service] = useState('');
  const [upload_image, setUpload_image] = useState('');

  // ขนาดรถและราคา
  const [car_size_S, setCar_Size_S] = useState('');
  const [car_size_M, setCar_Size_M] = useState('');
  const [car_size_L, setCar_Size_L] = useState('');
  const [car_truck_cab, setCar_Truck_Cab] = useState('');
  const [car_suv, setCar_Suv] = useState('');
  const [car_truck4Door, setCar_Truck4Door] = useState('');
  const [car_size_XL, setCar_Size_XL] = useState('');
  const [car_van, setCar_Van] = useState('');

  const [time_car_size_S, setTime_car_size_S] = useState('');
  const [time_car_size_M, setTime_car_size_M] = useState('');
  const [time_car_size_L, setTime_car_size_L] = useState('');
  const [time_car_truck_cab, setTime_Car_Truck_Cab] = useState('');
  const [time_car_suv, setTime_car_suv] = useState('');
  const [time_car_truck4Door, setTime_car_truck4Door] = useState('');
  const [time_car_size_XL, setTime_car_size_XL] = useState('');
  const [time_car_van, setTime_car_van] = useState('');

  // วัสดุ/อุปกรณ์อ้างอิง
  const [service, setService] = useState([{ value: '', label: '' }]);
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
  const optionService = [
    { value: 'เคลือบคริสตัล', label: ' เคลือบคริสตัล' },
    {
      value: 'เคลือบเซรามิก',
      label: 'เคลือบเซรามิก',
    },
  ];
  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid className="package-container Service Stock User set-heght">
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
                    <p>S</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_size_S}
                      onChange={(e) => setCar_Size_S(e.target.value)}
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
                      value={time_car_size_S}
                      onChange={(e) => setTime_car_size_S(e.target.value)}
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
                    <p>M</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_size_M}
                      onChange={(e) => setCar_Size_M(e.target.value)}
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
                      value={time_car_size_M}
                      onChange={(e) => setTime_car_size_M(e.target.value)}
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
                    <p>L</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_size_L}
                      onChange={(e) => setCar_Size_L(e.target.value)}
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
                      value={time_car_size_L}
                      onChange={(e) => setTime_car_size_L(e.target.value)}
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
                    <p>TRUCK CAB</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_truck_cab}
                      onChange={(e) => setCar_Truck_Cab(e.target.value)}
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
                      value={time_car_truck_cab}
                      onChange={(e) => setTime_Car_Truck_Cab(e.target.value)}
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
                    <p>SUV</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_suv}
                      onChange={(e) => setCar_Suv(e.target.value)}
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
                      value={time_car_suv}
                      onChange={(e) => setTime_car_suv(e.target.value)}
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
                    <p>TRUCK 4 DOOR </p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={car_truck4Door}
                      onChange={(e) => setCar_Truck4Door(e.target.value)}
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
                      value={time_car_truck4Door}
                      onChange={(e) => setTime_car_truck4Door(e.target.value)}
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
                    <p>XL</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={setCar_Size_XL}
                      onChange={(e) => setCar_Size_XL(e.target.value)}
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
                      value={time_car_size_XL}
                      onChange={(e) => setTime_car_size_XL(e.target.value)}
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
                    <p>VAN</p>
                  </Col>
                  <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                    <Form.Control
                      type="text"
                      placeholder=""
                      // defaultValue={statepage[0]}
                      value={setCar_Van}
                      onChange={(e) => setCar_Van(e.target.value)}
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
                      value={time_car_van}
                      onChange={(e) => setTime_car_van(e.target.value)}
                      className="input-search-add-wash-part"
                    ></Form.Control>
                  </Col>
                  <Col xs={1} className="text-bath">
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
              <Row className="align-items-center">
                <Col xs={8} className="mt-2 mb-2">
                  <Select
                    options={optionService}
                    defaultValue={optionService[0]}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetService(data)}
                    className="select-list"
                  />
                </Col>
                <Col className="text-title mt-2 mb-2">
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
