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
import MenuBill from '../Components/layout/MenuBill';
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

  const [page, setPage] = useState({ value: '', label: '' });

  const OptionPage = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];
  function SetPage(data) {
    setPage({ value: data.value, label: data.value });
  }
  function close() {
    let path = `/`;
    history.push(path);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Job Bill">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  Bill
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
                  Bill
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuBill />
                </Row>
                <Row className="g-0 justify-content-center mt-3 m-0">
                  <Col className="set-table p-0">
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th className="text-left">เลขที่บิล</th>
                          <th className="text-left">เลขที่ JOB</th>
                          <th className="text-left">วันที่</th>
                          <th className="text-left">รหัสลูกค้า</th>
                          <th className="text-left"> ชื่อลูกค้า</th>
                          <th className="text-left">ชื่อผู้ชำระ</th>
                          <th className="text-left">ทะเบียนรถ </th>
                          <th className="text-left">ข้อมูลรถ</th>
                          <th className="text-left">ยอดรวม</th>
                          <th className="text-left">การชำระ</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td className="text-left">0406010300002</td>
                          <td className="text-left">0406010300002</td>
                          <td className="text-left">11/06/2564</td>
                          <td className="text-left">MRK6010300002</td>
                          <td className="text-left">
                            นภาวรรณ ยั่งยืน (คุณมิว)
                          </td>
                          <td className="text-left">
                            นภาวรรณ ยั่งยืน (คุณมิว)
                          </td>
                          <td className="text-left">กด-252 เชียงใหม่</td>
                          <td className="text-left">Honda Civic 2019</td>
                          <td className="text-left">4500</td>
                          <td className="text-left">รอชำระ</td>
                          <td className="text-left">
                            <Button
                              type="button"
                              className="button-image"
                            ></Button>
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
                          options={OptionPage}
                          onChange={(data) => SetPage(data)}
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
