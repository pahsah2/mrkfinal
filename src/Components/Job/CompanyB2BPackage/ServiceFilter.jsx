import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Select, { components } from 'react-select';
import Delete from '../../../assets/icon/flat-style-circle-delete.png';
export default function ServiceFilter() {
  const [fastService, setFastService] = useState(true);
  const [renewalClaim, setRenewalClaim] = useState(true);
  const [checkSetting, setCheckSetting] = useState(true);
  const [treatment, setTreatment] = useState(true);
  const [keepWork, setKeepWork] = useState(true);
  const [service, setService] = useState([{ value: '', label: '' }]);
  const [filmBrand, setFilmBrand] = useState([{ value: '', label: '' }]);
  const [filmVersion, setFilmVersion] = useState([{ value: '', label: '' }]);
  const [modelNumber, setModelNumber] = useState([{ value: '', label: '' }]);

  const handleFastService = () => {
    setFastService(!fastService);
  };
  const handleCheckSetting = () => {
    setCheckSetting(!checkSetting);
  };
  const handleRenewalClaim = () => {
    setRenewalClaim(!renewalClaim);
  };
  const handleTreatment = () => {
    setTreatment(!treatment);
  };
  const handleKeepWork = () => {
    setKeepWork(!keepWork);
  };

  const optionService = [
    { value: 'ติดตั้งใหม่', label: 'ติดตั้งใหม่' },
    {
      value: 'ลอกติดตั้ง',
      label: 'ลอกติดตั้ง',
    },
    { value: 'เคลม', label: 'เคลม' },
  ];

  const optionFilmBrand = [{ value: '', label: '' }];
  const optionFilmVersion = [{ value: '', label: '' }];
  const optionModelNumber = [{ value: '', label: '' }];

  function SetService(data) {
    setService({ value: data.value, label: data.value });
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
              <Row className="justify-content-end">
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
          <Row className="g-0 justify-content-start">
            <Col xs={6} sm={5} md={4} lg={3} xl={2} className="mt-4 p-0">
              <Form.Check
                type="checkbox"
                label="เช็คการเซตตัว"
                onChange={handleCheckSetting}
                checked={checkSetting}
                className="checkbox-input"
              />
            </Col>
            <Col xs={6} sm={5} md={4} lg={3} xl={2} className="mt-4 p-0">
              <Form.Check
                type="checkbox"
                label="ทรีตเมนต์"
                onChange={handleTreatment}
                checked={treatment}
                className="checkbox-input"
              />
            </Col>
            <Col xs={6} sm={5} md={4} lg={3} xl={2} className="mt-4 p-0">
              <Form.Check
                type="checkbox"
                label="เก็บงาน"
                onChange={handleKeepWork}
                checked={keepWork}
                className="checkbox-input"
              />
            </Col>
            <Col xs={6} sm={5} md={4} lg={3} xl={2} className="mt-4 p-0">
              <Form.Check
                type="checkbox"
                label="เคลมต่ออายุ"
                onChange={handleRenewalClaim}
                checked={renewalClaim}
                className="checkbox-input"
              />
            </Col>
            <Col
              xs={6}
              sm={5}
              md={4}
              lg={4}
              xl={3}
              className="mt-4  d-lg-none p-0"
            >
              <Form.Check
                type="checkbox"
                label="บริการทันที"
                onChange={handleFastService}
                checked={fastService}
                className="checkbox-input"
              />
            </Col>
          </Row>
          <Row className="g-0 justify-content-start mt-2">
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
                    <td>AUTO PPF เต็มคัน</td>
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
                    <td>AUTO PPF ช่วงหน้ารถ</td>
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
