import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Select, { components } from 'react-select';
import Delete from '../../../assets/icon/flat-style-circle-delete.png';
export default function Index() {
  const [serviceMore, setServiceMore] = useState(true);
  const [service, setService] = useState([{ value: '', label: '' }]);
  const handleServiceMore = () => {
    setServiceMore(!serviceMore);
  };

  const optionService = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];
  function SetService(data) {
    setService({ value: data.value, label: data.value });
  }
  return (
    <>
      <Form>
        <Container fluid>
          <Row className="g-0 justify-content-start">
            <Col xs={6} sm={5} md={4} lg={4} xl={3} className="mt-4 ">
              <Form.Check
                type="checkbox"
                label="บริการต่อเนื่อง"
                onChange={handleServiceMore}
                checked={serviceMore}
                className="checkbox-input"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Row>
                <Col lg={5} className="mt-3 mb-3">
                  <Select
                    options={optionService}
                    placeholder="เลือกบริการ"
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetService(data)}
                    className="select-list"
                  />
                </Col>
                <Col lg={3} className="mt-3 mb-3">
                  <Button type="button" className="button">
                    เพิ่ม
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-5 mb-5 m-0">
            <Col className="set-table-inside">
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
                    <td>ล้างและเคลือบ</td>
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
                    <td>ติดฟิล์ม</td>
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
