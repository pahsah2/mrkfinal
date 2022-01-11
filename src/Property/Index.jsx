import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabIconAssets from '../Components/layout/TabIconProperty';
import MenuProperty from '../Components/layout/MenuProperty';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Branch_manage from '../assets/icon/branch-manage.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Note from '../assets/icon/address_book.png';
import View from '../assets/icon/view-member.png';
import Property from '../Components/Property/Property';
import ViewAll from '../Components/Property/ViewAll';
export default function Index() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);
  const [key, setKey] = useState('Property');

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Staff   Property bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>รายการทรัพย์สิน</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePackage}
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
                  onClick={closePackage}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>รายการทรัพย์สิน</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabIconAssets />
                </Row>
                <Row className="g-0 justify-content-center">
                  <MenuProperty />
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
                        <Tab eventKey="Property" title="รายการทรัพย์สิน">
                          <Row className="Data-height justify-content-center">
                            <Property />
                          </Row>
                        </Tab>
                        <Tab eventKey="Dashboard " title="ภาพรวม">
                          <Row className="Data-height justify-content-center">
                            <ViewAll />
                          </Row>
                        </Tab>
                      </Tabs>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
