import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Tab,
  Tabs,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIcon from '../Components/layout/TabsIcon';
import Service from '../assets/icon/management.png';
import Back from '../assets/icon/back.png';
import Select, { components } from 'react-select';
import Print from '../assets/icon/print.png';
import Return from '../assets/icon/new-re-turn.png';
import Money from '../assets/icon/pay-money.png';
import { DatePicker, Space } from 'antd';
import Calendar from '../assets/icon/calendar-bg.png';

export default function AcceptPayment() {
  const [tax, setTax] = useState([{ value: '', label: '' }]);
  const [bank, setBank] = useState([{ value: '', label: '' }]);
  const [branch, setBranch] = useState([{ value: '', label: '' }]);
  const [accountName, setAccountName] = useState([{ value: '', label: '' }]);

  const [accountNumber, setAccountNumber] = useState([
    { value: '', label: '' },
  ]);
  const [comment, setCommtent] = useState('');
  const [cardswipemachine, setCardSwipeMachine] = useState([
    { value: '', label: '' },
  ]);
  const [searchPayer, setSearchPayer] = useState([{ value: '', label: '' }]);

  const [isDisabled, setDisabled] = useState(false);
  const [isClearable, setClearable] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isRtl, setRtl] = useState(false);
  const [isSearchable, setSearchable] = useState(true);

  const history = useHistory();

  function close() {
    let path = `/`;
    history.push(path);
  }

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

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
  const optionBank = [{ value: 'ธนาคารกสิกรไทย', label: 'ธนาคารกสิกรไทย' }];
  const optionBranch = [{ value: 'ท่าแพ', label: 'ท่าแพ' }];
  const optionAccountName = [{ value: 'นาย ก', label: 'นาย ก' }];
  const optionAccountNumber = [
    { value: '15202-221-12-12', label: '15202-221-12-12' },
  ];
  const optionCardSwipeMachine = [{ value: 'เครื่อง1', label: 'เครื่อง1' }];
  const optionSearchPayer = [{ value: 'นาย กss', label: 'นาย กss' }];

  function SetTax(data) {
    setTax({ value: data.value, label: data.value });
  }
  function SetBank(data) {
    setBank({ value: data.value, label: data.value });
  }
  function SetBranch(data) {
    setBranch({ value: data.value, label: data.value });
  }
  function SetAccountName(data) {
    setAccountName({ value: data.value, label: data.value });
  }
  function SetAccountNumber(data) {
    setAccountNumber({ value: data.value, label: data.value });
  }
  function SetCardSwipeMachine(data) {
    setCardSwipeMachine({ value: data.value, label: data.value });
  }
  function SetSearchPayer(data) {
    setSearchPayer({ value: data.value, label: data.value });
  }
  /////////////////Modal/////////////////////
  const [showTransfer, setShowTransfer] = useState(false);

  const handleCloseTransfer = () => setShowTransfer(false);
  const handleShowTransfer = () => setShowTransfer(true);
  const closeModalTransfer = () => {
    setShowTransfer(false);
  };

  const [showCash, setShowCash] = useState(false);

  const handleCloseCash = () => setShowCash(false);
  const handleShowCash = () => setShowCash(true);
  const closeModalCash = () => {
    setShowCash(false);
  };

  const [showSlip, setShowSlip] = useState(false);

  const handleCloseSlip = () => setShowSlip(false);
  const handleShowSlip = () => setShowSlip(true);
  const closeModalSlip = () => {
    setShowSlip(false);
  };

  const [showEditPayer, setShowEditPayer] = useState(false);

  const handleCloseEditPayer = () => setShowEditPayer(false);
  const handleShowEditPayer = () => setShowEditPayer(true);
  const closeModalEditPayer = () => {
    setShowEditPayer(false);
  };

  const [showfinishPayment, setShowFinishPayment] = useState(false);

  const handleCloseFinishPayment = () => setShowFinishPayment(false);
  const handleShowFinishPayment = () => setShowFinishPayment(true);
  const closeModalFinishPayment = () => {
    setShowFinishPayment(false);
  };
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Bill bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>Bill &gt; รับชำระ</b>
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
                  <b>Bill &gt; รับชำระ</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Row className="g-0 set-body-height">
                  <Col className="">
                    <div className="bg-white mt-3 mb-3">
                      <Col className="col-title text-left d-flex align-items-center">
                        <Form.Label className="pl-3 font-weight-bold">
                          ข้อมูลเจ้าของรถ
                        </Form.Label>
                      </Col>
                      <Col className="pt-3 pb-3">
                        <Row className="justify-content-between">
                          <Col xs={12} lg={5}>
                            <Row className="justify-content-center">
                              <Col xs={11} className="mt-3 mb-3">
                                <Row>
                                  <Col xs={5} className="text-right">
                                    <Form.Label>ชื่อ : </Form.Label>
                                  </Col>
                                  <Col className="text-left p-0">
                                    <Form.Label>
                                      นภาวรรณ ยั่งยืน (คุณมิว)
                                    </Form.Label>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="justify-content-center">
                              <Col xs={11} className="mt-3 mb-3">
                                <Row>
                                  <Col xs={5} className="text-right">
                                    <Form.Label>ที่อยู่ : </Form.Label>
                                  </Col>
                                  <Col className="text-left p-0">
                                    <Form.Label>
                                      180/2หมู่บ้านยินดี ซอย วิภาวดี ตำบล
                                      หนองป่าครั่ง อำเภอ เมือง จังหวัด เชียงใหม
                                      50000่
                                    </Form.Label>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                            <Row className="justify-content-center">
                              <Col xs={11} className="mt-3 mb-3">
                                <Row>
                                  <Col xs={5} className="text-right">
                                    <Form.Label>เบอร์โทรศัพท์ : </Form.Label>
                                  </Col>
                                  <Col className="text-left p-0">
                                    <Form.Label>
                                      065-4859926,081-9945623
                                    </Form.Label>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                          <Col xs={12} lg={5}>
                            <Row className="justify-content-center text-left">
                              <Form.Label className="font-weight-bold  mb-3">
                                ข้อมูลผู้ชำระ
                              </Form.Label>
                            </Row>
                            <Row className="justify-content-center">
                              <Col xs={11} lg={10} className="bg-gray ">
                                <Row>
                                  <Col xs={12} className="mt-3 mb-3">
                                    <Row>
                                      <Col xs={5} className="text-right">
                                        <Form.Label>ชื่อ : </Form.Label>
                                      </Col>
                                      <Col className="text-left p-0">
                                        <Form.Label>
                                          นภาวรรณ ยั่งยืน (คุณมิว)
                                        </Form.Label>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} className="mt-3 mb-3">
                                    <Row>
                                      <Col xs={5} className="text-right">
                                        <Form.Label>ที่อยู่ : </Form.Label>
                                      </Col>
                                      <Col className="text-left p-0">
                                        <Form.Label>
                                          180/2หมู่บ้านยินดี ซอย วิภาวดี ตำบล
                                          หนองป่าครั่ง อำเภอ เมือง จังหวัด
                                          เชียงใหม 50000่
                                        </Form.Label>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col xs={12} className="mt-3 mb-3">
                                    <Row>
                                      <Col xs={5} className="text-right">
                                        <Form.Label>เบอร์โทรศัพท์ :</Form.Label>
                                      </Col>
                                      <Col className="text-left p-0">
                                        <Form.Label>
                                          065-4859926,081-9945623
                                        </Form.Label>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mt-3  col-title text-left d-flex align-items-center">
                        <Form.Label className="pl-3 font-weight-bold">
                          ข้อมูลเรถยนต์
                        </Form.Label>
                      </Col>
                      <Col className="">
                        <Row className="pt-5 pb-5 border-bottom">
                          <Form.Label>
                            เลขทะเบียนรถ : กด-252 รายละเอียด : ยี่ห้อ : Honda,
                            รุ่น Civic -1.8 el, สี : ขาว, ป้าย : ธรรมดา, จังหวัด
                            : เชียงใหม่ เลขตัวถัง : 484226
                          </Form.Label>
                        </Row>
                        <Row className="pt-4 pb-5 ">
                          <Form.Label className="mt-3 mb-3">ยอดรวม</Form.Label>
                          <h1>4,500.00</h1>
                        </Row>
                      </Col>
                      <Col className="p-0  set-height">
                        <table className="table table-responsive table-wash-part ">
                          <thead>
                            <tr className="t-header-package">
                              <th className="text-left">ลำดับ</th>
                              <th className="text-left">รหัสสินค้า</th>
                              <th className="text-left" width="30%">
                                ชื่อสินค้า/บริการ
                              </th>
                              <th className="text-left">จำนวน</th>
                              <th className="text-left">ราคาต่อหน่วย</th>
                              <th className="text-left">ส่วนลด</th>
                              <th className="text-left">ราคารวม</th>
                            </tr>
                          </thead>
                          <tbody className="t-body-package ">
                            <tr>
                              <td className="text-left">1</td>
                              <td className="text-left">0406010300002</td>
                              <td className="text-left">อบไอโซน</td>
                              <td className="text-left">
                                <Form.Control></Form.Control>
                              </td>
                              <td className="text-left">
                                <Form.Control></Form.Control>
                              </td>
                              <td className="text-left">
                                <Form.Control></Form.Control>
                              </td>

                              <td className="text-left">4,500.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col className=" mt-5 pb-5">
                        <Row>
                          <Col lg={6}>
                            <Row className="justify-content-center ">
                              <Col
                                xs={10}
                                lg={11}
                                className="bg-gray p-4  mb-3"
                              >
                                <Row className="mt-2 mb-2">
                                  <Col xs={5}>
                                    <Button
                                      type="button"
                                      className="button"
                                      onClick={handleShowCash}
                                    >
                                      เงินสด
                                    </Button>
                                  </Col>
                                  <Col>
                                    <Form.Control></Form.Control>
                                  </Col>
                                </Row>
                                <Row className="mt-2 mb-2">
                                  <Col xs={5}>
                                    <Button
                                      type="button"
                                      className="button"
                                      onClick={handleShowTransfer}
                                    >
                                      โอนเงิน
                                    </Button>
                                  </Col>
                                  <Col>
                                    <Form.Control></Form.Control>
                                  </Col>
                                </Row>
                                <Row className="mt-2 mb-2">
                                  <Col xs={5}>
                                    <Button
                                      type="button"
                                      className="button"
                                      onClick={handleShowSlip}
                                    >
                                      สลิป
                                    </Button>
                                  </Col>
                                  <Col>
                                    <Form.Control></Form.Control>
                                  </Col>
                                </Row>
                                <Row className="mt-2 mb-2">
                                  <Col xs={5}>
                                    <Button type="button" className="button">
                                      เช็ค
                                    </Button>
                                  </Col>
                                  <Col>
                                    <Form.Control></Form.Control>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                          <Col lg={6}>
                            <Row className="justify-content-center ">
                              <Col xs={11} lg={11} className="bg-gray p-4  ">
                                <Row className="g-0  mb-3 justify-content-between">
                                  <Col className="text-left">
                                    <Form.Label>รวมเป็นเงิน</Form.Label>
                                  </Col>
                                  <Col className="text-right">
                                    <Form.Label>4,900.00 บาท</Form.Label>
                                  </Col>
                                </Row>
                                <Row className="g-0 mt-4 mb-4 justify-content-between">
                                  <Col className="text-left">
                                    <Form.Label>ส่วนลดรวม</Form.Label>
                                  </Col>
                                  <Col className="text-right">
                                    <Form.Label>5%</Form.Label>
                                  </Col>
                                </Row>
                                <Row className="g-0 mt-4 mb-4 justify-content-between">
                                  <Col className="text-left">
                                    <Form.Label>ราคาหลังหักส่วนลด</Form.Label>
                                  </Col>
                                  <Col className="text-right">
                                    <Form.Label>4,900.00 บาท</Form.Label>
                                  </Col>
                                </Row>
                                <Col className="border-bottom p-0 mt-4 mb-4"></Col>
                                <Row className="justify-content-between mt-4 mb-4 align-items-center">
                                  <Col xs={8} className="text-left  ">
                                    {['checkbox'].map((type) => (
                                      <div key={`inline-${type}`}>
                                        <Row>
                                          <Col
                                            xs={12}
                                            md={5}
                                            lg={7}
                                            xl={7}
                                            className="d-flex"
                                          >
                                            <Form.Check
                                              inline
                                              label="หักภาษี ณ ที่จ่าย"
                                              name="group1"
                                              type={type}
                                              id={`inline-${type}-1`}
                                              className="checkbox-input"
                                            />
                                          </Col>
                                          <Col
                                            xs={8}
                                            md={5}
                                            className="mt-1 mb-1"
                                          >
                                            <Select
                                              options={optionTax}
                                              defaultValue={optionTax[0]}
                                              isClearable={false}
                                              isSearchable={false}
                                              onChange={(data) => SetTax(data)}
                                              className="select-list"
                                            />
                                          </Col>
                                        </Row>
                                      </div>
                                    ))}
                                  </Col>
                                  <Col className="text-right">
                                    <Form.Label>0.00 บาท</Form.Label>
                                  </Col>
                                </Row>
                                <Row className="g-0 mt-5 mb-3 justify-content-between">
                                  <Col className="text-left">
                                    <Form.Label>รวมจำนวนทั้งสิ้น</Form.Label>
                                  </Col>
                                  <Col className="text-right">
                                    <Form.Label>4,500.00 บาท</Form.Label>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="pb-5">
                        <Row className="justify-content-between">
                          <Col xs={12} md={6} className="mb-3">
                            <Row>
                              <Col xs={6} md={6} lg={5}>
                                <Button
                                  type="button"
                                  className="button"
                                  onClick={handleShowFinishPayment}
                                >
                                  <img src={Money} /> &nbsp; ชำระเงิน
                                </Button>
                              </Col>
                              <Col xs={6} md={6} lg={5}>
                                <Button
                                  type="button"
                                  className="button"
                                  onClick={handleShowEditPayer}
                                >
                                  <img src={Print} /> &nbsp; พิมพ์ใบเสร็จ
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <Row className="justify-content-end">
                              <Col md={6} lg={5}>
                                <Button type="button" className="button">
                                  <img src={Return} /> &nbsp; ออก
                                </Button>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
      {/* เงินสด */}
      <Modal
        className="modal-style"
        centered
        show={showCash}
        onHide={setShowCash}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>PALYBLE AMOUNT</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModalCash}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row className="justify-content-center ">
              <Col xs={12} lg={7}>
                <Row className="align-items-center mt-5 mb-5">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">เงินสด</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3">
                    <Form.Control className="form-control-order"></Form.Control>
                  </Col>
                </Row>
              </Col>

              <Col xs={12} lg={7} className="mt-4 mb-5">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ตกลง
                    </Button>
                  </Col>
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      {/* โอนเงิน */}
      <Modal
        className="modal-style"
        centered
        show={showTransfer}
        onHide={setShowTransfer}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>PALYBLE AMOUNT</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModalTransfer}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row className="justify-content-center ">
              <Col xs={12} lg={7}>
                <Row className="align-items-center mt-3">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">ยอดโอน</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3">
                    <Form.Control className="form-control-order"></Form.Control>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">วันที่</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3">
                    <DatePicker
                      onChange={onChange}
                      placeholder=""
                      suffixIcon={<img src={Calendar} />}
                    />
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">ธนาคาร</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 mt-2 mb-2">
                    <Select
                      options={optionBank}
                      placeholder=""
                      isClearable={false}
                      isSearchable={false}
                      onChange={(data) => SetBank(data)}
                      className="select-list"
                    />
                  </Col>
                </Row>
                <Row className="align-items-center ">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">สาขา</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 mt-2 mb-2">
                    <Select
                      options={optionBranch}
                      placeholder=""
                      isClearable={false}
                      isSearchable={false}
                      onChange={(data) => SetBranch(data)}
                      className="select-list"
                    />
                  </Col>
                </Row>
                <Row className="align-items-center ">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      ชื่อบัญชี
                    </Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 mt-2 mb-2">
                    <Select
                      options={optionAccountName}
                      placeholder=""
                      isClearable={false}
                      isSearchable={false}
                      onChange={(data) => SetAccountName(data)}
                      className="select-list"
                    />
                  </Col>
                </Row>
                <Row className="align-items-center ">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      เลขที่บัญชี
                    </Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 mt-2 mb-2">
                    <Select
                      options={optionAccountNumber}
                      placeholder=""
                      isClearable={false}
                      isSearchable={false}
                      onChange={(data) => SetAccountNumber(data)}
                      className="select-list"
                    />
                  </Col>
                </Row>
                <Row className="">
                  <Col xs={4} lg={3} className="text-left" className="mt-3">
                    <Form.Label className="set-text-height">
                      หมายเหตุ
                    </Form.Label>
                  </Col>
                  <Col xs={8} lg={8} className="p-0 pr-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="form-control-area"
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12} lg={7} className="mt-4 mb-5">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ตกลง
                    </Button>
                  </Col>
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      {/* สลีป */}
      <Modal
        className="modal-style"
        centered
        show={showSlip}
        onHide={setShowSlip}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>PALYBLE AMOUNT</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModalSlip}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row className="justify-content-center ">
              <Col xs={12} lg={7}>
                <Row className="align-items-center mt-3">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">ยอดชำระ</Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3">
                    <Form.Control className="form-control-order"></Form.Control>
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      เครื่องรูด
                    </Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3">
                    <Select
                      options={optionCardSwipeMachine}
                      placeholder=""
                      isClearable={false}
                      isSearchable={false}
                      onChange={(data) => SetCardSwipeMachine(data)}
                      className="select-list"
                    />
                  </Col>
                </Row>
                <Row className="align-items-center mt-2">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      Trace No.
                    </Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 ">
                    <Form.Control className="form-control-order"></Form.Control>
                  </Col>
                </Row>
                <Row className="align-items-center ">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      Card No.
                    </Form.Label>
                  </Col>
                  <Col xs={6} className="p-0 pr-3 ">
                    <Form.Control className="form-control-order"></Form.Control>
                  </Col>
                </Row>

                <Row className="">
                  <Col xs={4} lg={3} className="text-left" className="mt-3">
                    <Form.Label className="set-text-height">
                      หมายเหตุ
                    </Form.Label>
                  </Col>
                  <Col xs={8} lg={8} className="p-0 pr-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      className="form-control-area"
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12} lg={7} className="mt-4 mb-5">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ตกลง
                    </Button>
                  </Col>
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      {/* แก้ไขผู้ชำระ */}
      <Modal
        className="modal-style"
        centered
        show={showEditPayer}
        onHide={setShowEditPayer}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>PALYBLE AMOUNT</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModalEditPayer}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Form>
            <Row className="justify-content-center ">
              <Col xs={12} lg={7} className="mt-5 mb-5">
                <Row className="align-items-center mt-2">
                  <Col xs={4} lg={3} className="text-left">
                    <Form.Label className="set-text-height">
                      ชื่อผู้ชำระ
                    </Form.Label>
                  </Col>
                  <Col xs={12} lg={9} className="p-0 pr-3 pl-3">
                    <Select
                      className="basic-single"
                      classNamePrefix="select"
                      isDisabled={isDisabled}
                      isLoading={isLoading}
                      isClearable={isClearable}
                      isRtl={isRtl}
                      isSearchable={isSearchable}
                      options={optionSearchPayer}
                      placeholder="ค้นหาโดยชื่อลูกค้า,เลขทะเบียน"
                      onChange={(data) => SetSearchPayer(data)}
                    />
                  </Col>
                </Row>
              </Col>

              <Col xs={12} lg={7} className="mt-4 mb-5">
                <Row className="align-items-center justify-content-center">
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ตกลง
                    </Button>
                  </Col>
                  <Col xs={6} lg={5}>
                    <Button type="button" className="button">
                      ยกเลิก
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
      {/* อนุมัติส่วนลด */}
      <Modal
        className="modal-style"
        centered
        show={showfinishPayment}
        onHide={setShowFinishPayment}
      >
        <Modal.Header className="modal-header-style">
          <p>
            <b>PALYBLE AMOUNT</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModalFinishPayment}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body className="body-set-height">
          <Row
            className="justify-content-center  align-items-center"
            style={{ height: '200px' }}
          >
            <Col xs={12} lg={7} className="mt-2 mb-2">
              <Row className="align-items-center mt-2">
                <Form.Label className="font-weight-bold">
                  ส่งคำขอส่วนลดของคุณแล้ว
                </Form.Label>
              </Row>
            </Col>

            <Col xs={12} lg={7} className="">
              <Row className="align-items-center justify-content-center">
                <Col xs={6} lg={5}>
                  <Button type="button" className="button">
                    ตกลง
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
