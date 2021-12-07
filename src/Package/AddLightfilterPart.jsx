import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Tab, Tabs } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import MiddlePrice_LightfilterPart from '../Components/Package/LightfilterPart/MiddlePrice';
import AddLightfilterPartComponent from '../Components/Package/LightfilterPart/AddLightfilterPart';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';

import '../assets/scss/style.scss';
import TabsIcon from '../Components/layout/TabsIcon';
import Back from '../assets/icon/back.png';
import Package_image from '../assets/icon/package.png';

export default function AddLightfilterPart() {
  const history = useHistory();

  function closeAddWashPart() {
    let path = `/package`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Package_image} />
                  การจัดการแพ็กเกจ &gt; บริการฟิล์มกรองแสง
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closeAddWashPart}
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
                  onClick={closeAddWashPart}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Package_image} />
                  การจัดการแพ็กเกจ &gt; บริการฟิล์มกรองแสง
                </h5>
              </div>
              <div className="modal-body ">
                <Row className="tabsicon">
                  <TabsIcon />
                </Row>
                <Row className="tabs-button">
                  <Col>
                    <Tabs
                      defaultActiveKey="MiddlePrice_WashPart"
                      transition={false}
                      id="noanim-tab-example"
                      className="tabs-package mb-3"
                    >
                      <Tab eventKey="MiddlePrice_WashPart" title="ราคากลาง">
                        <MiddlePrice_LightfilterPart />
                      </Tab>
                      <Tab eventKey="AddWashPartComponent" title="ราคา B2B">
                        <AddLightfilterPartComponent />
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
