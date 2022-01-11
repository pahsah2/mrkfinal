import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import LightfilterPart from '../Components/Package/LightfilterPart';
import CoatPart from '../Components/Package/CoatPart';
import ProtectivePart from '../Components/Package/ProtectivePart';
import WashPart from '../Components/Package/WashPart';
import ServiceFilter from '../Components/Package/ServiceFilter';
import SpecialPackage from '../Components/Package/SpecialPackage';

import '../assets/scss/style.scss';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIcon from '../Components/layout/TabsIcon';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
export default function Index() {
  const history = useHistory();

  const [show, setShow] = useState(true);

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  useEffect(() => {
    setShow(true);
  }, [show]);

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Staff} />
                  <b>การจัดการแพ็กเกจ</b>
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
                  <img className="logo pr-2" src={Staff} />
                  <b>การจัดการแพ็กเกจ</b>
                </h5>
              </div>
              <div className="modal-body ">
                <Row className="tabsicon m-0">
                  <TabsIcon />
                </Row>
                <Row className="tabs-button g-0">
                  <Col>
                    <Tabs
                      defaultActiveKey="WashPart"
                      transition={false}
                      id="noanim-tab-example"
                      className="tabs-package"
                    >
                      <Tab
                        eventKey="WashPart"
                        title="บริการล้างและเคลือบแว๊กซ์"
                      >
                        <WashPart />
                      </Tab>
                      <Tab
                        eventKey="LightfilterPart"
                        title="บริการฟิล์มกรองแสง"
                      >
                        <LightfilterPart />
                      </Tab>
                      <Tab eventKey="CoatPart" title="บริการเคลือบเหมา">
                        <CoatPart />
                      </Tab>
                      <Tab
                        eventKey="ProtectivePart"
                        title="บริการเคลือบเฉพาะจุด"
                      >
                        <ProtectivePart />
                      </Tab>
                      <Tab eventKey="ServiceFilter" title="บริการฟิล์มกันรอย">
                        <ServiceFilter />
                      </Tab>
                      <Tab eventKey="SpecialPackage" title="แพ็คเกจพิเศษ">
                        <SpecialPackage />
                      </Tab>
                    </Tabs>
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
