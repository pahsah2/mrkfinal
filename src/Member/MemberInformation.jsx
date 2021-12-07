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
      <Container fluid>
        <div>
          <div className="memberinformation">
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img src="icon/management.png" alt="" /> ลูกค้า &#62;
                    บุคคลธรรมดา &#62; ข้อมูลส่วนตัว
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
                <div className="modal-body ">
                  <Col className="icon-menu">
                    <div className="tabs-icon mb-4">
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
                    </div>
                  </Col>
                  <Col className="tabs-form">
                    <div className="">
                      <div className="button-tabs">
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
                      </div>
                    </div>
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
