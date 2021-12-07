import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Delete from '../../assets/icon/flat-style-circle-delete.png';
export default function Package() {
  const [typepackage, setTypePackage] = useState([
    { value: 'sss', label: 'บริการล้างและเคลือบแว๊กซ์' },
    { value: 'บริการฟิล์มกรองแสง', label: 'บริการฟิล์มกรองแสง' },
    { value: 'บริการเคลือบเหมา', label: 'บริการเคลือบเหมา' },
    { value: 'บริการเคลือบเฉพาะจุด', label: 'บริการเคลือบเฉพาะจุด' },
    { value: 'บริการฟิล์มกันรอย', label: 'บริการฟิล์มกันรอย' },
    { value: 'แพ็คเกจพิเศษ', label: 'แพ็คเกจพิเศษ' },
  ]);
  const [product, setProduct] = useState('');
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={10}>
                <Select
                  className="text-left select-style"
                  aria-label="Default select example"
                  placeholder="ค้นหาสินค้าด้วยรหัสสินค้า, ชื่อสินค้า"
                  options={typepackage}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}></Col>
        </Row>

        <Row className="mt-3 mb-3">
          {typepackage.value === 'sss' ? 'sss' : 're'}
        </Row>
      </Container>
    </>
  );
}
