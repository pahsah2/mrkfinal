import React, { useState } from 'react';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  MenuItem,
  Pagination,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { Table, Label, Input, FormGroup } from 'reactstrap';
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
import TabsIconB2B from '../Components/layout/TabsIconB2B';
import B2B from '../assets/icon/users_key-4.png';
import Back from '../assets/icon/back.png';
import view from '../assets/icon/view-id.png';
export default function Index({ match }) {
  const history = useHistory();
  const [keyword, setKeyword] = useState('');
  function close() {
    let path = `/`;
    history.push(path);
  }
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const [page, setPage] = useState([
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ]);
  const carband = [
    { value: 'benz', label: 'เบ็นซ์' },
    { value: 'masda', label: 'มาสด้า' },
    { value: 'honda', label: 'ฮอนด้า' },
    { value: 'sport', label: 'สปอร์ต' },
  ];
  const carmodel = [
    {
      value: 'xx',
      label: 'เบ็นซ์ xxx',
    },
  ];
  const licenseplate = [
    { value: 'ป้ายธรรมดา', label: 'ป้ายธรรมดา' },
    { value: 'ป้ายแดง', label: 'ป้ายแดง' },
    { value: 'ไม่มีป้าย', label: 'ไม่มีป้าย' },
  ];
  const view_data = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];

  const onChange = () => {};

  let active = 1;
  let items = [];
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User B2B">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={B2B} />
                  Company (B2B)
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
                  <img className="logo pr-2" src={B2B} />
                  Company (B2B)
                </h5>
              </div>
              <div className="modal-body">
                <Col className="justify-content-start  " style={{ padding: 0 }}>
                  <Row>
                    <TabsIconB2B />
                  </Row>
                </Col>
                <Col
                  lg={12}
                  className="justify-content-center"
                  style={{ padding: 0 }}
                >
                  <div className="box-typecar ">
                    <Form onSubmit={submitHandler}>
                      <Row>
                        <Col lg={3} className="set-col-b2b mt-2 mb-2">
                          <Form.Control
                            type="text"
                            name="q"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                            className="text-left search-btn-top"
                          ></Form.Control>
                        </Col>
                        <Col xs={12} lg={2} className="set-col-b2b mt-2 mb-2">
                          <Select
                            options={carband}
                            placeholder="ยี่ห้อรถ"
                            isClearable={false}
                            isSearchable={false}
                            // onChange={(data) => SetNumberPerPage(data)}
                            className="select-list"
                          />
                        </Col>
                        <Col xs={12} lg={2} className="set-col-b2b mt-2 mb-2">
                          <Select
                            options={carmodel}
                            placeholder="รุ่นรถ"
                            isClearable={false}
                            isSearchable={false}
                            // onChange={(data) => SetNumberPerPage(data)}
                            className="select-list"
                          />
                        </Col>
                        <Col xs={12} lg={2} className="set-col-b2b mt-2 mb-2">
                          <Select
                            options={licenseplate}
                            placeholder="ป้ายทะเบียน"
                            isClearable={false}
                            isSearchable={false}
                            // onChange={(data) => SetNumberPerPage(data)}
                            className="select-list"
                          />
                        </Col>
                        <Col
                          xs={12}
                          className="set-col-b2b mt-2 mb-2 d-md-none"
                        >
                          <Button className="button">
                            {/* onClick={() => search()} */}
                            ค้นหา
                            <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                          </Button>
                        </Col>
                        <Col className="set-col-b2b mt-2 mb-2">
                          <Button className="button">
                            {/* onClick={onClear} */}
                            คืนค่า
                          </Button>
                        </Col>
                        <Col className="set-col-b2b mt-2 mb-2 set-hidden-b2b">
                          <Button className="button">
                            {/* onClick={() => search()} */}
                            ค้นหา &nbsp;
                            <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                          </Button>
                        </Col>
                        <Col className="set-col-b2b mt-2 mb-2 d-sm-none">
                          <Link to="/b2b/detail">
                            <Button className="button">เพิ่มรายชื่อ</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col style={{ padding: 0, height: '500px' }}>
                  <Table responsive className="table-custom text-nowrap mt-4">
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0406010300002</td>
                        <td>บริษัท นภาวรรณ กรุ๊ป </td>
                        <td>
                          0816659494 <br />
                          0635284746
                        </td>
                        <td>
                          Honda <br />
                          Honda <br />
                          Honda <br />
                        </td>
                        <td>
                          Civic <br />
                          Jazz <br />
                          City <br />
                        </td>
                        <td>
                          กด-252 เชียงใหม่ <br />
                          งจ-2544 เชียงใหม่ <br />
                          กต-4614 เชียงใหม่ <br />
                        </td>
                        <td>
                          ขาว <br />
                          แดง <br />
                          ดำ <br />
                        </td>
                        <td>11/06/2564</td>
                        <td>4500 บาท</td>
                        <td>2 ปี 6 เดือน</td>
                        <td>
                          <LinkContainer to={`/b2b/detail`} className="link">
                            <Button className="view-button">
                              <img src={view} alt="" />
                            </Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Row className="g-0 mt-3 mb-3">
                    <Col md={6} lg={6} className=" set-page">
                      <Row>
                        <Col className="d-flex justify-content-center align-items-center">
                          <p style={{ margin: 0 }}>แสดง</p>
                        </Col>
                        <Col md={6} lg={7} xl={6}>
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
