import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Pagination,
  Button,
  Table,
} from 'react-bootstrap';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';
import Select, { components } from 'react-select';
import view from '../assets/icon/view-data.png';
import Write from '../assets/icon/add-staff.png';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIconProduct from '../Components/layout/TabsIconProduct';
import Back from '../assets/icon/back.png';
import MenuProduct from '../Components/layout/MenuProduct';
import Management from '../assets/icon/management.png';
export default function Index() {
  const history = useHistory();
  const [page, setPage] = useState([{ value: '', label: '' }]);

  const optionPage = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];
  function closeProduct() {
    let path = `/`;
    history.push(path);
  }
  function SetNumberPerPage(data) {
    setPage({ value: data.value, label: data.value });
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div>
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Management} />
                    <b>สินค้า</b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeProduct}
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
                    onClick={closeProduct}
                  >
                    <img src={Back} />
                  </button>
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Management} />
                    <b>สินค้า</b>
                  </h5>
                </div>
                <div className="modal-body set-menu-productmanage">
                  <Row className="g-0 tabsicon justify-content-center ">
                    <TabsIconProduct />
                  </Row>
                  <Row className="g-0 justify-content-center mb-3">
                    <MenuProduct />
                  </Row>
                  <Row className="g-0 justify-content-center m-0">
                    <Col className="set-table-stock p-0">
                      <Table className="table table-responsive table-wash-part ">
                        <thead>
                          <tr className="t-header-package">
                            <th>รหัสสินค้า</th>
                            <th>ชื่อสินค้า</th>
                            <th>หมวดหมู่</th>
                            <th>ประเภท</th>
                            <th>จุดสั่งซื้อ</th>
                            <th>จุดต่ำ</th>
                            <th>หมายเหตุ</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody className="t-body-package ">
                          <tr>
                            <td>0406010300002</td>
                            <td>น้ำยาเคลือบเงา</td>
                            <td>น้ำยา</td>
                            <td>ขายและใช้งาน</td>
                            <td>15</td>
                            <td>3</td>
                            <td></td>
                            <td>
                              <Button className="view-button">
                                <img src={Write} alt="" />
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </Col>
                  </Row>
                  <Row className="g-0 mt-3 mb-3">
                    <Col lg={5} className=" set-page">
                      <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                          <p style={{ margin: 0 }}>แสดง</p>
                        </Col>
                        <Col lg={7}>
                          <Select
                            options={optionPage}
                            defaultValue={optionPage[0]}
                            isClearable={false}
                            isSearchable={false}
                            onChange={(data) => SetNumberPerPage(data)}
                            className="select-list"
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
        </div>
      </Container>
      <Footer />
    </>
  );
}
