import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Delete from '../../assets/icon/delete.png';
export default function Service() {
  const [isDisabled, setDisabled] = useState(false);
  const [isClearable, setClearable] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isRtl, setRtl] = useState(false);
  const [isSearchable, setSearchable] = useState(true);
  const [service, setService] = useState([{ value: '', label: '' }]);

  const optionService = [
    { value: 'บริการล้างและเคลือบแว๊กซ์', label: 'บริการล้างและเคลือบแว๊กซ์' },
    { value: 'บริการฟิล์มกรองแสง', label: 'บริการฟิล์มกรองแสง' },
    { value: 'บริการเคลือบเหมา', label: 'บริการเคลือบเหมา' },
    { value: 'บริการเคลือบเฉพาะจุด', label: 'บริการเคลือบเฉพาะจุด' },
    { value: 'บริการฟิล์มกันรอย', label: 'บริการฟิล์มกันรอย' },
    { value: 'แพ็คเกจพิเศษ', label: 'แพ็คเกจพิเศษ' },
  ];
  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Select
              className="basic-single"
              classNamePrefix="select"
              placeholder="ค้นหาสินค้าด้วยรหัสบริการ, ชื่อบริการ"
              isDisabled={isDisabled}
              isLoading={isLoading}
              isClearable={isClearable}
              isRtl={isRtl}
              name="color"
              options={optionService}
              onChange={(data) => SetService(data)}
            />
          </Col>
        </Row>
        <Row className="mt-3 mb-3 m-0">
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
                  <td>อบโอนโซน</td>
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
                  <td>อบโอนโซน</td>
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
              <Col lg={3} className="text-left">
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
              <Col lg={3} className="text-left">
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
    </>
  );
}
