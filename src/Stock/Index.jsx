import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
} from 'react-bootstrap';
import Service from '../assets/icon/management.png';
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
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
export default function Index() {
  const history = useHistory();
  const [showCutStock, setShowCutStock] = useState(false);
  const [admit, setAdmit] = useState(true);
  const [takeOut, setTakeOut] = useState(true);
  const [count, setCount] = useState([{ value: '', label: '' }]);
  const handleCutStockClose = () => setShowCutStock(false);
  const handleCutStockShow = () => setShowCutStock(true);

  const [showAdjustStock, setShowAdjustStock] = useState(false);

  const handleAdjustStockClose = () => setShowAdjustStock(false);
  const handleAdjustStockShow = () => setShowAdjustStock(true);

  const [statepage, setStatepage] = useState('');
  const [page, setPage] = useState([
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ]);
  const [unit, setUnit] = useState([
    { value: 'ซื้อ', label: 'ซื้อ' },
    { value: 'ขาย', label: 'ขาย' },
  ]);
  const [cause, setCause] = useState([
    { value: 'สินค้าหาย', label: 'สินค้าหาย' },
    { value: 'สินค้าเกิน', label: 'สินค้าเกิน' },
    { value: 'อื่น ๆ โปรดระบุ', label: 'อื่น ๆ โปรดระบุ' },
  ]);
  const [causeAdjust, setCauseAdjust] = useState([
    { value: 'สินค้าหาย', label: 'สินค้าหาย' },
    { value: 'สินค้าเกิน', label: 'สินค้าเกิน' },
    { value: 'อื่น ๆ โปรดระบุ', label: 'อื่น ๆ โปรดระบุ' },
  ]);
  const handleSelectPage = (e) => setStatepage(e);
  function closeCutStock() {
    setShowCutStock(false);
  }
  function closeAdjustStock() {
    setShowAdjustStock(false);
  }
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
      <Container fluid className="package-container Service Stock bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>สต็อก</b>
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
                  <b>สต็อก</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuStock />
                </Row>
                {/* <Row className="g-0 justify-content-center">
                  <GroupButtonStock />
                </Row> */}
                <Row className="g-0 justify-content-center m-0">
                  <Col
                    className=" mt-3 p-0"
                    style={{ overflow: 'scroll', height: '500px' }}
                  >
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th>รหัสสินค้า</th>
                          <th>ชื่อสินค้า</th>
                          <th>จุดสั่งซื้อ</th>
                          <th>จุดต่ำสุด</th>
                          <th>คงเหลือ</th>
                          <th>หน่วยซื้อ</th>
                          <th style={{ textAlign: 'left' }}>อัพเดทล่าสุด</th>
                          <th></th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td>0406010300002</td>
                          <td>น้ำยาเคลือบรถ</td>
                          <td>15</td>
                          <td>5</td>
                          <td>10</td>
                          <td>ขวด</td>
                          <td>11/06/2564</td>
                          <td>นภาวรรณ ยั่งยืน</td>
                          <td>
                            <Button
                              type=""
                              className="button-package"
                              onClick={handleCutStockShow}
                            >
                              <img src={Arrow} />
                            </Button>
                          </td>
                          <td>
                            <Button
                              type=""
                              className="button-package"
                              onClick={handleAdjustStockShow}
                            >
                              <img src={Document} />
                            </Button>
                          </td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
                <Row className="g-0 mt-3 mb-3">
                  <Col lg={4} className=" set-page">
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>แสดง</p>
                      </Col>
                      <Col lg={7}>
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder=""
                          options={page}
                        />
                      </Col>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>รายการ</p>
                      </Col>
                    </Row>
                  </Col>

                  <Col className="d-flex justify-content-end set-paginate">
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
              </div>
            </div>
          </div>
        </div>
        <Modal
          className="modal-cutstock"
          centered
          show={showCutStock}
          onHide={handleCutStockClose}
        >
          <Modal.Header className="modal-header-cutstock">
            <p>
              <b>ตัดสต็อก</b>
            </p>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeCutStock}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-center mb-3">
              <Col xs={12}>
                <Row className="mt-3 mb-3">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>0410300002</Form.Label>
                  </Col>
                  <Col xs={6} lg={3} className="text-left">
                    <p>น้ำยาเคลือบรถ</p>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>ยอดปัจุบัน :</Form.Label>
                  </Col>
                  <Col xs={6} lg={3} className="text-left">
                    <p>10 ขวด</p>
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>นำออก</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Form.Control className="form-input"></Form.Control>
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>หน่วย</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Select
                      className="text-left select-style"
                      aria-label="Default select example"
                      placeholder=""
                      options={unit}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>วันที่นำสินค้าออก</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <DatePicker
                      onChange={onChange}
                      placeholder=""
                      suffixIcon={<img src={Calendar} />}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>เหตุผล</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Select
                      className="text-left select-style"
                      aria-label="Default select example"
                      placeholder=""
                      options={cause}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col xs={6} lg={3} className="d-flex">
                    <Form.Label>หมายเหตุ</Form.Label>
                  </Col>
                  <Col xs={6} lg={6}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="form-area"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center set-row">
              <Col xs={12} lg={12}>
                <Row className="mt-2 mb-2">
                  <Col xs={6} sm={6} lg={6} className="d-flex  text-left">
                    <Form.Label>เอกสารหมายเลข</Form.Label>
                  </Col>
                  <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                    <p>: DC983435</p>
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col xs={6} sm={6} lg={6} className="d-flex text-left">
                    <Form.Label>วันที่ตัด</Form.Label>
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
            <Row className="justify-content-center">
              <Col xs={11} lg={8}>
                <Row className="justify-content-between">
                  <Col xs={6}>
                    <Button type="button" className="button">
                      <img src={Save} /> &nbsp; บันทึก
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="button" className="button">
                      <img src={Return} /> &nbsp; ออก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>

        <Modal
          className="modal-adjuststock"
          centered
          show={showAdjustStock}
          onHide={handleAdjustStockClose}
        >
          <Modal.Header className="modal-header-adjuststock">
            <p>
              <b>ปรับสต็อก</b>
            </p>
            <button
              type="button"
              className="btn-close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={closeAdjustStock}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Header>
          <Modal.Body>
            <Row className="justify-content-center mb-3">
              <Col xs={12}>
                <Row className="mt-3 mb-3">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>0410300002</Form.Label>
                  </Col>
                  <Col xs={6} lg={3} className="text-left">
                    <p>น้ำยาเคลือบรถ</p>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>ยอดปัจุบัน :</Form.Label>
                  </Col>
                  <Col xs={6} lg={3} className="text-left">
                    <p>10 ขวด</p>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3 justify-content-start">
                  <Col xs={6} lg={8} className="">
                    {['radio'].map((type) => (
                      <Row
                        key={`inline-${type}`}
                        className="justify-content-start"
                      >
                        <Col xs={6} lg={4} className="d-flex">
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
                        <Col xs={6} lg={3} className="d-flex">
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
                      </Row>
                    ))}
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>จำนวน</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Form.Control className="form-input"></Form.Control>
                  </Col>
                  <Col
                    xs={6}
                    lg={2}
                    className="d-flex align-items-center text-left  "
                  >
                    <Form.Label>นับโดย</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Select
                      className="text-left select-style set-respon"
                      aria-label="Default select example"
                      placeholder=""
                      options={count}
                    />
                  </Col>
                </Row>

                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>วันที่นับสต็อก</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <DatePicker
                      onChange={onChange}
                      placeholder=""
                      suffixIcon={<img src={Calendar} />}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col
                    xs={6}
                    lg={3}
                    className="d-flex align-items-center text-left"
                  >
                    <Form.Label>เหตุผล</Form.Label>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Select
                      className="text-left select-style"
                      aria-label="Default select example"
                      placeholder=""
                      options={causeAdjust}
                    />
                  </Col>
                </Row>
                <Row className="mt-2 mb-2">
                  <Col xs={6} lg={3} className="d-flex">
                    <Form.Label>หมายเหตุ</Form.Label>
                  </Col>
                  <Col xs={6} lg={6}>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="form-area"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center set-row">
              <Col xs={12} lg={12}>
                <Row className="mt-2 mb-2">
                  <Col xs={6} sm={6} lg={6} className="d-flex  text-left">
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
            <Row className="justify-content-center">
              <Col xs={11} lg={8}>
                <Row className="justify-content-between">
                  <Col xs={6}>
                    <Button type="button" className="button">
                      <img src={Save} /> &nbsp; บันทึก
                    </Button>
                  </Col>
                  <Col xs={6}>
                    <Button type="button" className="button">
                      <img src={Return} /> &nbsp; ออก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </>
  );
}
