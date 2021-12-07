import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  Container,
  Row,
  Col,
  ModalBody,
  Pagination,
  Form,
  Dropdown,
} from 'react-bootstrap';
import { Table, Button, Label, Input, FormGroup } from 'reactstrap';
import {} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import Select, { components } from 'react-select';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';
import '../assets/scss/style.scss';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faCaretDown);

export default function Index() {
  const history = useHistory();
  const [allSerach, setAllSerach] = useState('');

  const [segment, setSegment] = useState('');

  const [statemodel, setStatemodel] = useState('');
  const [statebrand, setStatebrand] = useState('');
  const [licenseplate, setLicenseplate] = useState('');
  const [statepage, setStatepage] = useState('');

  const [stateplateSearch, setStateplateSearch] = useState({
    plateSearch: 'not plate',
  });

  const handleSelectSegment = (e) => setSegment(e);
  const handleSelectฺBrand = (e) => setStatebrand(e);
  const handleSelectModel = (e) => setStatemodel(e);
  const handleSelectPage = (e) => setStatepage(e);

  useEffect(() => {}, []);

  function closePage() {
    let path = `/`;
    history.push(path);
  }
  const onClear = (e) => {
    setAllSerach('');
    // selectSegment.current.select.clearValue();
  };
  const search = () => {};
  return (
    <>
      <NavbarTop />
      <Container fluid>
        <div className="member">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src="icon/management.png" />
                  รายชื่อลูกค้า
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePage}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <Col className="justify-content-start  " style={{ padding: 0 }}>
                  <div className="tabs-icon d-flex">
                    <Button>
                      <img src="icon/address_book_home.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/appwizard_list.png" alt="" />
                    </Button>
                    <Button>
                      <img
                        src="icon/directory_open_file_mydocs_cool-1.png"
                        alt=""
                      />
                    </Button>
                    <Button>
                      <img src="icon/directory_closed-4.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/management.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/briefcase-4.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/message_file-0.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/users_key-4.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/network_normal_two_pcs-4.png" alt="" />
                    </Button>
                    <Button>
                      <img src="icon/chart1-4.png" alt="" />
                    </Button>
                    <Link to="/membercreate">
                      <Button className="up-member">
                        <img src="icon/file_blue_grad_paint-0 2.png" alt="" />
                        <p>เพิ่มรายชื่อ</p>
                      </Button>
                    </Link>
                  </div>
                </Col>
                <Col
                  lg={12}
                  className="justify-content-center"
                  style={{ padding: 0 }}
                >
                  <Form>
                    <div className="mt-4">
                      <Row className="set-search-row">
                        <Form.Control
                          id="_input_search"
                          className="search-btn-top"
                          type="text"
                          placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                          value={allSerach}
                          onChange={(e) => setAllSerach(e.target.value)}
                        ></Form.Control>

                        <div className="input-dropdown-member">
                          <Form.Control
                            type="text"
                            placeholder="Segment"
                            // defaultValue={statepage[0]}
                            value={segment}
                            onChange={(e) => setSegment(e.target.value)}
                            disabled
                          ></Form.Control>
                          <Col
                            className="d-flex justify-content-end set-dropdown"
                            style={{ padding: 0 }}
                          >
                            <Dropdown
                              onSelect={handleSelectSegment}
                              className="dropdown"
                            >
                              <Dropdown.Toggle
                                variant="secondary "
                                id="dropdown-basic"
                              >
                                {/* {value} */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
                                <Dropdown.Item eventKey="MC">MC</Dropdown.Item>
                                <Dropdown.Item eventKey="MB">MB</Dropdown.Item>
                                <Dropdown.Item eventKey="MC">MC</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </div>

                        <div className="input-dropdown-member">
                          <Form.Control
                            type="text"
                            placeholder="ยี่ห้อรถ"
                            // defaultValue={statepage[0]}
                            value={statebrand}
                            onChange={(e) => setStatebrand(e.target.value)}
                            disabled
                          ></Form.Control>
                          <Col
                            className="d-flex justify-content-end set-dropdown"
                            style={{ padding: 0 }}
                          >
                            <Dropdown
                              onSelect={handleSelectฺBrand}
                              className="dropdown"
                            >
                              <Dropdown.Toggle
                                variant="secondary "
                                id="dropdown-basic"
                              >
                                {/* {value} */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
                                <Dropdown.Item eventKey="เบ๊นซ์">
                                  เบ้นซ์
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="ฮอนด้า">
                                  ฮอนด้า
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="โตโยต้า">
                                  โตโยต้า
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </div>

                        <div className="input-dropdown-member">
                          <Form.Control
                            type="text"
                            placeholder="รุ่นรถ"
                            // defaultValue={statepage[0]}
                            value={statemodel}
                            onChange={(e) => setStatemodel(e.target.value)}
                            disabled
                          ></Form.Control>
                          <Col
                            className="d-flex justify-content-end set-dropdown"
                            style={{ padding: 0 }}
                          >
                            <Dropdown
                              onSelect={handleSelectModel}
                              className="dropdown"
                            >
                              <Dropdown.Toggle
                                variant="secondary "
                                id="dropdown-basic"
                              >
                                {/* {value} */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
                                <Dropdown.Item eventKey="Cxx">
                                  Cxx
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="TO">TO</Dropdown.Item>
                                <Dropdown.Item eventKey="MK">MK</Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </div>

                        <div className="input-dropdown-member">
                          <Form.Control
                            type="text"
                            placeholder="ป้ายทะเบียน"
                            // defaultValue={statepage[0]}
                            value={licenseplate}
                            onChange={(e) => setLicenseplate(e.target.value)}
                            disabled
                          ></Form.Control>
                          <Col
                            className="d-flex justify-content-end set-dropdown"
                            style={{ padding: 0 }}
                          >
                            <Dropdown
                              onSelect={handleSelectModel}
                              className="dropdown"
                            >
                              <Dropdown.Toggle
                                variant="secondary "
                                id="dropdown-basic"
                              >
                                {/* {value} */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
                                <Dropdown.Item eventKey="สีแดง">
                                  สีแดง
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="สีขาว">
                                  สีขาว
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="ไม่มีป้าย">
                                  ไม่มีป้าย
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </div>

                        <Button className="btn-block " onClick={onClear}>
                          คืนค่า
                        </Button>

                        <Button
                          className="btn-block "
                          style={{ padding: 0, margin: 0 }}
                          onClick={() => search()}
                        >
                          ค้นหา{' '}
                          <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                        </Button>
                      </Row>
                      <Table
                        responsive
                        className="table-custom text-nowrap mt-4"
                      >
                        <thead>
                          <tr>
                            <th>รหัสสมาชิก</th>
                            <th>ชื่อสมาชิก</th>
                            <th>โทรศัพท์</th>
                            <th>ยี่ห้อ</th>
                            <th>รุ่น</th>
                            <th>ทะเบียน</th>
                            <th>สี</th>
                            <th>ใช้บริการล่าสุด</th>
                            <th>ยอดใช้บริการ</th>
                            <th>อายุสมาชิก</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>0406010300002</td>
                            <td>นภาวรรณ ยั่งยืน (คุณมิว)</td>
                            <td>
                              0816659494 <br /> 0635284746
                            </td>
                            <td>
                              Honda <br /> Honda <br /> Honda
                            </td>
                            <td>
                              Civic <br /> Jazz <br /> City
                            </td>
                            <td>
                              กด-252 เชียงใหม่ <br /> งจ-2544 เชียงใหม่ <br />{' '}
                              กต-4614 เชียงใหม่
                            </td>
                            <td>
                              ขาว <br /> แดง <br /> ดำ
                            </td>
                            <td>11/06/2564</td>
                            <td>4500 บาท</td>
                            <td>2 ปี 6 เดือน</td>
                            <td>
                              <Link to="/information">
                                <Button
                                  type="button"
                                  className="button-detail-member"
                                ></Button>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Form>
                </Col>
                <Col
                  lg={12}
                  className="justify-content-center"
                  style={{ padding: 0 }}
                >
                  <div className="">
                    <Row>
                      <Col className="box-left">
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
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
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
                      <Col className="box-right ">
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
                </Col>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
