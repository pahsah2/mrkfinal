import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Input } from 'reactstrap';
import 'antd/dist/antd.css';
import { Select } from 'antd';

import AddJuristicPart from './AddJuristicPart';
import AddOrdinaryPart from './AddOrdinaryPart';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';

import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import $ from 'jquery';
export default function MemberCreate() {
  const [state1, setState1] = useState({ showOrdinary: true });
  const [state2, setState2] = useState({ showJuristic: false });
  const history = useHistory();
  const { Option } = Select;

  function close() {
    let path = `/`;
    history.push(path);
  }
  function return_member() {
    let path_member = `/member`;
    history.push(path_member);
  }

  function ordinary() {
    setState1({ showOrdinary: true });
    setState2({ showJuristic: false });
  }
  function juristic() {
    setState1({ showOrdinary: false });
    setState2({ showJuristic: true });
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid>
        <div className="member-create">
          <div>
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img src="icon/management.png" alt="" /> ลูกค้า &#62; สร้าง
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
                <div className="modal-body ">
                  <Row>
                    <Col lg={12} className="d-flex justify-content-start">
                      <div className="tabs-icon mb-4">
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
                      </div>
                    </Col>
                    <Col lg={12} md={12} className="justify-content-start">
                      <div className="box-typecar">
                        <div className="row align-items-center">
                          <div className="col-md-3 col-lg-1 mr-2 ml-2 text-add">
                            <label>ประเภทสมาชิก</label>
                          </div>
                          <div className="col-md-3 col-lg-1 ml-2 text-add">
                            <Input
                              className="form-check-input"
                              name="member-check"
                              type="radio"
                              id="flexRadioDefault1"
                              defaultChecked
                              onClick={() => ordinary()}
                            />{' '}
                            บุคลธรรมดา
                          </div>
                          <div className="col-md-1 text-add">
                            <Input
                              className="form-check-input"
                              name="member-check"
                              type="radio"
                              id="flexRadioDefault2"
                              onClick={() => juristic()}
                            />{' '}
                            นิติบุคคล
                          </div>
                          <br />
                        </div>
                      </div>
                    </Col>
                    <Col>
                      <Form>
                        {state1.showOrdinary ? <AddOrdinaryPart /> : null}
                        {state2.showJuristic ? <AddJuristicPart /> : null}
                      </Form>
                    </Col>
                    <Col lg={12} md={12}>
                      <button
                        className="btn-modal mr-4 float-left"
                        align="center"
                      >
                        <img src="icon/system_restore-2 1.png" /> บันทึก
                      </button>
                      <button
                        className="btn-modal float-right"
                        align="center"
                        onClick={return_member.bind(this)}
                      >
                        <img src="icon/unplug_storage-0 1.png" /> ออก
                      </button>
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