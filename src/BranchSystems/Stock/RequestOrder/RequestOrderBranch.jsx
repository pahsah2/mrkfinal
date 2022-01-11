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

import CanCel from '../../assets/icon/new-cancel.png';

import Return from '../../assets/icon/new-re-turn.png';

import MenuStock_Request_Order from '../../Components/layout/MenuStock_Request_Order';
export default function RequestOrderBranch() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [statepage, setStatepage] = useState('');
  const [request, setRequest] = useState([
    { value: 'อนุมัติ', label: 'อนุมัติ' },
    { value: 'ไม่อนุมัติ', label: 'ไม่อนุมัติ' },
    { value: 'ส่งสินค้า', label: 'ส่งสินค้า' },
  ]);
  const [use, setUse] = useState([
    { value: 'เข้าสต็อก', label: 'เข้าสต็อก' },
    { value: 'ใช้ทันที', label: 'ใช้ทันที' },
  ]);

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  function close() {
    setShow(false);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock  bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; คำร้องสั่งสินค้า
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
                  สต็อก &gt; คำร้องสั่งสินค้า
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form className="Stock-Request-Order-Branch mt-2 mb-2">
                  <Row className="g-0 justify-content-center">
                    <Col lg={6} className="order-2 order-lg-1">
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex justify-content-end set-label"
                        >
                          <Form.Label>เลขที่ใบสั่งซื้อ</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>PO2021070001</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex justify-content-end set-label"
                        >
                          <Form.Label>วันที่สั่ง</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>11/06/2564</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex justify-content-end set-label"
                        >
                          <Form.Label>สั่งโดย</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>อวิกา ศรีโพธิ์ทอง</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex justify-content-end set-label"
                        >
                          <Form.Label>สาขา</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>สวนดอก</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex justify-content-end set-label"
                        >
                          <Form.Label>ผู้บันทึก</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>นภาวรรณ ยั่งยืน</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="d-flex align-items-center justify-content-end set-label"
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
                    <Col lg={6} className="order-1 order-lg-2 set-status-colum">
                      <Row className="justify-content-end set-row-status">
                        <Col xs={6} md={4} lg={6} xl={5} className="">
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder=""
                            options={request}
                          />
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

                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="t-body-package ">
                          <tr>
                            <td></td>
                            <td>น้ำยาเคลือบรถ</td>
                            <td>1</td>
                            <td>ขวด</td>
                            <td>
                              <a href="#" className="link" onClick={handleShow}>
                                เลือกสินค้า
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>0406010300002</td>
                            <td>น้ำยาเคลือบรถ</td>
                            <td>1</td>
                            <td>ขวด</td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </Row>
                  </Row>
                  <Row>
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
                            className=""
                          ></Form.Control>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 justify-content-center set-row-botton-request">
                    <Col lg={6}>
                      <Row className="d-flex justify-content-start">
                        <Col xs={12} lg={4}>
                          <Button className="button">
                            <img src={Save} /> &nbsp; บันทึก
                          </Button>
                        </Col>
                        <Col xs={6} lg={4}>
                          <Button className="button">
                            <img src={CanCel} /> &nbsp; ยกเลิก
                          </Button>
                        </Col>
                        <Col
                          xs={6}
                          sm={6}
                          md={6}
                          lg={0}
                          className="set-hidden-return d-block  d-lg-none"
                        >
                          <Button className="button">
                            <img src={Return} /> &nbsp; ออก
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                      <Row className="d-flex justify-content-end">
                        <Col xs={6} lg={4} className="set-hidden-return">
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
      <Modal className="modal-style" centered show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-style">
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
          <Row className="justify-content-center mt-3">
            <Form.Control placeholder="ค้นหารายการสินค้า"></Form.Control>
          </Row>

          <Row className="justify-content-center">
            <Col lg={8} className="mt-2 mb-2">
              <Row className="justify-content-center">
                <Col xs={6} lg={6} className="mt-2 mb-2">
                  <Button className="button button-width">
                    <img src={Save} /> &nbsp; บันทึก
                  </Button>
                </Col>
                <Col xs={6} lg={6} className="mt-2 mb-2">
                  <Button className="button ">
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
