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
import TabsIcon from '../Components/layout/TabsIcon';
import B2B from '../assets/icon/users_key-4.png';
import Back from '../assets/icon/back.png';

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
      <Container fluid className="package-container Service Stock User B2B bg-mrk">
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
                  <TabsIcon />
                </Col>
                <Col className="justify-content-start  " style={{ padding: 0 }}>
                  <div className="box-typecar "></div>
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
