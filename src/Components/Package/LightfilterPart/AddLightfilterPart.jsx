import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Dropdown, Button } from 'react-bootstrap';
import Delete from '../../../assets/icon/delete.png';
import Increase from '../../../assets/icon/add-staff.png';
import { Switch } from 'antd';
import Write from '../../../assets/icon/add-staff.png';
import DeleteWash from '../../../assets/icon/delete.png';
import Save from '../../../assets/icon/new-save.png';
import Turnoff from '../../../assets/icon/new-cancel.png';
import Select, { components } from 'react-select';
export default function AddLightfilterPart() {
  const [service, setService] = useState([{ value: '', label: '' }]);
  const [showroom, setShowRoom] = useState('');
  const [size_S, setSize_S] = useState('');
  const [size_M, setSize_M] = useState('');
  const [size_L, setSize_L] = useState('');
  const [truck, setTruck] = useState('');
  const [suv, setSuv] = useState('');
  const [truck4Door, setTruck4Door] = useState('');
  const [size_XL, setSize_XL] = useState('');
  const [van, setVan] = useState('');
  const [statusService, setStatusService] = useState(false);
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  const handleSelectShowRoom = (e) => setShowRoom(e);
  const optionService = [
    { value: '3M MODEL FX', label: '3M MODEL FX' },
    {
      value: ' Lamina MODEL POP',
      label: ' Lamina MODEL POP',
    },
    { value: 'Lamina MODEL APL/ARL/ANL', label: 'Lamina MODEL APL/ARL/ANL' },
    { value: 'Ceramic MODEL CS', label: 'Ceramic MODEL CS' },
    {
      value: ' Ceramic MODEL CS VIP/UV400',
      label: ' Ceramic MODEL CS VIP/UV400',
    },
  ];

  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid className="set-heght">
        <Form>
          <p className="form-title">ข้อมูลแพคเกจ</p>
          <Row className="g-0">
            <Form.Group className="package-data" controlId="formBasicEmail">
              <Col>
                <Row>
                  <Col xs={12} md={8} lg={6} xl={6}>
                    <Row>
                      <Col>โชว์รูม</Col>
                      <Col style={{ padding: 0 }}>
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
                    </Row>
                  </Col>
                  <Col className="set-col-button-delete">
                    <Button type="button" className="delete-package">
                      <img src={Delete} className="" /> &nbsp; ลบแพคเกจ
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          </Row>
          <p className="form-title">ขนาดรถและราคา</p>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>S</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_S}
                onChange={(e) => setSize_S(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>S</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_S}
                onChange={(e) => setSize_S(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>S</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_S}
                onChange={(e) => setSize_S(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>M</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_M}
                onChange={(e) => setSize_M(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>L</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_L}
                onChange={(e) => setSize_L(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>TRUCK CAB</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={truck}
                onChange={(e) => setTruck(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>SUV</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={suv}
                onChange={(e) => setSuv(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>TRUCK 4 DOOR </p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={truck4Door}
                onChange={(e) => setTruck4Door(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>XL</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={size_XL}
                onChange={(e) => setSize_XL(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              <p>VAN</p>
            </Col>
            <Col xs={7} sm={4} md={4} lg={3} xl={2}>
              <Form.Control
                type="text"
                placeholder=""
                // defaultValue={statepage[0]}
                value={van}
                onChange={(e) => setVan(e.target.value)}
                className="input-search-add-wash-part"
              ></Form.Control>
            </Col>
            <Col xs={2} className="text-bath">
              <p>บาท</p>
            </Col>
          </Row>
          <Row className="g-0">
            <Col xs={3} sm={3} md={3} lg={2} xl={2} className="text-title">
              {/* <p>S</p> */}
            </Col>
            <Col
              xs={7}
              sm={4}
              md={4}
              lg={3}
              xl={2}
              className="set-row-group-input"
            >
              <Button
                type="submit"
                className="button-package-save mt-3 mb-3"
                style={{ margin: 0 }}
              >
                <img src={Increase} className="" /> &nbsp; &nbsp; &nbsp; เพิ่ม
              </Button>
            </Col>
            <Col xs={2} className="text-bath">
              {/* <p>บาท</p> */}
            </Col>
          </Row>
        </Form>
        <Row className="g-0" style={{ overflow: 'scroll', height: '200px' }}>
          <table className="table table-responsive table-wash-part ">
            <thead>
              <tr className="t-header-package">
                <th style={{ width: '15%' }}>โชว์รูม</th>
                <th>S</th>
                <th>M</th>
                <th>L</th>
                <th>TRUCK CAB</th>
                <th>SUV</th>
                <th>TRUCK 4 DOOR </th>
                <th>XL</th>
                <th>VANS</th>
                <th>แก้ไข</th>
                <th>ลบ</th>
              </tr>
            </thead>
            <tbody className="t-body-package ">
              <tr>
                <td>เบนซ์</td>
                <td>180</td>
                <td>200</td>
                <td>200</td>
                <td>200</td>
                <td>250</td>
                <td>250</td>
                <td>300</td>
                <td>550</td>
                <td>
                  <Button type="" className="button-package">
                    <img src={Write} />
                  </Button>
                </td>
                <td>
                  <Button type="" className="button-package">
                    <img src={DeleteWash} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>เบนซ์</td>
                <td>180</td>
                <td>200</td>
                <td>200</td>
                <td>200</td>
                <td>250</td>
                <td>250</td>
                <td>300</td>
                <td>550</td>
                <td>
                  <Button type="" className="button-package">
                    <img src={Write} />
                  </Button>
                </td>
                <td>
                  <Button type="" className="button-package">
                    <img src={DeleteWash} />
                  </Button>
                </td>
              </tr>
              <tr>
                <td>เบนซ์</td>
                <td>180</td>
                <td>200</td>
                <td>200</td>
                <td>200</td>
                <td>250</td>
                <td>250</td>
                <td>300</td>
                <td>550</td>
                <td>
                  <Button type="" className="button-package">
                    <img src={Write} />
                  </Button>
                </td>
                <td>
                  <Button type="" className="button-package">
                    <img src={DeleteWash} />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
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
