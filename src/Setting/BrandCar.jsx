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
import Setting from '../assets/icon/setting.png';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIconSetBrandCar from '../Components/layout/TabsIconSetBrandCar';
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
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Note from '../assets/icon/address_book.png';
import Add from '../assets/icon/add_menu.png';

export default function BrandCar() {
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
  const [brand, setBrand] = useState([{ value: '', label: '' }]);
  const [model, setModel] = useState([{ value: '', label: '' }]);
  const [type, setType] = useState([{ value: '', label: '' }]);

  const handleSelectPage = (e) => setStatepage(e);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function close() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Stock Setting bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Setting} />
                  <b>ตั้งค่า &gt; ยี่ห้อรถ/รุ่นรถ</b>
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
                  <b>ตั้งค่า &gt; ยี่ห้อรถ/รุ่นรถ</b>s
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIconSetBrandCar />
                </Row>

                <Row className="g-0 justify-content-center">
                  <Col xs={12}>
                    <Row>
                      <Col xs={12} md={3} lg={2} className="mt-3">
                        <Form.Label className="mt-2 mb-2 pl-2 text-left set-hidden-add">
                          ยี่ห้อ
                        </Form.Label>
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder="ยี่ห้อ"
                          options={brand}
                        />
                      </Col>
                      <Col xs={12} md={3} lg={2} className="mt-3">
                        <Form.Label className="mt-2 mb-2 pl-2 text-left set-hidden-add">
                          รุ่นรถ/รหัสรุ่น
                        </Form.Label>
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder="รุ่นรถ/รหัสรุ่น
                          "
                          options={model}
                        />
                      </Col>
                      <Col xs={12} md={3} lg={2} className="mt-3">
                        <Form.Label className="mt-2 mb-2 pl-2 text-left set-hidden-add">
                          ประเภท
                        </Form.Label>
                        <Select
                          className="text-left select-style"
                          aria-label="Default select example"
                          placeholder="ประเภท"
                          options={type}
                        />
                      </Col>
                      <Col xs={12} md={3} lg={2} className="mt-3">
                        <Button type="" className="button">
                          ค้นหา &nbsp;
                          <img src={Search} />
                        </Button>
                      </Col>
                      <Col xs={12} md={3} lg={2} className="mt-3">
                        <Button type="" className="button">
                          คืนค่า &nbsp;
                        </Button>
                      </Col>
                      <Col
                        xs={12}
                        md={9}
                        lg={3}
                        className="mt-3 set-hidden-add"
                      >
                        <Button type="" className="button">
                          <img src={Add} />
                          &nbsp; เพิ่มรายการ
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className="set-height">
                  <Row className="g-0   mt-3 justify-content-center">
                    <Row className=" mt-3">
                      <table className="table table-responsive ">
                        <thead>
                          <tr className="t-header-setting">
                            <th className="text-left">ยี่ห้อ</th>
                            <th className="text-left">รุ่น</th>
                            <th>รหัสรุ่นรถยนต์</th>
                            <th>ปี</th>
                            <th>ประเภท</th>
                            <th>ขนาดรถ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="t-tr-setting">
                            <td className="text-left">Honda</td>
                            <td className="text-left">
                              <Col style={{ padding: 0 }}>Civic - 1.8 el</Col>
                              <Col style={{ padding: 0 }}>City -Rs</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>318iA</Col>
                              <Col style={{ padding: 0 }}>318iA</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>2019</Col>
                              <Col style={{ padding: 0 }}>2020</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>รถเก๋ง</Col>
                              <Col style={{ padding: 0 }}>รถเก๋ง</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>S</Col>
                              <Col style={{ padding: 0 }}>M</Col>
                            </td>
                            <td className="text-left">
                              <Button type="" className="button-image">
                                <img src={Note} />
                              </Button>
                            </td>
                          </tr>
                          <tr className="t-tr-setting">
                            <td className="text-left">Toyota</td>
                            <td className="text-left">
                              <Col style={{ padding: 0 }}>Civic - 1.8 el</Col>
                              <Col style={{ padding: 0 }}>City -Rs</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>318iA</Col>
                              <Col style={{ padding: 0 }}>318iA</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>2019</Col>
                              <Col style={{ padding: 0 }}>2020</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>รถกระบะ</Col>
                              <Col style={{ padding: 0 }}>รถเก๋ง</Col>
                            </td>
                            <td>
                              <Col style={{ padding: 0 }}>L</Col>
                              <Col style={{ padding: 0 }}>S</Col>
                            </td>
                            <td className="text-left">
                              <Button type="" className="button-image">
                                <img src={Note} />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Row>
                  </Row>
                </div>
                <Row className="g-0 mt-3 mb-3">
                  <Col md={6} lg={4} className=" set-page">
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>แสดง</p>
                      </Col>
                      <Col md={6} lg={6}>
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
