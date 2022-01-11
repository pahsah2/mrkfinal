import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Pagination, Form } from 'react-bootstrap';
import Service from '../../assets/icon/management.png';
import Footer from '../../Components/Footer';
import NavbarTop from '../../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../../Components/layout/TabsIcon';
import GroupButtonStock from '../../Components/layout/GroupButtonStock';
import Back from '../../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuStock from '../../Components/layout/MenuStock';
import Write from '../../assets/icon/flat-style-circle-write.png';
import Arrow from '../../assets/icon/arrow.png';
import Document from '../../assets/icon/document.png';
import Search from '../../assets/icon/eyes-search.png';
import Save from '../../assets/icon/new-save.png';

import CanCel from '../../assets/icon/new-cancel.png';

import Return from '../../assets/icon/new-re-turn.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../../assets/icon/calendar-bg.png';
import MenuStock_Request_Order from '../../Components/layout/MenuStock_Request_Order';

export default function Datadmit() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const [tax, setTax] = useState([
    { value: 'Exclude Vat', label: 'Exclude Vat' },
    { value: 'Include Vat', label: 'Include Vat' },
    { value: 'Non Vat', label: 'Non Vat' },
  ]);
  const [use, setUse] = useState([
    { value: 'เข้าสต็อก', label: 'เข้าสต็อก' },
    { value: 'ใช้ทันที', label: 'ใช้ทันที' },
  ]);

  function closePackage() {
    let path = `/`;
    history.push(path);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>สต็อก &gt; รับเข้า</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePackage}
                >
                  <span aria-hidden="true">X</span>
                </button>
              </div>
              <div className="modal-header-mobile">
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePackage}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>สต็อก &gt; รับเข้า</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form className="Stock-Request-Order-Branch mt-2 mb-2">
                  <Row className="g-0 justify-content-center">
                    <Col md={12} lg={6} className="">
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex  set-label"
                        >
                          <Form.Label>สั่งโดย</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>อวิกา ศรีโพธิ์ทอง</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex  set-label"
                        >
                          <Form.Label>ผู้จัดจำหน่าย</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>นิยมพาณิช</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex set-label"
                        >
                          <Form.Label>การใช้งาน</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>เข้าสต็อก</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col md={12} lg={6} className="set-div-position ">
                      <Row className="justify-content-end set-row-status">
                        <Col xs={12} md={12} lg={8} xl={8} className="bg-admit">
                          <Row>
                            <Col
                              xs={4}
                              lg={5}
                              className="d-flex align-items-center"
                            >
                              <Form.Label>เลขที่ใบสั่งซื้อ</Form.Label>
                            </Col>
                            <Col className="d-flex">
                              <p>PO2021070001</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              xs={4}
                              lg={5}
                              className="d-flex align-items-center"
                            >
                              <Form.Label>วันรับเข้าระบบ</Form.Label>
                            </Col>
                            <Col className="d-flex">
                              <p>06/05/2563</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              xs={4}
                              lg={5}
                              className="d-flex align-items-center"
                            >
                              <Form.Label>วันที่บันทึก</Form.Label>
                            </Col>
                            <Col className="d-flex">
                              <p>06/05/2563</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              xs={4}
                              lg={5}
                              className="d-flex align-items-center"
                            >
                              <Form.Label>ผู้บันทึก</Form.Label>
                            </Col>
                            <Col className="d-flex">
                              <p className="text-p">: นภาวรรณ ยั่งยืน</p>
                            </Col>
                          </Row>
                          <Row>
                            <Col
                              xs={4}
                              lg={5}
                              className="d-flex align-items-center"
                            >
                              <Form.Label>ชนิดภาษี</Form.Label>
                            </Col>
                            <Col className="d-flex">
                              <p>Exclude Vat</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  <Row className="g-0 justify-content-center">
                    <Row
                      className=" mt-3"
                      style={{ overflow: 'scroll', height: 'auto' }}
                    >
                      <table className="table table-responsive table-wash-part ">
                        <thead>
                          <tr className="t-header-package">
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>จำนวน</th>
                            <th>หน่วย</th>
                            <th>ราคาต่อหน่วย</th>
                            <th>ราคารวม</th>
                          </tr>
                        </thead>
                        <tbody className="t-body-package ">
                          <tr>
                            <td>0406010300002</td>
                            <td>น้ำยาเคลือบรถ</td>
                            <td>1</td>
                            <td>ขวด</td>
                            <td>50</td>
                            <td>50</td>
                          </tr>
                          <tr>
                            <td>0406010300002</td>
                            <td>น้ำยาเคลือบรถ</td>
                            <td>1</td>
                            <td>ขวด</td>
                            <td>50</td>
                            <td>50</td>
                          </tr>
                        </tbody>
                      </table>
                    </Row>
                  </Row>
                  <Row className="mt-2 mb-2">
                    <Col lg={5}>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex align-items-center"
                        >
                          <Form.Label>หมายเหตุ</Form.Label>
                        </Col>
                        <Col className="d-flex align-items-center">
                          <p style={{ margin: 0 }}>ไม่อนุมัติ</p>
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
