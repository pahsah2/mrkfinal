import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
} from 'react-bootstrap';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabIconManagement from '../Components/layout/TabIconManagement';
import MenuManagement from '../Components/layout/MenuManagement';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Branch_manage from '../assets/icon/branch-manage.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Note from '../assets/icon/address_book.png';
import View from '../assets/icon/view-member.png';
export default function Index() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Management">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Branch_manage} />
                  การจัดการสาขา
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
                  <img className="logo pr-2" src={Branch_manage} />
                  การจัดการสาขา
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabIconManagement />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuManagement />
                </Row>
                <Row className="g-0 justify-content-center">
                  <Row
                    className=" mt-3"
                    style={{ overflow: 'scroll', height: '500px' }}
                  >
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th>ชื่อสาขา</th>
                          <th>เวลาเปิด-ปิด</th>
                          <th>ติดต่อ</th>
                          <th>การใช้งาน</th>

                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td>กาดหลวง</td>
                          <td>08:00-17:00 น.</td>
                          <td style={{ 'min-width': '20%' }}>
                            นภาวรรณ ยั่งยืน (คุณมิว) <br />
                            0816659494
                          </td>
                          <td style={{ color: 'green' }}>เปิด</td>
                          <td></td>
                          <td classname="set-button-table-management">
                            <Button type="" className=" m-2">
                              <img src={Note} />
                            </Button>
                            <Button type="" className=" m-2">
                              <img src={View} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Row>
                </Row>
                <Row className="g-0 mt-3 mb-3">
                  <Col className="d-flex justify-content-start set-page-service">
                    <p>แสดง</p>

                    <div className="input-dropdown">
                      <Form.Control
                        type="text"
                        placeholder="ทั้งหมด"
                        // defaultValue={statepage[0]}
                        value={statepage}
                        onChange={(e) => setStatepage(e.target.value)}
                        disabled
                      ></Form.Control>
                      <Col
                        className="d-flex justify-content-end set-dropdown"
                        style={{ padding: 0 }}
                      >
                        <Dropdown
                          onSelect={handleSelectPage}
                          className="dropdown"
                        >
                          <Dropdown.Toggle
                            variant="secondary "
                            id="dropdown-basic"
                          >
                            {/* {value} */}
                          </Dropdown.Toggle>
                          <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                            <Dropdown.Item eventKey="ทั้งหมด">
                              ทั้งหมด
                            </Dropdown.Item>
                            <Dropdown.Item eventKey="10">10</Dropdown.Item>
                            <Dropdown.Item eventKey="15">15</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </Col>
                    </div>
                    <p>รายการ</p>
                  </Col>

                  <Col className="d-flex justify-content-end set-paginate-service">
                    <div className="box-paginate">
                      <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>

                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item>{3}</Pagination.Item>
                        <Pagination.Item active>{4}</Pagination.Item>
                        <Pagination.Item>{5}</Pagination.Item>
                        <Pagination.Item>{6}</Pagination.Item>

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
