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
export default function History() {
  const history = useHistory();
  const [showCutStock, setShowCutStock] = useState(false);
  const [admit, setAdmit] = useState(true);
  const [takeOut, setTakeOut] = useState(true);
  const [count, setCount] = useState([{ value: '', label: '' }]);
  const handleCutStockClose = () => setShowCutStock(false);
  const handleCutStockShow = () => setShowCutStock(true);
  const [search, setSearch] = useState('');
  const [update, setUpdate] = useState([{ value: '', label: '' }]);
  function SetUpdate(data) {
    setUpdate({ value: data.value, label: data.value });
  }
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

  const OptionUpdate = [{ value: 'ก่อนอัปเดต', label: 'ก่อนอัปเดต' }];

  const handleSelectPage = (e) => setStatepage(e);

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
                  <b>สต็อก &gt; ประวัติการเคลื่อนไหวสินค้า</b>
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
                  <b>สต็อก &gt; ประวัติการเคลื่อนไหวสินค้า</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-center ">
                  <Col xs={12} className="text-left mt-3 mb-3">
                    <Form.Label className="font-weight-bold m-0">
                      ข้อมูลสินค้า
                    </Form.Label>
                  </Col>
                  <Col xs={12} className="mb-3">
                    <div className="bg-white pt-3 pb-3">
                      <Col lg={6}>
                        <Row>
                          <Col xs={6} className="text-left">
                            <Row>
                              <Col xs={5}>
                                <Form.Label className="font-weight-bold">
                                  ชื่อสินค้า
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label>: น้ำยาเคลือรถ</Form.Label>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6} className="text-left">
                            <Row>
                              <Col xs={5}>
                                <Form.Label className="font-weight-bold">
                                  คลังสินค้า
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label>: 5</Form.Label>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6} className="text-left">
                            <Row>
                              <Col xs={5}>
                                <Form.Label className="font-weight-bold">
                                  รหัสสินค้า
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label>: HD43350</Form.Label>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6} className="text-left">
                            <Row>
                              <Col xs={5}>
                                <Form.Label className="font-weight-bold">
                                  หน้าร้าน
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label>: 5</Form.Label>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={6} className="text-left">
                            <Row>
                              <Col xs={5}>
                                <Form.Label className="font-weight-bold">
                                  จำนวน
                                </Form.Label>
                              </Col>
                              <Col>
                                <Form.Label>: 10 ขวด</Form.Label>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={6} lg={4}>
                    <Row classname="align-items-center">
                      <Col xs={4} className="d-flex align-items-center">
                        <Form.Label>ค้นหาวันที่</Form.Label>
                      </Col>
                      <Col xs={8}>
                        <DatePicker
                          onChange={onChange}
                          placeholder=""
                          suffixIcon={<img src={Calendar} />}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={6} lg={3}>
                    <Row className="align-items-center">
                      <Col className="mt-2 mb-3">
                        <Select
                          options={OptionUpdate}
                          isClearable={false}
                          isSearchable={false}
                          onChange={(data) => SetUpdate(data)}
                          className="select-list"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={6} lg={2}>
                    <Row className="align-items-center">
                      <Col className="mt-2 mb-3">
                        <Button type="button" className="button">
                          ค้นหา
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={6} lg={2}>
                    <Row className="align-items-center">
                      <Col className="mt-2 mb-3">
                        <Button type="button" className="button">
                          คืนค่า
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="g-0 justify-content-center m-0">
                  <Col className="set-table-stock p-0">
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
                          <td></td>
                          <td></td>
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
      </Container>
      <Footer />
    </>
  );
}
