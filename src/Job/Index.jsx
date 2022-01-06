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
import TabsIconJob from '../Components/layout/TabsIconJob';
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuJob from '../Components/layout/MenuJob';
import Write from '../assets/icon/add-staff.png';
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

  const [statepage, setStatepage] = useState('');
  const [status, setStatus] = useState([
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: 'รออนุมัติ', label: 'รออนุมัติ' },
    { value: 'อนุมัติ', label: 'อนุมัติ' },
    { value: 'ปฎิเสธ', label: 'ปฎิเสธ' },
    { value: 'รอดำเนินการ', label: 'รอดำเนินการ' },
    { value: 'ดำเนินการ', label: 'ดำเนินการ' },
    { value: 'ยกเลิก', label: 'ยกเลิก' },
    { value: 'เสร็จสิ้น', label: 'เสร็จสิ้น' },
  ]);
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
      <Container fluid className="package-container Service Stock Job">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>JOB</b>
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
                  <img className="logo pr-2" src={Service} />
                  <b>JOB</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIconJob />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuJob />
                </Row>
                {/* <Row className="g-0 justify-content-center">
                  <GroupButtonStock />
                </Row> */}

                <Row className="g-0 justify-content-center mt-3 m-0">
                  <Col className="set-table">
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th>เลขที่ JOB</th>
                          <th>วันที่</th>
                          <th>ประเภท</th>
                          <th>รหัสลูกค้า</th>
                          <th>ชื่อลูกค้า</th>
                          <th>ทะเบียนรถ </th>
                          <th>ข้อมูลรถ</th>
                          <th>ยอดรวม</th>
                          <th>ราคาขาย</th>
                          <th>สถานะ</th>
                          <th>มอบหมายงาน</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td>0406010300002</td>
                          <td>11/06/2564</td>
                          <td>ภายใน</td>
                          <td>MRK6010300002 </td>
                          <td>นภาวรรณ ยั่งยืน (คุณมิว)</td>
                          <td>กด-252 เชียงใหม่</td>
                          <td>Honda Civic 2019 </td>
                          <td>4500</td>
                          <td>4500</td>
                          <td className="">
                            <Select
                              className="text-left select-style select-table"
                              aria-label="Default select example"
                              placeholder=""
                              options={status}
                            />
                          </td>
                          <td>
                            <a href="/" className="text-dark border-bottom">
                              มอบหมายงาน
                            </a>
                          </td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>

                <Row className="g-0 mt-3 mb-3">
                  <Col sm={6} md={6} lg={4} className=" set-page">
                    <Row>
                      <Col className="d-flex justify-content-center align-items-center">
                        <p style={{ margin: 0 }}>แสดง</p>
                      </Col>
                      <Col sm={5} md={6} lg={6}>
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
