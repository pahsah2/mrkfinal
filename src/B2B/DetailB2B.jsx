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
  Tabs,
  Tab,
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

import DataB2B from '../Components/B2B/Data';
import History from '../Components/B2B/History';
import DamageReport from '../Components/B2B/DamageReport';
import ViewAll from '../Components/B2B/Viewall';

export default function DetailB2B() {
  const history = useHistory();
  const [key, setKey] = useState('data');
  function close() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid>
        <div className="detail-b2b">
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
                    {/* <Link to="/detail-b2b">
                      <Button className="up-member">
                        <img src="icon/file_blue_grad_paint-0 2.png" alt="" />
                        <p>เพิ่มรายชื่อ</p>
                      </Button>
                    </Link> */}
                  </div>
                </Col>
                <Col className="justify-content-start  " style={{ padding: 0 }}>
                  <div className="box-typecar mt-4">
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-4"
                    >
                      <Tab eventKey="data" title="ข้อมูล">
                        <DataB2B />
                      </Tab>
                      <Tab eventKey="history-service" title="ประวัติรับบริการ">
                        <History />
                      </Tab>
                      <Tab eventKey="view-all" title="ภาพรวม">
                        <ViewAll />
                      </Tab>
                      <Tab eventKey="damagereport" title="บันทึกความเสียหาย">
                        <DamageReport />
                      </Tab>
                    </Tabs>
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
