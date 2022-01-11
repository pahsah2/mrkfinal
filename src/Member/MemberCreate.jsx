import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Input } from 'reactstrap';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import Service from '../assets/icon/management.png';

import AddJuristicPart from './AddJuristicPart';
import AddOrdinaryPart from './AddOrdinaryPart';
import Back from '../assets/icon/back.png';

import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';

import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import $ from 'jquery';
export default function MemberCreate() {
  const [state1, setState1] = useState(true);
  const [state2, setState2] = useState(false);
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
    setState1(true);
    setState2(false);
  }
  function juristic() {
    setState2(true);
    setState1(false);
  }
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <NavbarTop />
      <Container
        fluid
        className="package-container Service Stock User Member bg-mrk"
      >
        <div className=" package">
          <div>
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Service} />
                    <b>ลูกค้า &gt; สร้าง</b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={close}
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
                    onClick={close}
                  >
                    <img src={Back} />
                  </button>
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Service} />
                    <b>ลูกค้า &gt; สร้าง</b>
                  </h5>
                </div>
                <div className="modal-body ">
                  <Row>
                    <Col lg={12} className="d-flex justify-content-start">
                      <div className="tabs-icon mb-4">
                        <TabsIcon />
                      </div>
                    </Col>
                    <Col xs={12} className="   mb-3 m-0">
                      <Row className="set-line m-0 align-items-center">
                        {['radio'].map((type) => (
                          <Col
                            key={`inline-${type}`}
                            className=" mt-3 text-left"
                          >
                            <Form.Label className="mr-3">
                              ประเภทสมาชิก
                            </Form.Label>
                            <Form.Check
                              inline
                              label="บุคลคธรรมดา"
                              name="group1"
                              type={type}
                              id={`inline-${type}-1`}
                              onClick={() => ordinary()}
                              checked={state1}
                            />
                            <Form.Check
                              inline
                              label="นิติบุคคล"
                              name="group1"
                              type={type}
                              id={`inline-${type}-2`}
                              onClick={() => juristic()}
                              checked={state2}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Col>

                    <Col>
                      <Form>
                        {state1 === true ? <AddOrdinaryPart /> : null}
                        {state2 === true ? <AddJuristicPart /> : null}
                      </Form>
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
