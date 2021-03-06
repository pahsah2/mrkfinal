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
import Delete from '../assets/icon/delete.png';
import Increase from '../assets/icon/add_menu.png';
import Save from '../assets/icon/save.png';
import Return from '../assets/icon/out.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

export default function TransferStore() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const [products, setProducts] = useState([{ value: '', label: '' }]);

  const [transferBy, setTransferBy] = useState([{ value: '', label: '' }]);
  const handleSelectPage = (e) => setStatepage(e);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  function SetTransferBy(data) {
    setTransferBy([{ value: data.value, label: data.value }]);
  }
  const OptionTransferBy = [{ value: 't1', label: 't1' }];

  function SetProducts(data) {
    setProducts([{ value: data.value, label: data.value }]);
  }
  const OptionProduct = [{ value: 'น้ำยา', label: 'น้ำยา' }];

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock CutStock bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; โอนไปหน้าร้าน
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
                  สต็อก &gt; โอนไปหน้าร้าน
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0  justify-content-center  align-items-center   set-position">
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
                <Form>
                  <Row className="g-0 mt-2 mb-5">
                    <Col lg={11}>
                      <Row className="g-0">
                        <Col lg={9}>
                          <Row>
                            <Col
                              xs={3}
                              sm={3}
                              lg={2}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>ชื่อสินค้า</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Select
                                options={OptionProduct}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetProducts(data)}
                                className="select-list"
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
                          <Row className="align-items-center">
                            <Col
                              xs={3}
                              lg={2}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>จำนวน</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <Form.Control className="input-form"></Form.Control>
                            </Col>
                            <Col xs={3} lg={2} className="set-Label">
                              <Form.Label>วันที่โอน</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
                            </Col>
                            <Col xs={3} lg={2} className="set-Label">
                              <Form.Label>โอนโดย</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <Select
                                options={OptionTransferBy}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetTransferBy(data)}
                                className="select-list"
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
                              lg={2}
                              className="d-flex justify-content-end set-Label"
                            >
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                className="text-area "
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
                              lg={2}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>ชื่อสินค้า</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Select
                                options={OptionProduct}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetProducts(data)}
                                className="select-list"
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
                          <Row className="align-items-center">
                            <Col
                              xs={3}
                              lg={2}
                              className="d-flex align-items-center justify-content-end set-Label"
                            >
                              <Form.Label>จำนวน</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <Form.Control className="input-form"></Form.Control>
                            </Col>
                            <Col xs={3} lg={2} className="set-Label">
                              <Form.Label>วันที่โอน</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <DatePicker
                                onChange={onChange}
                                placeholder=""
                                suffixIcon={<img src={Calendar} />}
                              />
                            </Col>
                            <Col xs={3} lg={2} className="set-Label">
                              <Form.Label>โอนโดย</Form.Label>
                            </Col>
                            <Col xs={9} lg={4} xl={2}>
                              <Select
                                options={OptionTransferBy}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetTransferBy(data)}
                                className="select-list"
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
                              lg={2}
                              className="d-flex justify-content-end set-Label"
                            >
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col xs={9} lg={5}>
                              <Form.Control
                                as="textarea"
                                rows={3}
                                className="text-area "
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
