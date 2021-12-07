import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Profile from '../../assets/icon/Profile-logo.png';

export default function Edit() {
  return (
    <>
      <Form>
        <Row className="justify-content-center ">
          <Col xs={12} sm={12} md={12} lg={6}>
            <Row className="">
              <Col lg={4}>
                <img src={Profile} />
              </Col>
              <Col lg={8}>
                <Row className="justify-content-center">
                  <Col xs={12} lg={12}>
                    <Row className="justify-content-center set-row-Showid">
                      <Col xs={3} md={2} lg={4} className="text-left">
                        <Form.Label>ชื่อ-นามสกุล</Form.Label>
                      </Col>
                      <Col xs={4} md={3} lg={6} className="text-left">
                        <p>อวิกา ศรีโพธิ์ทอง</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} lg={12}>
                    <Row className="justify-content-center set-row-Showid">
                      <Col xs={3} md={2} lg={4} className="text-left set-text">
                        <Form.Label>ชื่อผู้ใช้</Form.Label>
                      </Col>
                      <Col xs={4} md={3} lg={6} className="text-left">
                        <Form.Control className="input"></Form.Control>
                      </Col>
                    </Row>
                    <Row className="justify-content-center set-row-Showid">
                      <Col xs={3} md={2} lg={4} className="text-left set-text">
                        <Form.Label>รหัสผ่าน</Form.Label>
                      </Col>
                      <Col xs={4} md={3} lg={6} className="text-left">
                        <Form.Control className="input"></Form.Control>
                      </Col>
                    </Row>
                    <Row className="justify-content-center set-row-Showid">
                      <Col xs={3} md={2} lg={4} className="text-left set-text">
                        <Form.Label>ยืนยันรหัสผ่าน</Form.Label>
                      </Col>
                      <Col xs={4} md={3} lg={6} className="text-left">
                        <Form.Control className="input"></Form.Control>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={7} className="d-flex justify-content-center">
                    <Button type="button" className="button-edit">
                      บันทึก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </>
  );
}
