import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
  Tabs,
  Tab,
} from 'react-bootstrap';
import { Table, Label, Input, FormGroup } from 'reactstrap';

import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabIconStaff from '../Components/layout/TabIconStaff';
import MenuStaff from '../Components/layout/MenuStaff';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Key_staff from '../assets/icon/key-fix.png';
import DamageReport from '../Components/Staff/DamageReport';
import Log from '../Components/Staff/Log';
import Data from '../Components/Staff/Data';
import AddData from '../Components/Staff/AddData';
export default function Index() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const [key, setKey] = useState('Adddata');
  const handleSelectPage = (e) => setStatepage(e);
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Staff">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  พนักงาน &gt; รายชื่อพนักงาน &gt; เพิ่มพนักงาน
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
                  พนักงาน &gt; รายชื่อพนักงาน &gt; เพิ่มพนักงาน
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabIconStaff />
                </Row>
                <Row className="g-0 justify-content-center Staff-tabs">
                  <Col className="justify-content-start  ">
                    <div className="box-typecar ">
                      <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-4"
                      >
                        <Tab eventKey="Adddata" title="ข้อมูลส่วนตัว">
                          <Row className="Data-height justify-content-center">
                            <AddData />
                          </Row>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
                <Row className="g-0 mt-3 mb-3"></Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
