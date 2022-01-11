import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Form,
  Modal,
} from 'react-bootstrap';
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
import Getout from '../../assets/icon/getout.png';
import Print from '../../assets/icon/print.png';
import CanCel from '../../assets/icon/new-cancel.png';

import Return from '../../assets/icon/new-re-turn.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../../assets/icon/calendar-bg.png';
import MenuStock_Request_Order from '../../Components/layout/MenuStock_Request_Order';

export default function Index() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  function close() {
    setShow(false);
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
                          className="d-flex align-items-center  set-label"
                        >
                          <Form.Label>การใช้งาน</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder=""
                            options={use}
                          />
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
                            <Col>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
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
                            <Col>
                              <Select
                                className="text-left select-style"
                                aria-label="Default select example"
                                placeholder=""
                                options={tax}
                              />
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
                        <Col>
                          <Form.Control
                            as="textarea"
                            row={3}
                            className=""
                          ></Form.Control>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className=" justify-content-center set-row-botton-request">
                    <Col lg={9}>
                      <Row className="d-flex justify-content-start">
                        <Col xs={12} lg={4} xl={3} className="mt-2">
                          <Button className="button" onClick={handleShow}>
                            <img src={Save} /> &nbsp; รับเข้า
                          </Button>
                        </Col>
                        <Col xs={6} lg={4} xl={3} className="mt-2">
                          <Button className="button">
                            <img src={Print} /> &nbsp; พิมพ์เอกสาร
                          </Button>
                        </Col>
                        <Col
                          xs={6}
                          lg={4}
                          xl={3}
                          className="set-hidden-return-mobile   mt-2"
                        >
                          <Button className="button">
                            <img src={Getout} /> &nbsp; ออก
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={3}>
                      <Row className="d-flex justify-content-end">
                        <Col className="set-hidden-return mt-2">
                          <Button className="button">
                            <img src={Getout} /> &nbsp; ออก
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
      <Modal
        className="modal-Confirm-Admit"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header-Confirm-Admit">
          <p>
            <b>รับเข้าสินค้า</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={close}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center mt-3"
            style={{ overflow: 'scroll', height: 'auto' }}
          >
            <table className="table table-responsive table-wash-part ">
              <thead>
                <tr className="t-header-package">
                  <th>รหัสสินค้า</th>
                  <th>ชื่อสินค้า</th>
                  <th>จำนวน</th>
                  <th>หน่วย</th>
                </tr>
              </thead>
              <tbody className="t-body-package ">
                <tr>
                  <td>0406010300002</td>
                  <td>น้ำยาเคลือบรถ</td>
                  <td>1</td>
                  <td>ขวด</td>
                </tr>
                <tr>
                  <td>0406010300002</td>
                  <td>น้ำยาเคลือบรถ</td>
                  <td>1</td>
                  <td>ขวด</td>
                </tr>
              </tbody>
            </table>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} className="mt-2 mb-2">
              <Row className="justify-content-center">
                <Col xs={7} lg={6} className="mt-2 mb-2">
                  <Button className="button">
                    <img src={Save} /> &nbsp; ยันยันการรับเข้า
                  </Button>
                </Col>
                <Col xs={7} lg={6} className="mt-2 mb-2">
                  <Button className="button">
                    <img src={Return} /> &nbsp; ออก
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
