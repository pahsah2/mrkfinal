import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';

import { useHistory } from 'react-router-dom';
import AddProductModal from '../Components/ProductManageComponents/AddProductModal';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
export default function Index() {
  const history = useHistory();

  function closeProduct() {
    let path = `/`;
    history.push(path);
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
                    <img className="logo pr-2" src="icon/staff.png" />
                    สินค้า
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeProduct}
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body set-menu-productmanage">
                  <div className="col row">
                    <Row className="d-flex justify-content-start">
                      <Col
                        lg={12}
                        className="justify-content-start button-icon"
                      >
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/address_book_home.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/appwizard_list.png"
                          />
                        </button>
                        <button className="btn btn-icon mr-2">
                          <img
                            className="modal-icon"
                            src="icon/directory_open_file_mydocs_cool-1.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/directory_closed-4.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/management.png"
                          />
                        </button>
                        <button className="btn btn-icon mr-2">
                          <img
                            className="modal-icon"
                            src="icon/briefcase-4.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/message_file-0.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img
                            className="modal-icon"
                            src="icon/users_key-4.png"
                          />
                        </button>
                        <button className="btn btn-icon mr-2">
                          <img
                            className="modal-icon"
                            src="icon/network_normal_two_pcs-4.png"
                          />
                        </button>
                        <button className="btn btn-icon">
                          <img className="modal-icon" src="icon/chart1-4.png" />
                        </button>
                        <button
                          className="btn btn-icon ml-3 px-4"
                          data-toggle="modal"
                          data-target="#addproductModal"
                          data-dismiss="modal"
                        >
                          <img src="icon/flat-style-circle-add_icon-icons 6.png" />{' '}
                          เพิ่มสินค้า
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="ค้นหาด้วยรหัสสินค้า,หมวดหมู่"
                      />
                    </div>
                    <div className="col-md-2">
                      <select className="form-control">
                        <option>ประเภท</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <select className="form-control">
                        <option>หมวดหมู่</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <button className="btn px-4 mr-2">
                        <img src="icon/iconfinder-search.png" /> ค้นหา
                      </button>
                      <button className="btn px-4">
                        <img src="icon/undo_icon.png" /> คืนค่า
                      </button>
                    </div>
                  </div>
                  <br />
                  <div>
                    <table className="table">
                      <thead>
                        <tr className="t-header">
                          <th>รหัสสินค้า</th>
                          <th>ชื่อสินค้า</th>
                          <th>หมวดหมู่</th>
                          <th>ประเภท</th>
                          <th>จุดสั่งซื้อ</th>
                          <th>จุดต่ำ</th>
                          <th>สถานที่เก็บ</th>
                          <th>หมายเหตุ</th>
                        </tr>
                      </thead>
                      <tbody className="t-body">
                        <tr>
                          <td>0406010300002</td>
                          <td>อบโอโซน</td>
                          <td>ทำความสะอาด</td>
                          <td>ราคาเหมา</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td align="right">
                            <img src="icon/flat-style-circle-edit_icon-icons 13.png" />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="row">
                      <Row>
                        <Col className="d-flex justify-content-start">
                          <div className="col-md-1 mt-2">
                            <p>แสดง</p>
                          </div>

                          <div className="col-md-4 division">
                            <select className="form-control ">
                              <option>แผนก</option>
                            </select>
                          </div>
                        </Col>
                        <Col className="d-flex justify-content-start">
                          <div className="justify-content-end pagination-footer">
                            <div className="col-md-5">
                              <ul className="pagination">
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Previous"
                                  >
                                    <span aria-hidden="true">&#9664;</span>
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    1
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    2
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    3
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    ...
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a className="page-link" href="#">
                                    10
                                  </a>
                                </li>
                                <li className="page-item">
                                  <a
                                    className="page-link"
                                    href="#"
                                    aria-label="Next"
                                  >
                                    <span aria-hidden="true">&#9654;</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
                <div className="modal-footer"></div>
              </div>
            </div>
          </div>
          <AddProductModal />
        </div>
      </Container>
      <Footer />
    </>
  );
}
