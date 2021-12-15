import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import ShowId from './ShowId';
import Edit from './Edit';
export default function Data() {
  const [key, setkey] = useState('');
  return (
    <>
      <Container fluid className="">
        <Row className="justify-content-center">
          <Col lg={11} classsName="">
            <ShowId />
            {/* <Edit /> */}
          </Col>
        </Row>
        <Row className="justify-content-center set-row-data">
          <Col xs={11} sm={11} md={11} lg={11} className=" bg-profile">
            <Row className="set-title">
              <Col className="d-flex">
                <Form.Label className="title-data">ข้อมูลส่วนตัว</Form.Label>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6}>
                <Row>
                  <Col xs={4} sm={2} lg={3} xl={3} className="d-flex">
                    <Form.Label>ชื่อ-สกุล</Form.Label>
                  </Col>
                  <Col lg={9} className="text-left">
                    <p>นางสาว &nbsp; อวิกา ศรีโพธิ์ทอง &nbsp; (เพลง)</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={2}>
                <Row>
                  <Col xs={4} lg={5} className="d-flex">
                    <Form.Label>เพศ</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>หญิง</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4}>
                <Row>
                  <Col xs={4} lg={6} className="text-left d-flex">
                    <Form.Label>วัน/เดือน/ปีเกิด</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>16/01/2537</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={3}>
                <Row>
                  <Col xs={4} lg={6} className="d-flex">
                    <Form.Label>สาขา</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>ศาลเด็ก</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={3}>
                <Row>
                  <Col xs={4} lg={6} className="d-flex">
                    <Form.Label>แผนก</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>การเงิน</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={5}>
                <Row>
                  <Col xs={4} lg={5} className="d-flex">
                    <Form.Label>วันเริ่มต้นทำงาน</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>01/06/2562</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={4}>
                <Row>
                  <Col xs={4} lg={6} className="d-flex">
                    <Form.Label>สถานะการทำงาน</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>พนักงาน</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={4} lg={2} className="d-flex">
                <Form.Label>ที่อยู่</Form.Label>
              </Col>
              <Col className="text-left">
                <p>
                  180/2 หมู่บ้านยินดี ซอย วิภาวดี &nbsp; ตำบล &nbsp;
                  หนองป่าครั่ง &nbsp; อำเภอ &nbsp; เมือง &nbsp; จังหวัด &nbsp;
                  เชียงใหม่ &nbsp; รหัสไปรษณีย์ &nbsp; 50000
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={5}>
                <Row>
                  <Col xs={4} lg={5} className="d-flex">
                    <Form.Label>เบอร์โทรศัพท์</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>066-4886598</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={7}>
                <Row>
                  <Col xs={8} lg={6} className="d-flex">
                    <Form.Label>เลขบัตรประชาชน/พาสปอร์ต</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>1509904356874</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} lg={12}>
                <Row>
                  <Col xs={4} lg={2} className="d-flex">
                    <Form.Label>E-mail</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>Aveka_plang@gmail.com</p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={4} lg={2} className="d-flex">
                    <Form.Label>คติประจำใจ</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>
                      ไม่ต้องทำวันนี้ให้ดีที่สุด เดี๋ยวพรุ่งนี้ไม่มีอะไรให้ทำ
                    </p>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Row>
                  <Col xs={4} lg={2} className="d-flex">
                    <Form.Label>ไฟล์ที่อัพโหลด</Form.Label>
                  </Col>
                  <Col className="text-left">
                    <p>สำเนาทะเบียนบ้าน.pdf </p>
                    <p>สำเนาบัตรประชาชน.pdf </p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
