import React, { useState, useEffect } from 'react';
import { Formik, FieldArray, Field } from 'formik';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
} from 'react-bootstrap';
import Setting from '../assets/icon/setting.png';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuStock from '../Components/layout/MenuStock';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/search.png';
import Save from '../assets/icon/save.png';
import Return from '../assets/icon/out.png';
import Note from '../assets/icon/address_book.png';
import Add from '../assets/icon/add_menu.png';
import Delete from '../assets/icon/flat-style-circle-delete.png';
import increate from '../assets/icon/increase.png';
export default function AddcarSetting() {
  const history = useHistory();

  function close() {
    let path = `/`;
    history.push(path);
  }
  const initialValues = {
    mainField: '',
    operation: '',
    value: [],
  };
  return (
    <>
      <NavbarTop />

      <Container fluid className="package-container Stock Setting">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Setting} />
                  ตั้งค่า &gt; ยี่ห้อรถ/รุ่นรถ &gt; เพิ่มรายการรถ
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-header-mobile">
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Setting} />
                  ตั้งค่า &gt; ยี่ห้อรถ/รุ่นรถ &gt; เพิ่มรายการรถ
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form>
                  <Row className="g-0  m-0 mt-3 mb-3 justify-content-center">
                    <Col className="text-left  set-bg d-flex align-items-center">
                      <Form.Label className="text-size">
                        เพิ่มรายการรถ
                      </Form.Label>
                    </Col>
                  </Row>
                  <div className="add-car-height">
                    <Row>
                      <Col lg={12} className="text-left mt-3 mb-3">
                        <Form.Label className="text-size  ml-3">
                          ยี่ห้อ
                        </Form.Label>
                      </Col>
                      <Col lg={5} className="text-left  mb-3">
                        <Form.Control></Form.Control>
                      </Col>
                    </Row>
                    <Row>
                      <Formik
                        initialValues={{ rows: [initialValues] }}
                        onSubmit={(values) => {
                          // transform the rows to add the condition key for each row object
                          const output = values.rows.map((row, index) => {
                            if (index === 0) {
                              return { ...row, condition: 'if' };
                            } else {
                              return { ...row, condition: 'and' };
                            }
                          });

                          console.log(output);
                        }}
                      >
                        {({ handleSubmit, values, setFieldValue }) => (
                          <FieldArray
                            name="rows"
                            render={({ push, remove }) => {
                              return (
                                values.rows.length > 0 &&
                                values.rows.map((row, index) => {
                                  return (
                                    <Col
                                      sm={12}
                                      lg={12}
                                      key={`mainfield-operation-value-${index}`}
                                    >
                                      <Row className="align-items-center">
                                        <Col
                                          xs={12}
                                          md={2}
                                          className="mt-3 mb-3 text-left"
                                        >
                                          <Form.Label className="text-size ml-3">
                                            รุ่นรถ
                                          </Form.Label>
                                          <Form.Control></Form.Control>
                                        </Col>
                                        <Col
                                          xs={12}
                                          md={2}
                                          className="mt-3 mb-3 text-left"
                                        >
                                          <Form.Label className="text-size ml-3">
                                            รหัสรุ่นรถ
                                          </Form.Label>
                                          <Form.Control></Form.Control>
                                        </Col>
                                        <Col
                                          xs={12}
                                          md={2}
                                          className="mt-3 mb-3 text-left"
                                        >
                                          <Form.Label className="text-size ml-3">
                                            ประเภทรถ
                                          </Form.Label>
                                          <Form.Control></Form.Control>
                                        </Col>
                                        <Col
                                          xs={12}
                                          md={2}
                                          className="mt-3 mb-3 text-left"
                                        >
                                          <Form.Label className="text-size ml-3">
                                            ขนาดรถ
                                          </Form.Label>
                                          <Form.Control></Form.Control>
                                        </Col>
                                        <Col
                                          xs={12}
                                          md={2}
                                          className="mt-3 mb-3 text-left"
                                        >
                                          <Form.Label className="text-size ml-3">
                                            ปี
                                          </Form.Label>
                                          <Form.Control></Form.Control>
                                        </Col>
                                        <Col xs={6} sm={6} md={1}>
                                          {values.rows.length !== 1 && (
                                            <Row className="justify-content-end g-0">
                                              <Col>
                                                <Button
                                                  className="button-image set-hidden-delete"
                                                  onClick={() => remove(index)}
                                                >
                                                  <img src={Delete} />
                                                </Button>
                                              </Col>
                                              <Col xs={12}>
                                                <Button
                                                  className="button d-md-none"
                                                  onClick={() => remove(index)}
                                                >
                                                  <img src={Delete} />
                                                </Button>
                                              </Col>
                                            </Row>
                                          )}
                                        </Col>
                                        <Col
                                          xs={6}
                                          md={3}
                                          lg={2}
                                          xl={2}
                                          className=""
                                        >
                                          {values.rows.length - 1 === index && (
                                            <Button
                                              className="button mt-3 mb-3"
                                              onClick={() =>
                                                push(initialValues)
                                              }
                                            >
                                              <img src={increate} /> &nbsp;
                                              เพิ่มรายการ
                                            </Button>
                                          )}
                                        </Col>
                                      </Row>
                                    </Col>
                                  );
                                })
                              );
                            }}
                          />
                        )}
                      </Formik>
                    </Row>
                  </div>
                  <Row className="g-0 mt-3 mb-3 justify-content-between">
                    <Col md={6} lg={6} className="mt-3 mb-3">
                      <Row>
                        <Col md={6} lg={4} className="mt-3 mb-3">
                          <Button className="button">
                            <img src={Save} /> &nbsp; บันทึก
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={6} lg={6}>
                      <Row className="justify-content-end">
                        <Col md={6} lg={4} className="mt-3 mb-3">
                          <Button className="button">
                            <img src={Return} /> &nbsp; ออก
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
