import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Modal } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import Select, { components } from 'react-select';
import { Switch } from 'antd';
import Save from '../../assets/icon/flat-style-circle-save.png';
import print from '../../assets/icon/print.png';
import Return from '../../assets/icon/flat-style-circle-turn-on.png';
import Delete from '../../assets/icon/delete-button.png';
import Calendar from '../../assets/icon/calendar-bg.png';
import OIP from '../../assets/images/OIP.png';
import { DatePicker, Space } from 'antd';

export default function Order() {
  const [statusService, setStatusService] = useState(false);
  const [tax, setTax] = useState([{ value: '', label: '' }]);
  const [statusJob, setStatusJob] = useState([{ value: '', label: '' }]);
  const [member, setMember] = useState([{ value: '', label: '' }]);
  const [regisNumber, setRegisNumber] = useState([{ value: '', label: '' }]);
  const [hour, setHour] = useState([{ value: '', label: '' }]);
  const [minute, setMinute] = useState([{ value: '', label: '' }]);
  const [approval, setApproval] = useState([{ value: '', label: '' }]);
  const optionTax = [
    { value: '1', label: '1%' },
    { value: '2', label: '2%' },
    { value: '3', label: '3%' },
    { value: '4', label: '4%' },
    { value: '5', label: '5%' },
    { value: '6', label: '6%' },
    { value: '7', label: '7%' },
    { value: '8', label: '8%' },

    { value: '9', label: '9%' },
    { value: '10', label: '10%' },
  ];

  function SetHour(data) {
    setHour({ value: data.value, label: data.value });
  }
  function Setminut(data) {
    setMinute({ value: data.value, label: data.value });
  }
  function SetApproval(data) {
    setApproval({ value: data.value, label: data.value });
  }

  const optionMember = [{ value: 'นาย', label: 'นาย' }];

  const optionRegisNumber = [{ value: '1264', label: '1264' }];

  const optionApproval = [
    { value: 'อนุมัติ', label: 'อนุมัติ' },
    { value: 'ไม่อนุมัติ', label: 'ไม่อนุมัติ' },
  ];

  function SetTax(data) {
    setTax({ value: data.value, label: data.value });
  }

  /////////////////Modal/////////////////////
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const close = () => {
    setShow(false);
  };

  const [showPackage, setShowPackage] = useState(false);

  const handleClosePackage = () => setShowPackage(false);
  const handleShowPackage = () => setShowPackage(true);
  const closePackage = () => {
    setShowPackage(false);
  };
  ///
  ////////////////////////////////////////////
  return (
    <>
      <Form>
        <Container fluid className="set-height-order">
          <Row className="g-0 bg-white">
            <Col
              xs={12}
              className="text-left  mb-3 bg-document d-flex align-items-center"
            >
              <Form.Label className=" font-weight-bold">
                เอกสารเปิดงานเสนอราคา
              </Form.Label>
            </Col>
            <Col lg={6}>
              <Row>
                <Col xs={12} className="text-left">
                  <Form.Label className=" font-weight-bold">
                    ข้อมูลเจ้าของรถ
                  </Form.Label>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col className="text-right mt-3 mb-2">
                      <Form.Label>รหัสสมาชิก : </Form.Label>
                    </Col>

                    <Col className="text-left mt-3 mb-2" style={{ padding: 0 }}>
                      <Form.Label>MRK6010300002</Form.Label>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col className="text-right mt-3 mb-2">
                      <Form.Label>ชื่อ : </Form.Label>
                    </Col>

                    <Col className="text-left mt-3 mb-2" style={{ padding: 0 }}>
                      <Form.Label>นภาวรรณ ยั่งยืน (คุณมิว)</Form.Label>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col className="text-right mt-3 mb-2">
                      <Form.Label>ที่อยู่ : </Form.Label>
                    </Col>

                    <Col className="text-left mt-3 mb-2" style={{ padding: 0 }}>
                      <Form.Label>
                        180/2หมู่บ้านยินดี ซอย วิภาวดี ตำบล หนองป่าครั่ง อำเภอ
                        เมือง จังหวัด เชียงใหม 50000่
                      </Form.Label>
                    </Col>
                  </Row>
                </Col>
                <Col xs={12}>
                  <Row>
                    <Col className="text-right mt-3 mb-2">
                      <Form.Label>เบอร์โทรศัพท์ : </Form.Label>
                    </Col>

                    <Col className="text-left mt-3 mb-2" style={{ padding: 0 }}>
                      <Form.Label>065-4859926,081-9945623</Form.Label>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs={12} className="text-left mt-3 mb-3 ">
                  <Form.Label className="font-weight-bold">
                    ลูกค้าไม่ได้ชำระเอง
                  </Form.Label>
                  &nbsp;
                </Col>

                <Col xs={11} className="bg-data-order">
                  <Row className="p-2">
                    <Col xs={12}>
                      <Row>
                        <Col className="text-right mt-3 mb-2">
                          <Form.Label>รหัสสมาชิก : </Form.Label>
                        </Col>

                        <Col
                          className="text-left mt-3 mb-2"
                          style={{ padding: 0 }}
                        >
                          <Form.Label>MRK6010300002</Form.Label>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <Col className="text-right mt-3 mb-2">
                          <Form.Label>ชื่อ : </Form.Label>
                        </Col>

                        <Col
                          className="text-left mt-3 mb-2"
                          style={{ padding: 0 }}
                        >
                          <Form.Label>นภาวรรณ ยั่งยืน (คุณมิว)</Form.Label>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <Col className="text-right mt-3 mb-2">
                          <Form.Label>ที่อยู่ : </Form.Label>
                        </Col>

                        <Col
                          className="text-left mt-3 mb-2"
                          style={{ padding: 0 }}
                        >
                          <Form.Label>
                            180/2หมู่บ้านยินดี ซอย วิภาวดี ตำบล หนองป่าครั่ง
                            อำเภอ เมือง จังหวัด เชียงใหม 50000่
                          </Form.Label>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12}>
                      <Row>
                        <Col className="text-right mt-3 mb-2">
                          <Form.Label>เบอร์โทรศัพท์ : </Form.Label>
                        </Col>

                        <Col
                          className="text-left mt-3 mb-2"
                          style={{ padding: 0 }}
                        >
                          <Form.Label>065-4859926,081-9945623</Form.Label>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="mt-4 mb-3">
              <Row>
                <Col xs={12} className="mt-2 mb-2">
                  <p>จำนวนทั้งสิ้น</p>
                </Col>
                <Col xs={12} className="mt-2 mb-2">
                  <p style={{ fontSize: '36px' }}>4,500.00 บาท</p>
                </Col>
                <Col xs={12} className="mt-2 mb-2">
                  <p>วันที่ 11/06/2564</p>
                </Col>
                <Col xs={12} className="mt-2 mb-2">
                  <p>ผู้บันทึก สุรศักดิ์ สวัสดี</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0 bg-white">
            <Col
              xs={12}
              className="text-left mt-3 mb-3 bg-document d-flex align-items-center"
            >
              <Form.Label className=" font-weight-bold">
                ข้อมูลเรถยนต์
              </Form.Label>
            </Col>
            <Col className="">
              <Row className="align-items-center ">
                <Col xs={12} lg={12} className="mt-4 mb-4">
                  <Form.Label>
                    เลขทะเบียนรถ : กด-252 รายละเอียด : ยี่ห้อ : Honda, รุ่น
                    Civic -1.8 el, สี : ขาว, ป้าย : ธรรมดา, จังหวัด : เชียงใหม่
                    เลขตัวถัง : 484226
                  </Form.Label>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0 bg-white">
            <Col
              xs={12}
              className="text-left mt-3 mb-3 bg-document d-flex align-items-center"
            >
              <Form.Label className=" font-weight-bold">
                รายละเอียดสินค้า
              </Form.Label>
            </Col>
            <Col xs={12}>
              <Row className="mt-4 mb-4 justify-content-center m-0">
                <Col className="p-4 set-order-table">
                  <table className="table table-responsive table-wash-part ">
                    <thead>
                      <tr className="t-header-package">
                        <th>ลำดับ</th>
                        <th>รหัสสินค้า</th>
                        <th className="text-left">ชื่อสินค้า</th>
                        <th>จำนวน</th>
                        <th>ราคาต่อหน่วย</th>
                        <th>ส่วนลด (บาท) </th>
                        <th>ราคารวม</th>
                      </tr>
                    </thead>
                    <tbody className="t-body-package ">
                      <tr>
                        <td>1</td>
                        <td>0406010300002</td>
                        <td>น้ำยาเคลือบรถ</td>
                        <td>1</td>
                        <td>4,500.00</td>
                        <td>500</td>
                        <td>4,000.00</td>
                      </tr>
                    </tbody>
                  </table>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0 bg-white">
            <Col
              xs={12}
              className="text-left mt-3 mb-3 bg-document d-flex align-items-center"
            >
              <Form.Label className=" font-weight-bold">
                รูปภาพประกอบการซ่อม
              </Form.Label>
            </Col>
            <Col xs={12} className="mt-3 mb-3">
              <Row>
                <Col xs="auto" className="size-image mt-3 mb-3">
                  <img src={OIP} />
                </Col>
                <Col xs="auto" className="size-image mt-3 mb-3">
                  <img src={OIP} />
                </Col>
                <Col xs="auto" className="size-image mt-3 mb-3">
                  <img src={OIP} />
                </Col>
              </Row>
            </Col>

            <Col xs={12} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={6}>
                  <Col>
                    <Row className="mt-3 mb-3">
                      <Col xs={12} lg={3} className="text-left mt-3">
                        <Form.Label>หมายเหตุ</Form.Label>
                      </Col>
                      <Col className="mt-3 mb-3">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="text-area"
                        />
                      </Col>
                    </Row>
                    <Row className="mt-3 mb-3">
                      <Col xs={12} lg={3} className="text-left mt-3">
                        <Form.Label>โน้ตภายใน</Form.Label>
                      </Col>
                      <Col className="mt-3 mb-3">
                        <Form.Control
                          as="textarea"
                          rows={3}
                          className="text-area"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col></Col>
                </Col>
                <Col lg={6} className="">
                  <Row className="bg-data-sum pt-2 pb-2 p-3">
                    <Col xs={12} className="">
                      <Row className="justify-content-between">
                        <Col className="text-left  mt-3 mb-3">
                          <p>รวมเป็นเงิน</p>
                        </Col>
                        <Col className="text-right  mt-3 mb-3 ">
                          <p>4,900.00 บาท</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="text-left  mt-3 mb-3">
                          <p>ส่วนลดรวม</p>
                        </Col>
                        <Col className="text-right  mt-3 mb-3 ">
                          <p>5 %</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="text-left  mt-3 mb-3">
                          <p>ราคาหลังหักส่วนลด</p>
                        </Col>
                        <Col className="text-right  mt-3 mb-3">
                          <p>4,500.00</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between align-items-center">
                        <Col className="text-left  mt-3 mb-3">
                          <p>หักภาษี ณ ที่จ่าย 3%</p>
                        </Col>
                        <Col xs={3} className="text-right  mt-3 mb-3">
                          <p>0.00</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col className="text-left  mt-3 mb-3">
                          <p>ราคาสุทธิ</p>
                        </Col>
                        <Col className="text-right mt-3 mb-3 ">
                          <p>4,500.00</p>
                        </Col>
                      </Row>
                      <Row className="justify-content-center align-items-center">
                        <Col xs={4} lg={3} className="text-right">
                          <Form.Label className="font-weight-bold ">
                            การอนุมัติ
                          </Form.Label>
                        </Col>
                        <Col xs={8} md={4} lg={5} xl={5}>
                          <Select
                            options={optionApproval}
                            placeholder=""
                            isClearable={false}
                            isSearchable={false}
                            onChange={(data) => SetApproval(data)}
                            className="select-list"
                          />
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0 pt-5 pb-5 bg-white justify-content-center">
            <Col xs={6}>
              <Row className="justify-content-end">
                <Col xs={12} md={6} xl={5} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    <img src={Save} /> &nbsp; บันทึก
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="justify-content-start">
                <Col xs={12} md={6} lg={6} xl={5} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    <img src={Return} /> &nbsp; ออก
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>

      <Modal className="modal-style" centered show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-style">
          <p>
            <b>รับรถ</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={close}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row
              className="justify-content-center "
              style={{ height: '300px' }}
            >
              <Col xs={12} lg={7}>
                <Row className="align-items-center mt-5">
                  <Col xs={3} lg={3} className="text-left">
                    <Form.Label className="set-text-height">วันที่</Form.Label>
                  </Col>
                  <Col className="p-0 pr-3"></Col>
                </Row>
              </Col>
              <Col xs={12} lg={7}>
                <Row className="align-items-center ">
                  <Col xs={2} className="text-left">
                    <Form.Label className="set-text-height">เวลา</Form.Label>
                  </Col>
                  <Col></Col>:<Col></Col>
                </Row>
              </Col>
              <Col xs={12} lg={7}>
                <Row className="align-items-center justify-content-center">
                  <Col lg={5}>
                    <Button type="button" className="button">
                      บันทึก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
