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
import CanCel from '../../assets/icon/return-value.png';
import Delete from '../../assets/icon/delete.png';
import Return from '../../assets/icon/out.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../../assets/icon/calendar-bg.png';
import AddLink from '../../assets/icon/add-link.png';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
export default function PurchaseOrder() {
  const history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [statepage, setStatepage] = useState('');
  const [searchProduct, setSearchProduct] = useState([
    { value: '', label: '' },
    { value: '', label: '' },
    {
      value: <img src={AddLink} />,
      label: (
        <a className="link" onClick={handleShow}>
          <img src={AddLink} /> รายการพิเศษ
        </a>
      ),
    },
  ]);

  const [tax, setTax] = useState([
    { value: 'Exclude Vat', label: 'Exclude Vat' },
    { value: 'Include Vat', label: 'Include Vat' },
    { value: 'Non Vat', label: 'Non Vat' },
  ]);
  const [use, setUse] = useState([
    { value: 'เข้าสต็อก', label: 'เข้าสต็อก' },
    { value: 'ใช้ทันที', label: 'ใช้ทันที' },
  ]);
  const [purchaser, setPurchaser] = useState([
    { value: 'นาย ...', label: 'นาย ...' },
    { value: 'นาย ...', label: 'นาย ...' },
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
      <Container fluid className="package-container Service Stock  bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; สั่งเข้าสต็อก
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
                  สต็อก &gt; สั่งเข้าสต็อก
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
                          className="d-flex align-items-center  set-label"
                        >
                          <Form.Label className="font-weight-normal">
                            ผู้สั่งซื้อ
                          </Form.Label>
                        </Col>
                        <Col
                          xs={8}
                          sm={6}
                          md={6}
                          lg={5}
                          className="text-left mt-2 mb-2"
                        >
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder=""
                            options={purchaser}
                          />
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
                          <Form.Label className="font-weight-normal">
                            การใช้งาน
                          </Form.Label>
                        </Col>
                        <Col
                          xs={8}
                          sm={6}
                          md={6}
                          lg={5}
                          className="text-left mt-2 mb-2"
                        >
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder=""
                            options={use}
                          />
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
                          <Form.Label className="font-weight-normal">
                            วันที่สั่ง
                          </Form.Label>
                        </Col>
                        <Col
                          xs={8}
                          sm={6}
                          md={6}
                          lg={5}
                          className="text-left mt-2 mb-2"
                        >
                          <DatePicker
                            onChange={onChange}
                            placeholder=""
                            suffixIcon={<img src={Calendar} />}
                          />
                        </Col>
                      </Row>
                      <Row className="set-row-admit">
                        <Col
                          xs={4}
                          sm={4}
                          md={4}
                          lg={3}
                          className="text-left   mt-3 mb-3"
                        >
                          <Form.Label className="font-weight-normal">
                            ผู้บันทึก
                          </Form.Label>
                        </Col>
                        <Col
                          xs={8}
                          sm={6}
                          md={6}
                          lg={5}
                          className="text-left mt-3 mb-3"
                        >
                          <p>: นภาวรรณ ยั่งยืน</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Select
                      options={searchProduct}
                      placeholder="ค้นหาและเลือกสินค้า"
                      isClearable={false}
                      isSearchable={false}
                      // onChange={(data) => SetNumberPerPage(data)}
                      className="select-list"
                    />
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
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>หน่วย</th>
                            <th>จำนวน</th>

                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="t-body-package ">
                          <tr>
                            <td>0406010300002</td>
                            <td>น้ำยาเคลือบรถ</td>
                            <td>ขวด</td>
                            <td>
                              <Form.Control
                                type="number"
                                className="input-in-table"
                              ></Form.Control>
                            </td>
                            <th>
                              <Button type="button" className="button-table">
                                <img src={Delete} />
                              </Button>
                            </th>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                  <Row className="g-0 mt-2 mb-2 justify-content-between align-items-center set-position">
                    <Col lg={5}>
                      <Row>
                        <Col xs={4} sm={4} md={4} lg={3} className="text-left">
                          <Form.Label className="font-weight-normal">
                            หมายเหตุ
                          </Form.Label>
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
                    {/* <Col xs={10} lg={5} className="set-data-purchase">
                      <Row className="justify-content-between ">
                        <Col className="d-flex justify-content-start text-left">
                          <p>ราคาสินค้า</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>45 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="d-flex justify-content-start text-left">
                          <p>จำนวนภาษีมูลค่าเพิ่ม</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>5 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="d-flex justify-content-start text-left">
                          <p>รวมเป็นเงิน</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>50 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="d-flex justify-content-start text-left">
                          <p>ส่วนลดรวม</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>0 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="d-flex justify-content-start text-left">
                          <p>ราคาหลังหักส่วนลด</p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>50 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between border-top mt-2">
                        <Col className="d-flex justify-content-start text-left">
                          <p>จำนวนรวมทั้งสิ้น </p>
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <p>50 บาท</p>
                        </Col>
                      </Row>
                    </Col> */}
                  </Row>
                  <Row className=" justify-content-center set-row-botton-request">
                    <Col lg={9}>
                      <Row className="d-flex justify-content-start">
                        <Col xs={12} lg={4} xl={3} className="mt-2">
                          <LinkContainer to="/branch/stock/receive/order-to-stock/:id">
                            <Button className="button">
                              <img src={Save} /> &nbsp; สั่ง
                            </Button>
                          </LinkContainer>
                        </Col>
                        <Col xs={6} lg={4} xl={3} className="mt-2">
                          <Button className="button">
                            <img src={Print} /> &nbsp; พิมพ์เอกสาร
                          </Button>
                        </Col>
                        <Col xs={6} lg={4} xl={3} className="mt-2">
                          <Button className="button">
                            <img src={CanCel} /> &nbsp; ยกเลิก
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
        className="modal-cutstock"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header-cutstock">
          <p>
            <b>โอนไปหน้าร้าน</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row
            className="justify-content-center align-items-center"
            style={{ height: '200px' }}
          >
            <Col xs={8} className="">
              <Form.Control
                placeholder="กรุณาระบุชื่อรายการที่สั่ง"
                className="form-input"
              ></Form.Control>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5 mb-5">
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
    </>
  );
}
