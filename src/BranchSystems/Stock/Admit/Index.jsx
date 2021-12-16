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
import Getout from '../../assets/icon/out.png';
import Print from '../../assets/icon/print.png';
import CanCel from '../../assets/icon/new-cancel.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import Return from '../../assets/icon/out.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../../assets/icon/calendar-bg.png';
import MenuStock_Request_Order from '../../Components/layout/MenuStock_Request_Order';

export default function Index() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showReturn, setShowReturn] = useState(false);
  const handleCloseReturn = () => setShowReturn(false);
  const handleShowReturn = () => setShowReturn(true);

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
  function closeReturn() {
    setShowReturn(false);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; รับเข้า
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
                  สต็อก &gt; รับเข้า
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form className="Stock-Request-Order-Branch mt-2 mb-2">
                  <Row className="g-0 justify-content-start">
                    <Col md={12} lg={6} className="">
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="set-label text-right d-lg-none "
                        >
                          <Form.Label className="mr-3">สถานะเอกสาร:</Form.Label>
                        </Col>
                        <Col
                          xs={6}
                          sm={6}
                          md={6}
                          lg={5}
                          className="ml-3 text-left d-lg-none"
                        >
                          <p>รับเข้า</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="set-label text-right"
                        >
                          <Form.Label>เลขที่ใบสั่งซื้อ</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>PO2021070001</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="set-label text-right"
                        >
                          <Form.Label>วันที่สั่ง</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>11/06/2564</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="set-label text-right"
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
                          className="set-label text-right"
                        >
                          <Form.Label>ผู้บันทึก</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>นภาวรรณ ยั่งยืน</p>
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="set-label text-right"
                        >
                          <Form.Label>การใช้งาน</Form.Label>
                        </Col>
                        <Col xs={6} sm={6} md={6} lg={5} className="text-left">
                          <p>เข้าสต็อก</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={12} lg={6} className="set-hidden-status">
                      <Row className="justify-content-end">
                        <Col className="text-right">
                          <Form.Label>สถานะเอกสาร: </Form.Label>
                        </Col>
                        <Col xs={6} lg={3} className="text-left">
                          <p>รับเข้า</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="g-0 justify-content-center m-0">
                    <Col
                      xs={12}
                      className=" mt-3 p-0"
                      style={{ overflow: 'scroll', height: '200px' }}
                    >
                      <table className="table table-responsive table-wash-part ">
                        <thead>
                          <tr className="t-header-package">
                            <th className="text-left" width="20%">
                              รหัสสินค้า
                            </th>
                            <th className="text-left" width="20%">
                              ชื่อสินค้า
                            </th>
                            <th width="5%">จำนวน</th>
                            <th width="5%">หน่วย</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="t-body-package ">
                          <tr>
                            <td className="text-left">0406010300002</td>
                            <td className="text-left">น้ำยาเคลือบรถ</td>
                            <td>1</td>
                            <td>ขวด</td>
                            <th></th>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                  <Row className="mt-4 mb-4">
                    <Col lg={5}>
                      <Row>
                        <Col xs={4} sm={4} md={4} lg={3} className="text-left">
                          <Form.Label>หมายเหตุ</Form.Label>
                        </Col>
                        <Col>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            className="text-area"
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
                          <Button className="button" onClick={handleShowReturn}>
                            <img src={CanCel} /> &nbsp; ตีกลับ
                          </Button>
                        </Col>
                        <Col xs={6} lg={4} xl={3} className="mt-2">
                          <Button className="button">
                            <img src={Print} /> &nbsp; พิมพ์เอกสาร
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={3}>
                      <Row className="d-flex justify-content-end">
                        <Col className=" mt-2">
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
                  <LinkContainer to="/branch/stock/receive/admit/:id">
                    <Button className="button">
                      <img src={Save} /> &nbsp; ยืนยันการรับเข้า
                    </Button>
                  </LinkContainer>
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

      <Modal
        className="modal-Confirm-Admit"
        centered
        show={showReturn}
        onHide={handleCloseReturn}
      >
        <Modal.Header className="modal-header-Confirm-Admit">
          <p>
            <b>ตีกลับ</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeReturn}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row
              className="justify-content-center mt-3"
              style={{ overflow: 'scroll', height: 'auto' }}
            >
              <table
                className="table table-responsive table-wash-part "
                style={{ width: '80%' }}
              >
                <thead>
                  <tr className="t-header-package">
                    <th>รหัสสินค้า</th>
                    <th>ชื่อสินค้า</th>
                    <th>จำนวน</th>
                    <th>หน่วย</th>
                    <th>ที่ได้รับ</th>
                  </tr>
                </thead>
                <tbody className="t-body-package ">
                  <tr>
                    <td>0406010300002</td>
                    <td>น้ำยาเคลือบรถ</td>
                    <td>1</td>
                    <td>ขวด</td>
                    <td>
                      <Form.Control className="text-input"></Form.Control>
                    </td>
                  </tr>
                  <tr>
                    <td>0406010300002</td>
                    <td>น้ำยาเคลือบรถ</td>
                    <td>1</td>
                    <td>ขวด</td>
                    <td>
                      <Form.Control className="text-input"></Form.Control>
                    </td>
                  </tr>
                </tbody>
              </table>
            </Row>

            <Row className="justify-content-center">
              <Col lg={8} className="mt-2 mb-2">
                <Row className="justify-content-center">
                  <Col xs={7} lg={6} className="mt-2 mb-2">
                    <Button className="button">ยืนยัน</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
