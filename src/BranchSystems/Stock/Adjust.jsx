import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Pagination, Form } from 'react-bootstrap';
import Service from '../assets/icon/management.png';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';
import Select, { components } from 'react-select';
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import Back from '../assets/icon/back.png';
import MenuStock from '../Components/layout/MenuStock';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Delete from '../assets/icon/flat-style-circle-delete.png';
import Increase from '../assets/icon/increase.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

export default function Adjust() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const [products, setproducts] = useState('');
  const handleSelectPage = (e) => setStatepage(e);
  const [admit, setAdmit] = useState(true);
  const [takeOut, setTakeOut] = useState(true);
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock CutStock">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; ปรับสต็อก
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePackage}
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
                  onClick={closePackage}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; ปรับสต็อก
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0  justify-content-center  align-items-center   set-position">
                  <Col xs={12} lg={12}>
                    <Row className="mt-2 mb-2">
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <Form.Label>เอกสารหมายเลข</Form.Label>
                      </Col>
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <p>: DC983435</p>
                      </Col>
                    </Row>
                    <Row className="mt-2 mb-2">
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <Form.Label>วันที่ปรับ</Form.Label>
                      </Col>
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <p>: 11/06/2564</p>
                      </Col>
                    </Row>
                    <Row className="mt-2 mb-2">
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <Form.Label>ผู้บันทึก</Form.Label>
                      </Col>
                      <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                        <p>: นภาวรรณ ยั่งยืน</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Form>
                  <Row className="g-0 mt-2 mb-5">
                    <Col lg={11}>
                      <Row className="g-0">
                        <Col lg={9}>
                          <Row>
                            <Col
                              xs={3}
                              sm={3}
                              lg={3}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>ชื่อสินค้า</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={products}
                              />
                            </Col>
                            <Col
                              xs={12}
                              lg={4}
                              className="d-flex align-items-center font-weight-bold"
                            >
                              <p>ยอดปัจจุบัน : 10 ขวด </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={9}>
                          {['radio'].map((type) => (
                            <Row
                              key={`inline-${type}`}
                              className="align-items-center"
                            >
                              <Col xs={3} lg={2} className="d-flex">
                                <Form.Check
                                  inline
                                  label="รับเข้า"
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-1`}
                                  onChange={(e) => setAdmit(e.target.value)}
                                  checked={admit}
                                />
                              </Col>
                              <Col xs={3} lg={2} className="d-flex">
                                <Form.Check
                                  inline
                                  label="นำออก"
                                  name="group1"
                                  type={type}
                                  id={`inline-${type}-2`}
                                  onChange={(e) => setTakeOut(e.target.value)}
                                  checked={takeOut}
                                />
                              </Col>

                              <Col
                                xs={2}
                                lg={1}
                                className="d-flex align-items-center justify-content-end set-Label"
                              >
                                <Form.Label>จำนวน</Form.Label>
                              </Col>
                              <Col xs={4} lg={3}>
                                <Form.Control className="input-form"></Form.Control>
                              </Col>
                              <Col xs={3} lg={1} className="set-Label">
                                <Form.Label>หน่วย</Form.Label>
                              </Col>
                              <Col xs={9} lg={3}>
                                <Select
                                  className="text-left select-style"
                                  aria-label="Default select example"
                                  placeholder=""
                                  options={products}
                                />
                              </Col>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={9}>
                          <Row className="align-items-center">
                            <Col
                              xs={4}
                              lg={3}
                              className="d-flex justify-content-end set-Label text-left"
                            >
                              <Form.Label>วันที่นำสินค้าออก</Form.Label>
                            </Col>
                            <Col xs={8} lg={4}>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
                            </Col>
                            <Col xs={3} lg={1} className="set-Label">
                              <Form.Label>เหตุผล</Form.Label>
                            </Col>
                            <Col xs={9} lg={4}>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={products}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mt-2 mb-2">
                        <Col lg={9}>
                          <Row>
                            <Col
                              xs={3}
                              lg={3}
                              className="d-flex justify-content-end set-Label"
                            >
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                className="input-area "
                              ></Form.Control>
                            </Col>
                            <Col lg={4} xl={3}>
                              <Button
                                type="button"
                                className="button-delete-menu-stock"
                              >
                                <img src={Delete} /> &nbsp; ลบรายการ
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 mt-2 mb-5">
                    <Col lg={11}>
                      <Row className="g-0">
                        <Col lg={9}>
                          <Row>
                            <Col
                              xs={3}
                              sm={3}
                              lg={3}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>ชื่อสินค้า</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={products}
                              />
                            </Col>
                            <Col
                              xs={12}
                              lg={4}
                              className="d-flex align-items-center font-weight-bold"
                            >
                              <p>ยอดปัจจุบัน : 10 ขวด </p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={9}>
                          {['radio'].map((type) => (
                            <Row
                              key={`inline-${type}`}
                              className="align-items-center"
                            >
                              <Col xs={3} lg={2} className="d-flex">
                                <Form.Check
                                  inline
                                  label="รับเข้า"
                                  name="group2"
                                  type={type}
                                  id={`inline-${type}-1`}
                                  onChange={(e) => setAdmit(e.target.value)}
                                  checked={admit}
                                />
                              </Col>
                              <Col xs={3} lg={2} className="d-flex">
                                <Form.Check
                                  inline
                                  label="นำออก"
                                  name="group2"
                                  type={type}
                                  id={`inline-${type}-2`}
                                  onChange={(e) => setTakeOut(e.target.value)}
                                  checked={takeOut}
                                />
                              </Col>

                              <Col
                                xs={2}
                                lg={1}
                                className="d-flex align-items-center justify-content-end set-Label"
                              >
                                <Form.Label>จำนวน</Form.Label>
                              </Col>
                              <Col xs={4} lg={3}>
                                <Form.Control className="input-form"></Form.Control>
                              </Col>
                              <Col xs={3} lg={1} className="set-Label">
                                <Form.Label>หน่วย</Form.Label>
                              </Col>
                              <Col xs={9} lg={3}>
                                <Select
                                  className="text-left select-style"
                                  aria-label="Default select example"
                                  placeholder=""
                                  options={products}
                                />
                              </Col>
                            </Row>
                          ))}
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={9}>
                          <Row className="align-items-center">
                            <Col
                              xs={4}
                              lg={3}
                              className="d-flex justify-content-end set-Label text-left"
                            >
                              <Form.Label>วันที่นำสินค้าออก</Form.Label>
                            </Col>
                            <Col xs={8} lg={4}>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
                            </Col>
                            <Col xs={3} lg={1} className="set-Label">
                              <Form.Label>เหตุผล</Form.Label>
                            </Col>
                            <Col xs={9} lg={4}>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={products}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="mt-2 mb-2">
                        <Col lg={9}>
                          <Row>
                            <Col
                              xs={3}
                              lg={3}
                              className="d-flex justify-content-end set-Label"
                            >
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                className="input-area "
                              ></Form.Control>
                            </Col>
                            <Col lg={4} xl={3}>
                              <Button
                                type="button"
                                className="button-delete-menu-stock"
                              >
                                <img src={Delete} /> &nbsp; ลบรายการ
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={3} xl={2}>
                          <Button
                            type="button"
                            className="button-delete-menu-stock"
                          >
                            <img src={Increase} /> &nbsp; เพิ่มรายการ
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="justify-content-between">
                    <Col lg={2}>
                      <Button
                        type="button-save"
                        className="button-delete-menu-stock"
                      >
                        <img src={Save} /> &nbsp; บันทึก
                      </Button>
                    </Col>
                    <Col lg={2}>
                      <Button
                        type="button-save"
                        className="button-delete-menu-stock"
                      >
                        <img src={Return} /> &nbsp; ออก
                      </Button>
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
