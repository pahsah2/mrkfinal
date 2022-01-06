import React, { useState } from 'react';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
} from 'reactstrap';

import { Container, Row, Col } from 'react-bootstrap';
import CustomerInfo from '../Components/Member/CustomerInfo';
import CarInfo from '../Components/Member/CarInfo';
import CustomerHistory from '../Components/Member/CustomerHistory';
import MemberWarranty from '../Components/Member/MemberWarranty';
import MemberPackage from '../Components/Member/MemberPackage';
import MemberOverall from '../Components/Member/MemberOverall';
import TabsIcon from '../Components/layout/TabsIcon';
import Service from '../assets/icon/management.png';
import Back from '../assets/icon/back.png';
import save from '../assets/icon/new-save.png';
import cancel from '../assets/icon/new-cancel.png';

export default function MemberInformation() {
  const [stateActiveTab, setStateActiveTab] = useState({ activeTab: 'tab1' });

  const history = useHistory();

  function close() {
    let path = `/member`;
    history.push(path);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div className="memberinformation">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Service} />
                    <b> บุคคลธรรมดา &#62; ข้อมูลส่วนตัว</b>
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
                    <img className="logo pr-2" src={Service} />
                    <b> บุคคลธรรมดา &#62; ข้อมูลส่วนตัว</b>
                  </h5>
                </div>
                <div className="modal-body ">
                  <Col className="icon-menu">
                    <TabsIcon />
                  </Col>
                  <Col className="tabs-form mb-3">
                    <Row className="m-0">
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setStateActiveTab({ activeTab: 'tab1' });
                        }}
                        className={
                          stateActiveTab.activeTab === 'tab1' && 'active'
                        }
                      >
                        ข้อมูลส่วนตัว
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setStateActiveTab({ activeTab: 'tab2' });
                        }}
                        className={
                          stateActiveTab.activeTab === 'tab2' && 'active'
                        }
                      >
                        ข้อมูลรถ
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setStateActiveTab({ activeTab: 'tab3' });
                        }}
                        className={
                          stateActiveTab.activeTab === 'tab3' && 'active'
                        }
                      >
                        ประวัติรับบริการ
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setStateActiveTab({ activeTab: 'tab4' });
                        }}
                        className={
                          stateActiveTab.activeTab === 'tab4' && 'active'
                        }
                      >
                        ภาพรวม
                      </Button>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          setStateActiveTab({ activeTab: 'tab5' });
                        }}
                        className={
                          stateActiveTab.activeTab === 'tab5' && 'active'
                        }
                      >
                        แพ็กเกจ
                      </Button>
                    </Row>
                  </Col>
                  <Col style={{ padding: 0 }}>
                    {stateActiveTab.activeTab === 'tab1' && <CustomerInfo />}
                    {stateActiveTab.activeTab === 'tab2' && <CarInfo />}
                    {stateActiveTab.activeTab === 'tab3' && <CustomerHistory />}
                    {stateActiveTab.activeTab === 'tab4' && <MemberOverall />}
                    {stateActiveTab.activeTab === 'tab5' && <MemberPackage />}
                  </Col>
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
