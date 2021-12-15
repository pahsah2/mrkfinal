import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Delete from '../../../assets/icon/flat-style-circle-delete.png';
export default function Package() {
  const [typepackage, setTypePackage] = useState([{ value: '', label: '' }]);

  const [fastService, setFastService] = useState(true);
  const [service, setService] = useState([{ value: '', label: '' }]);

  const handleFastService = () => {
    setFastService(!fastService);
  };

  const optionPackage = [
    { value: 'บริการล้างและเคลือบแว๊กซ์', label: 'บริการล้างและเคลือบแว๊กซ์' },
    { value: 'บริการฟิล์มกรองแสง', label: 'บริการฟิล์มกรองแสง' },
    { value: 'บริการเคลือบเหมา', label: 'บริการเคลือบเหมา' },
    { value: 'บริการเคลือบเฉพาะจุด', label: 'บริการเคลือบเฉพาะจุด' },
    { value: 'บริการฟิล์มกันรอย', label: 'บริการฟิล์มกันรอย' },
    { value: 'แพ็คเกจพิเศษ', label: 'แพ็คเกจพิเศษ' },
  ];

  function SetPackage(data) {
    setTypePackage({ value: data.value, label: data.value });
  }

  const optionService = [
    { value: 'บริการทำความสะอาดรถ', label: 'บริการทำความสะอาดรถ' },
    {
      value: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
      label: 'แพคเกจล้างรถ (ระยะเวลา 1 ปี)',
    },
    { value: 'เหมาบริการ + เคลือบ Wax', label: 'เหมาบริการ + เคลือบ Wax' },
    { value: 'แพคเกจล้างรถ + เคลือบ Wax', label: 'แพคเกจล้างรถ + เคลือบ Wax' },
    {
      value: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
      label: 'กล่องสุดคุ้ม น้ำยา Wax+PCS+SC',
    },
  ];
  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={10} className=" mb-4">
                <Select
                  options={optionPackage}
                  placeholder="ค้นหาสินค้าด้วยรหัสสินค้า, ชื่อสินค้า"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(data) => SetPackage(data)}
                  className="select-list"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}></Col>
        </Row>
        <Row className="g-0 justify-content-start">
          <Col lg={6}>
            <Row>
              <Col lg={10}>
                <Select
                  options={optionService}
                  placeholder=""
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
          <Col xs={6} sm={5} md={4} lg={4} xl={3} className="mt-4 d-lg-none">
            <Form.Check
              type="checkbox"
              label="บริการทันที"
              onChange={handleFastService}
              checked={fastService}
              className="checkbox-input"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Row>
              <Col lg={3} className="mt-4 mb-3">
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
                  <td>แพคเกจล้างรถ (ระยะเวลา 1 ปี) 1/3</td>
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
                  <td>เหมาบริการ + เคลือบ Wax</td>
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
      </Container>
    </>
  );
}
