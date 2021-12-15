import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import { Card, Container, Row, Col, Form, Button } from 'react-bootstrap';
export default function Data(props) {
  const onDeleteAlert = () => {
    props.deleteAlert();
  };
  return (
    <LinkContainer
      to={
        props.data.title === 'อนุมัติส่วนลด' &&
        props.data.status === 'อนุมัติแล้ว'
          ? `/notification/${props.data.id}`
          : '#'
      }
    >
      <Row
        className={
          'col-body-notification align-items-center  ' +
          (props.data.title === 'อนุมัติส่วนลด' &&
          props.data.status === 'อนุมัติแล้ว'
            ? 'col-body-notification-active'
            : '')
        }
      >
        <Col xs={7} md={8}>
          <Row className="">
            <Col xs={12} md={12} lg={7} xl={6} className="text-left">
              <Form.Label>
                {props.data.title} &nbsp;
                {props.data.id} &nbsp;
              </Form.Label>
            </Col>
            <Col xs={2} md={4} lg={3} className="text-left">
              <Form.Label className="font-weight-bold">
                <div className="box-status">{props.data.status}</div>
              </Form.Label>
            </Col>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-end">
            <Col xs={6} className="text-right">
              <Form.Label>{props.data.time}</Form.Label>
            </Col>
            <Col xs={6} lg={3} xl={2} className="text-right">
              <Button
                onClick={onDeleteAlert}
                className="button-delete"
              ></Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={8}>
          <Row>
            <Col xs={12} md={8} lg={7} xl={5} className="text-left">
              <Form.Label className="font-weight-bold">
                {props.data.user} สาขา {props.data.division}
              </Form.Label>
            </Col>
          </Row>
        </Col>
      </Row>
    </LinkContainer>
  );
}
