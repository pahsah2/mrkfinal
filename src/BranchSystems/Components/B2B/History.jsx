import React, { useState } from 'react';
import '../../assets/scss/style.scss';
import Select, { components } from 'react-select';

import 'react-datepicker/dist/react-datepicker.css';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { Table, Label, Input, FormGroup } from 'reactstrap';

export default function History() {
  return (
    <>
      <Container
        fluid
        style={{ paddingTop: 0, margin: 0 }}
        className="data-b2b"
      >
        <Row>
          <Col className="d-flex justify-content-center">
            <Table responsive className="custom-table text-nowrap ">
              <thead>
                <tr className="text-center">
                  <th>เลขที่บิล</th>
                  <th>วันรับบริการ</th>
                  <th>ทะเบียนรถ</th>
                  <th>รายการ</th>
                  <th>สถานะ</th>
                  <th>การชำระ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MRK0001</td>
                  <td>06/05/2563</td>
                  <td>กด-252 เชียงใหม่</td>
                  <td>ติดฟิล์มกระจก</td>
                  <td>เสร็จสิ้น</td>
                  <td>ชำระแล้ว</td>
                </tr>
                <tr>
                  <td>MRK0001</td>
                  <td>06/05/2563</td>
                  <td>กด-252 เชียงใหม่</td>
                  <td>ติดฟิล์มกระจก</td>
                  <td>เสร็จสิ้น</td>
                  <td>ชำระแล้ว</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
