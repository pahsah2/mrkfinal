import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Pagination } from 'react-bootstrap';
import Alert from './data';
export default function AllLists() {
  const [aletsState, setAlertsState] = useState({
    notifications: [
      { id: 2021010001, status: 'อนุมัติ', time: '11:52 AM' },
      { id: 2021010002, status: 'ถูกยกเลิก', time: '11:52 AM' },
    ],
  });
  const deleteItemHandler = (deleteIndex) => {
    const data = [...aletsState.notifications];
    data.splice(deleteIndex, 1);
    setAlertsState({
      notifications: data,
    });
  };

  return (
    <>
      <Container
        fluid
        className="package-container Service Stock Job Notification "
      >
        <div className="set-height-notification">
          <Row className="justify-content-center">
            <Col xs={12} className="text-left mt-3 ">
              <div className="border-title">
                <Form.Label>วันนี้</Form.Label>
              </div>
            </Col>

            {aletsState.notifications.map((item, index) => {
              return (
                <Col key={item.id} xs={11} className="">
                  <Alert
                    data={item}
                    deleteAlert={deleteItemHandler.bind(this, index)}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} className="text-left mt-3 ">
              <div className="border-title">
                <Form.Label>เมื่อวาน</Form.Label>
              </div>
            </Col>
            {aletsState.notifications.map((item, index) => {
              return (
                <Col key={item.id} xs={11} className="">
                  <Alert
                    data={item}
                    deleteAlert={deleteItemHandler.bind(this, index)}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="justify-content-center ">
            <Col xs={12} className="text-left mt-3 ">
              <div className="border-title">
                <Form.Label>12/08/2021</Form.Label>
              </div>
            </Col>
            {aletsState.notifications.map((item, index) => {
              return (
                <Col key={item.id} xs={11} className="">
                  <Alert
                    data={item}
                    deleteAlert={deleteItemHandler.bind(this, index)}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
        <Row className="justify-content-center mt-5">
          <Col className="d-flex justify-content-center set-paginate">
            <div className="box-paginate">
              <Pagination>
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item active>{3}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Next />
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
