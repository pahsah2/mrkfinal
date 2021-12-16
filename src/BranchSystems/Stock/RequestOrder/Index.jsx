import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Pagination } from 'react-bootstrap';
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
import MenuStock_Request_Order from '../../Components/layout/MenuStock_Request_Order';
export default function Index() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const [page, setPage] = useState([
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ]);
  const handleSelectPage = (e) => setStatepage(e);
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  สต็อก &gt; คำร้องสั่งสินค้า
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
                  สต็อก &gt; คำร้องสั่งสินค้า
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuStock_Request_Order />
                </Row>
                {/* <Row className="g-0 justify-content-center">
                  <GroupButtonStock />
                </Row> */}
                <Row className="g-0 justify-content-center">
                  <Row
                    className=" mt-3"
                    style={{ overflow: 'scroll', height: '500px' }}
                  >
                    <table className="table table-responsive table-wash-part ">
                      <thead>
                        <tr className="t-header-package">
                          <th>เลขที่สั่งซื้อ</th>
                          <th>สาขา</th>
                          <th>วันที่</th>
                          <th>คู่ค้า</th>
                          <th>รายการตัวอย่าง</th>
                          <th>ราคารวม</th>
                          <th>ผู้ทำรายการ</th>
                          <th>สถานะ</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody className="t-body-package ">
                        <tr>
                          <td>PO2021070001</td>
                          <td>สวนดอก</td>
                          <td>11/06/2564</td>
                          <td>รุ่งเรืองฟิล์ม</td>
                          <td>ฟิล์มติดระจก(ดำ100%)</td>
                          <td>100,000</td>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>อนุมัติ</td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>PO2021070001</td>
                          <td>สวนดอก</td>
                          <td>11/06/2564</td>
                          <td>รุ่งเรืองฟิล์ม</td>
                          <td>ฟิล์มติดระจก(ดำ100%)</td>
                          <td>100,000</td>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>ส่งสินค้า</td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>PO2021070001</td>
                          <td>สวนดอก</td>
                          <td>11/06/2564</td>
                          <td>รุ่งเรืองฟิล์ม</td>
                          <td>ฟิล์มติดระจก(ดำ100%)</td>
                          <td>100,000</td>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>สำเร็จ</td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>PO2021070001</td>
                          <td>สวนดอก</td>
                          <td>11/06/2564</td>
                          <td>รุ่งเรืองฟิล์ม</td>
                          <td>ฟิล์มติดระจก(ดำ100%)</td>
                          <td>100,000</td>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>ตีกลับ</td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>PO2021070001</td>
                          <td>สวนดอก</td>
                          <td>11/06/2564</td>
                          <td>รุ่งเรืองฟิล์ม</td>
                          <td>ฟิล์มติดระจก(ดำ100%)</td>
                          <td>100,000</td>
                          <td>อวิกา ศรีโพธิ์ทอง</td>
                          <td>รออนุมัติ</td>
                          <td>
                            <Button type="" className="button-package">
                              <img src={Search} />
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Row>
                </Row>
                <Row className="g-0 mt-3 mb-3">
                  <Col lg={4} xl={4} className=" set-page">
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

                  <Col
                    md={8}
                    className="d-flex justify-content-end set-paginate"
                  >
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
