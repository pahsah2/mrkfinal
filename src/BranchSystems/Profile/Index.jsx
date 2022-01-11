import React, { useState } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';
import Back from '../../assets/icon/back.png';
import Staff from '../../assets/icon/staff.png';
import Service from '../../assets/icon/management.png';
import TabsIcon from '../Components/layout/TabsIcon';
import DataProfile from '../Components/Profile/Data';
import Dashboard from '../Components/Profile/Dashboard';
export default function Index() {
  const [key, setKey] = useState('DataProfile');

  const history = useHistory();

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Staff Profile bg-mrk">
        {/* staff เอาไว้ใช้ style grid  , Profile เอาไว้ใช้ scss ส่วน profile เพิ่มเติม */}
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  โปรไฟล์
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
                  โปรไฟล์
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
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
                        <Tab eventKey="DataProfile" title="ข้อมูลส่วนตัว">
                          <Row className="Data-height justify-content-center">
                            <DataProfile />
                          </Row>
                        </Tab>
                        <Tab eventKey="Dashboard " title="Dashboard ">
                          <Row className="Data-height justify-content-center">
                            <Dashboard />
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
