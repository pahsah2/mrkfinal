import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Delete from '../../../assets/icon/flat-style-circle-delete.png';
export default function Service() {
  const [product, setProduct] = useState([{ value: '', label: '' }]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Select
              className="text-left select-style"
              aria-label="Default select example"
              placeholder="ค้นหาสินค้าด้วยรหัสบริการ, ชื่อบริการ"
              options={product}
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
      </Container>
    </>
  );
}
