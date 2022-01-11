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
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuUser from '../Components/layout/MenuUser';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';
import Note from '../assets/icon/address_book.png';
import TriangleArrow from '../assets/icon/TriangleArrow.png';
import TabsIconUser from '../Components/layout/TabsIconUser';

export default function Index() {
  const history = useHistory();
  const [status , setStatus] = useState('เปิด');
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
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>User &gt; รายชื่อผู้ใช้ระบบ</b>
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
                  <b>User &gt; รายชื่อผู้ใช้ระบบ</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIconUser />
                </Row>
                <Row className="g-0 justify-content-center mb-3">
                  <MenuUser />
                </Row>

                <Row className="g-0 justify-content-center m-0">
                  <Col className="set-table-stock p-0">
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th>ชื่อพนักงาน</th>
                          <th>สาขา</th>
                          <th>แผนก</th>
                          <th>ชื่อผู้ใช้</th>
                          <th>เข้าใช้งานล่าสุด</th>
                          <th>Active</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>สวนดอก</td>
                          <td>การเงิน</td>
                          <td>admin 1</td>
                          <td>11/04/2021 18:30</td>
                          <td>
                            <span className={(status === 'เปิด' ? 'text-green':'text-orange')}>{status}</span> &nbsp; <img src={TriangleArrow} />
                          </td>

                          <td>
                            <Button>
                              <img src={Note} />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>สวนดอก</td>
                          <td>การเงิน</td>
                          <td>admin 1</td>
                          <td>11/04/2021 18:30</td>
                          <td>
                            <span className={(status === 'เปิด' ? 'text-green':'text-orange')}>{status}</span> &nbsp; <img src={TriangleArrow} />
                          </td>

                          <td>
                            <Button>
                              <img src={Note} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
                <Row className="g-0 mt-3 mb-3">
                  <Col md={6} lg={5} xl={4} className=" set-page">
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>แสดง</p>
                      </Col>
                      <Col md={6} lg={7}>
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
