import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import Service from '../assets/icon/management.png';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIcon from '../Components/layout/TabsIcon';
import GroupButtonStock from '../Components/layout/GroupButtonStock';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import MenuJob from '../Components/layout/MenuJob';
import Write from '../assets/icon/flat-style-circle-write.png';
import Arrow from '../assets/icon/arrow.png';
import Document from '../assets/icon/document.png';
import Search from '../assets/icon/eyes-search.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Return from '../assets/icon/flat-style-circle-turn-on.png';

import OrderComponent from '../Components/Job/Order';
import StatusLog from '../Components/Job/StatusLog';
import JobAssign from '../Components/Job/JobAssign';
export default function Order() {
  const history = useHistory();
  const [key, setKey] = useState('Order');

  function close() {
    let path = `/`;
    history.push(path);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Job">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>JOB &gt; ภายในร้าน &gt; Order</b>
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
                  <b>JOB &gt; ภายในร้าน &gt; Order</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 justify-content-center ">
                  <Col>
                    <Tabs
                      id="controlled-tab-example"
                      activeKey={key}
                      onSelect={(k) => setKey(k)}
                      className="mb-3"
                    >
                      <Tab eventKey="Order" title="Order">
                        <OrderComponent />
                      </Tab>
                      <Tab eventKey="Status Log" title="Status Log">
                        <StatusLog />
                      </Tab>
                      <Tab eventKey="Job Assign" title="Job Assign">
                        <JobAssign />
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
                <Row className="g-0 justify-content-center mt-3"></Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
