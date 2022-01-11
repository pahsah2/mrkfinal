import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import Status from '../assets/icon/ststus-appointment.png';

export default function AppointmentByID({ match, history }) {
  const orderId = match.params.id;

  const dispatch = useDispatch();
  const [notification, setNotification] = useState([{ value: '', label: '' }]);
  const [notificationType, setNotificationType] = useState([
    { value: '', label: '' },
  ]);
  const [appointment, setAppointment] = useState({
    Order: [
      {
        id: 2021010001,
        branch: 'สวนดอก',
        name: 'นภาวรรณ ยั่งยืน (คุณมิว)',
        phone: '065-4998856',
        work: 'ทรีตเมนต์ 3/5',
        date: '03/12/2021',
        time: '10:00',
        status: 'ใกล้ถึงวันนัด',
      },
    ],
  });
  function close() {
    let path = `/`;
    history.push(path);
  }

  useEffect(() => {}, [orderId]);
  return (
    <>
      <NavbarTop />
      <Container
        fluid
        className="package-container Service Stock Job Appointment bg-mrk"
      >
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>การนัดหมาย</b>
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
                  <b>การนัดหมาย</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <div className="set-appointment-id">
                  <Row className="g-0 justify-content-center mt-3 ">
                    <Col className="text-left  mb-3">
                      <Form.Label className="font-weight-bold">
                        Order
                      </Form.Label>
                    </Col>
                    {appointment.Order.map((item, index) => {
                      return (
                        <Col xs={12} key={item.id} className="mb-3">
                          <div className="body-text-appointment">
                            <Row className="align-items-center">
                              <Col xs={12} lg={5} className="text-left pl-5">
                                <p className="m-0">
                                  <b>Order {item.id}</b> สาขา{item.branch}
                                </p>
                                <p className="m-0">
                                  {item.name} ({item.phone})
                                </p>
                                <p className="m-0">
                                  {item.work} ({item.date}) เวลา {item.time} น.
                                </p>
                              </Col>
                              <Col xs={12} lg={3} className="mt-2 mb-2">
                                <Row>
                                  <Col xs={5} lg={7} className="pl-5">
                                    <Form.Label className="font-weight-bold">
                                      {item.status}
                                    </Form.Label>
                                  </Col>
                                  <Col xs={3} lg={5}></Col>
                                </Row>
                              </Col>
                              <Col xs={12} lg={4}></Col>
                            </Row>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                  <Row className="g-0 justify-content-center mt-3 ">
                    <Form>
                      <Col className="text-left  mb-3">
                        <Form.Label className="font-weight-bold">
                          อัพเดทการติดตาม
                        </Form.Label>
                      </Col>
                      <Col xs={12} className="mb-3">
                        <div
                          className="body-text-appointment"
                          style={{
                            height: '150px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                          }}
                        ></div>
                      </Col>
                      <Col className="mt-5 mb-5">
                        <Row className="justify-content-center">
                          <Col xs={5} lg={3}>
                            <Button type="button" className="button">
                              เพิ่ม
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </Form>
                  </Row>
                  <Row className="g-0 justify-content-center">
                    <Col className=" g-0 ">
                      <table className="table table-responsive ">
                        <thead>
                          <tr className="t-header-setting">
                            <th className="text-left" width="20%">
                              ประเภท
                            </th>
                            <th className="text-left" width="20%">
                              รายละเอียด
                            </th>
                            <th>หมายเหตุ</th>
                            <th>ผู้บันทึก</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="t-tr-setting mb-3">
                            <td className="text-left">(03/12/2021)</td>
                            <td className="text-left">
                              <Col className="p-0">
                                <div className="border-div">เลื่อนนัด #1</div>
                              </Col>
                              <Col className="p-0">(07/12/2021)</Col>
                            </td>
                            <td></td>
                            <td>อวิกา ศรีโพธิ์ทอง</td>
                            <td></td>
                          </tr>
                          <tr className="t-tr-setting mb-3">
                            <td className="text-left">(03/12/2021)</td>
                            <td className="text-left">
                              <Col className="p-0">
                                <div className="border-div">เลื่อนนัด #2</div>
                              </Col>
                              <Col className="p-0">(07/12/2021)</Col>
                            </td>
                            <td></td>
                            <td>อวิกา ศรีโพธิ์ทอง</td>
                            <td></td>
                          </tr>
                          <tr className="t-tr-setting mb-3">
                            <td className="text-left">(03/12/2021)</td>
                            <td className="text-left">
                              <Col className="p-0">ไม่รับสาย</Col>
                              <Col className="p-0"></Col>
                            </td>
                            <td></td>
                            <td>อวิกา ศรีโพธิ์ทอง</td>
                            <td></td>
                          </tr>
                          <tr className="t-tr-setting mb-3">
                            <td className="text-left">(03/12/2021)</td>
                            <td className="text-left">
                              <Col className="p-0">
                                <div className="border-div">เลิกแจ้งเตือน</div>
                              </Col>
                              <Col className="p-0"></Col>
                            </td>
                            <td>ปฏิเสธ</td>
                            <td>อวิกา ศรีโพธิ์ทอง</td>
                            <td>
                              <Button type="button" className="button">
                                ยกเลิก
                              </Button>
                            </td>
                          </tr>
                          <tr className="t-tr-setting mb-3">
                            <td className="text-left">(03/12/2021)</td>
                            <td className="text-left">
                              <Col className="p-0">
                                <div className="border-div">เรียบร้อย</div>
                              </Col>
                              <Col className="p-0"></Col>
                            </td>
                            <td>มาตามนัด</td>
                            <td>อวิกา ศรีโพธิ์ทอง</td>
                            <td>
                              <Button type="button" className="button">
                                ยกเลิก
                              </Button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </div>
                <Row className="justify-content-center mt-4 mb-4">
                  <Col className="d-flex justify-content-center set-paginate">
                    <div className="box-paginate">
                      <Pagination>
                        <Pagination.Prev />
                        <Pagination.Item>{1}</Pagination.Item>

                        <Pagination.Item>{2}</Pagination.Item>
                        <Pagination.Item active>{3}</Pagination.Item>

                        <Pagination.Ellipsis />
                        <Pagination.Item>{10}</Pagination.Item>
                        <Pagination.Next />
                      </Pagination>
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
