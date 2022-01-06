import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Select, { components } from 'react-select';
import Delete from '../../../assets/icon/delete.png';
export default function Lightfilter() {
  const [serviceMore, setServiceMore] = useState(true);
  const [fastService, setFastService] = useState(true);
  const [checkSetting, setCheckSetting] = useState(true);
  const [service, setService] = useState([{ value: '', label: '' }]);
  const [position, setPosition] = useState([{ value: '', label: '' }]);
  const [filmBrand, setFilmBrand] = useState([{ value: '', label: '' }]);
  const [filmVersion, setFilmVersion] = useState([{ value: '', label: '' }]);
  const [modelNumber, setModelNumber] = useState([{ value: '', label: '' }]);

  const handleServiceMore = () => {
    setServiceMore(!serviceMore);
  };
  const handleFastService = () => {
    setFastService(!fastService);
  };
  const handleCheckSetting = () => {
    setCheckSetting(!checkSetting);
  };

  const optionService = [
    { value: '3M MODEL FX', label: '3M MODEL FX' },
    {
      value: 'Lamina MODEL POP',
      label: 'Lamina MODEL POP',
    },
    { value: 'Lamina MODEL APL/ARL/ANL', label: 'Lamina MODEL APL/ARL/ANL' },
    { value: 'Ceramic MODEL CS', label: 'Ceramic MODEL CS' },
    {
      value: 'Ceramic MODEL CS VIP/UV400',
      label: 'Ceramic MODEL CS VIP/UV400',
    },
  ];
  const optionPosition = [{ value: '', label: '' }];
  const optionFilmBrand = [{ value: '', label: '' }];
  const optionFilmVersion = [{ value: '', label: '' }];
  const optionModelNumber = [{ value: '', label: '' }];

  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  function SetPosition(data) {
    setPosition({ value: data.value, label: data.value });
  }
  function SetFilmBrand(data) {
    setFilmBrand({ value: data.value, label: data.value });
  }
  function SetFilmVersion(data) {
    setFilmVersion({ value: data.value, label: data.value });
  }
  function SetModelNumber(data) {
    setModelNumber({ value: data.value, label: data.value });
  }
  return (
    <>
      <Form>
        <Container fluid>
          <Row className="g-0 justify-content-start align-items-center d-lg-none">
            <Col xs={6} sm={5} md={4} lg={4} xl={3} className="mt-3 mb-3 ">
              <Form.Check
                type="checkbox"
                label="เช็คการเซ็ตตัว"
                onChange={handleCheckSetting}
                checked={checkSetting}
                className="checkbox-input"
              />
            </Col>
            <Col xs={6} sm={5} md={4} lg={4} xl={3} className="mt-3 mb-3 ">
              <Form.Check
                type="checkbox"
                label="บริการทันที"
                onChange={handleFastService}
                checked={fastService}
                className="checkbox-input"
              />
            </Col>
          </Row>
          <Row className="g-0 justify-content-start">
            <Col lg={6}>
              <Row>
                <Col lg={10}>
                  <Select
                    options={optionService}
                    placeholder="ประเภทงาน"
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetService(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="">
              <Row className="justify-content-between">
                <Col lg={6} xl={5}>
                  <div className="service-fast-position">
                    <Form.Check
                      type="checkbox"
                      label="เช็คการเซ็ตตัว"
                      onChange={handleCheckSetting}
                      checked={checkSetting}
                      className="checkbox-input"
                    />
                  </div>
                </Col>
                <Col lg={6} xl={5}>
                  <div className="service-fast-position">
                    <Form.Check
                      type="checkbox"
                      label="บริการทันที"
                      onChange={handleFastService}
                      checked={fastService}
                      className="checkbox-input"
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="g-0 justify-content-start mt-2">
            <Col lg={5} className="mt-2 mb-2">
              <Select
                options={optionPosition}
                placeholder="ตำแหน่ง"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetPosition(data)}
                className="select-list"
              />
            </Col>
            <Col lg={5} className="mt-2 mb-2">
              <Select
                options={optionFilmBrand}
                placeholder="เลือกยี่ห้อฟิล์ม"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetFilmBrand(data)}
                className="select-list"
              />
            </Col>
            <Col lg={5} className="mt-2 mb-2">
              <Select
                options={optionFilmVersion}
                placeholder="เลือกรุ่นฟิล์ม"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetFilmVersion(data)}
                className="select-list"
              />
            </Col>
            <Col lg={5} className="mt-2 mb-2">
              <Select
                options={optionModelNumber}
                placeholder="เลือกเลขรุ่น"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetModelNumber(data)}
                className="select-list"
              />
            </Col>
            <Col lg={5} className="mt-2 mb-2">
              <Form.Control
                placeholder="ความหนาของฟิล์ม"
                className="input-text"
              ></Form.Control>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Row>
                <Col lg={3} className="mt-3 mb-3">
                  <Button type="button" className="button">
                    เพิ่ม
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 mb-5 m-0">
            <Col className="set-table-inside p-0">
              <table className="table table-responsive table-wash-part ">
                <thead>
                  <tr className="t-header-package">
                    <th>ลำดับ</th>
                    <th>รหัสรายการ</th>
                    <th>ชื่อรายการ</th>
                    <th>จำนวน</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="t-body-package ">
                  <tr>
                    <td>1</td>
                    <td>0406010300002</td>
                    <td className="text-left text-set">
                      <p>แพคเกจฟิล์มกรองแสง</p>
                      <p>3M MODEL FX 44</p>
                      <p>&middot; บานหน้า CS40</p>
                      <p>&middot; ประตูคู่หน้า CS60 </p>
                      <p>&middot; ประตูคู่หลัง CS60 </p>
                      <p>&middot; บานหลัง CS60</p>
                    </td>
                    <td>
                      <Form.Control className="input-table"></Form.Control>
                    </td>
                    <td>
                      <Button type="" className="button-package">
                        <img src={Delete} />
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>0406010300002</td>
                    <td className="text-left text-set">
                      <p>3M MODEL POP 50 </p>
                    </td>
                    <td>
                      <Form.Control className="input-table"></Form.Control>
                    </td>
                    <td>
                      <Button type="" className="button-package">
                        <img src={Delete} />
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row className="mt-3 mb-5">
            <Col lg={6}>
              <Row>
                <Col lg={3} className="text-left mt-3 mb-3">
                  <Form.Label>หมายเหตุ</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    className="input-area"
                    rows={5}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <Row>
                <Col lg={3} className="text-left mt-3 mb-3">
                  <Form.Label>โน้ตภายใน</Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    className="input-area"
                    rows={5}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="set-row-button-create justify-content-center">
            <Col sm={4} lg={2}>
              <Button type="button" className="button">
                สร้าง
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}
