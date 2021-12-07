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
      <Container fluid>
        <div className="b2b">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src="icon/users_key-4.png" />
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
                    <Link to="/detail-b2b">
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
                  <div className="box-typecar mt-4">
                    <Form onSubmit={submitHandler}>
                      <Row>
                        <Col md={3} className="set-col-b2b">
                          <Form.Control
                            type="text"
                            name="q"
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                            className="text-left search-btn-top"
                          ></Form.Control>
                        </Col>
                        <Col className="set-col-b2b">
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder="ยี่ห้อรถ"
                            options={carband}
                          />
                        </Col>
                        <Col className="set-col-b2b">
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder="รุ่นรถ"
                            options={carmodel}
                          />
                        </Col>
                        <Col className="set-col-b2b">
                          {' '}
                          <Select
                            className="text-left select-style"
                            aria-label="Default select example"
                            placeholder="ป้ายทะเบียน"
                            options={licenseplate}
                          />
                        </Col>
                        <Col className="set-col-b2b">
                          <Button className="btn-block">
                            {/* onClick={onClear} */}
                            คืนค่า
                          </Button>
                        </Col>
                        <Col className="set-col-b2b">
                          <Button
                            className="btn-block  "
                            style={{ padding: 0, margin: 0 }}
                          >
                            {/* onClick={() => search()} */}
                            ค้นหา
                            <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                </Col>
                <Col style={{ padding: 0 }}>
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
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>s</td>
                        <td>
                          <LinkContainer to={`/deshbord`} className="link">
                            <Button className="view-member"></Button>
                          </LinkContainer>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col>
                  <Row>
                    <Col md={3}>
                      <Row>
                        <Col md={2} className="set-page">
                          แสดง
                        </Col>

                        <Col>
                          <Select
                            className="text-center select-style"
                            aria-label="Default select example"
                            placeholder="ทั้งหมด"
                            options={view_data}
                          />
                        </Col>
                        <Col md={2} className="set-page">
                          รายการ
                        </Col>
                      </Row>
                    </Col>
                    <Col className="set-pagination">
                      <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>

                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Item>{11}</Pagination.Item>
                        <Pagination.Item active>{12}</Pagination.Item>
                        <Pagination.Item>{13}</Pagination.Item>
                        <Pagination.Item disabled>{14}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{20}</Pagination.Item>
                        <Pagination.Next />
                      </Pagination>
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
