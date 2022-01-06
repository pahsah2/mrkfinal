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
import TabsIconAdd from '../Components/layout/TabsIconAdd';
import MenuInput from '../Components/layout/MenuInput';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Write from '../assets/icon/flat-style-circle-write.png';
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
      <Container fluid className="package-container Service bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  บริการ
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
                  บริการ
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIconAdd />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuInput />
                </Row>
                <Row className="g-0 justify-content-center">
                  <Row
                    className=" mt-3"
                    style={{ overflow: 'scroll', height: '500px' }}
                  >
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th style={{ width: '15%', textAlign: 'left' }}>
                            รหัสบริการ
                          </th>
                          <th>ชื่อบริการ</th>
                          <th>หมวดหมู่</th>
                          <th>ราคา </th>
                          <th>หมายเหตุ</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                      <tbody className="t-body-package ">
                        <tr>
                          <td style={{ textAlign: 'left' }}>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>1,000</td>
                          <td></td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Write} />
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
