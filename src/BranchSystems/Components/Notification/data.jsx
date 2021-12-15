import React from 'react';
import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
export default function Data(props) {
  const onDeleteAlert = () => {
    props.deleteAlert();
  };
  return (
    <Row className="align-items-center col-body-text mt-3 ">
      <Col xs={7} md={8}>
        <Row>
          <Col xs={12} md={8} lg={7} xl={5} className="text-left">
            <Form.Label>ใบสั่งซื้อ # Order {props.data.id}</Form.Label>
          </Col>
          <Col xs={2} md={4} lg={3} className="text-left">
            <Form.Label>{props.data.status}</Form.Label>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row className="justify-content-end">
          <Col xs={6} className="text-right">
            <Form.Label>{props.data.time}</Form.Label>
          </Col>
          <Col xs={6} lg={3} xl={2} className="text-right">
            <Button onClick={onDeleteAlert} className="button-delete"></Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
