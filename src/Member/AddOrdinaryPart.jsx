import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';
import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { Container, Row, Col, Form, Modal, Dropdown } from 'react-bootstrap';
import Search from '../assets/icon/search.png';
import Save from '../assets/icon/save.png';
import Return from '../assets/icon/out.png';
export default function AddOrdinaryPart({ props }) {
  const [tags, setTags] = React.useState([]);
  const [segment, setSegment] = useState([{ value: '', label: '' }]);
  const [nam, setNam] = useState([{ value: '', label: '' }]);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [aka, setAka] = useState('');
  const [phone, setPhone] = useState('');
  const [iD_card, setID_card] = useState('');
  const [city, setCity] = useState([{ value: '', label: '' }]);
  const [district, setDistrict] = useState([{ value: '', label: '' }]);
  const [postcode, setPostcode] = useState('');
  const [contract, setContract] = useState('');
  const [recommender, setRecommender] = useState('');
  const [comment, setComment] = useState('');
  const [spacial_skill, setSpacial_skill] = useState('');

  const [show, setShow] = useState(false);
  const [search_code, setSearch_code] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const number = [
    { id: '0001' },
    { id: '0002' },
    { id: '0003' },
    { id: '0004' },
    { id: '0005' },
    { id: '0006' },
    { id: '0007' },
    { id: '0008' },
  ];
  const OptionSegment = [
    { value: 'MAJ', label: 'MAJ' },
    { value: 'MRK', label: 'MRK' },
  ];
  const OptionNam = [
    { value: 'Mr.', label: 'นาย' },
    { value: 'Mrs.', label: 'นาง' },
    { value: 'Ms.', label: 'นางสาว' },
  ];
  const OptionContract = [
    { value: 'Social Media', label: 'Social Media' },
    { value: 'Offiline', label: 'Offiline' },
    { value: 'Connection', label: 'Connection' },
  ];
  const OptionCity = [{ value: 'เชียงใหม่', label: 'เชียงใหม่' }];
  const OptionDistrict = [{ value: 'เมือง', label: 'เมือง' }];

  const SetSegment = (data) => {
    setSegment([{ value: data.value, label: data.value }]);
  };
  const SetNam = (data) => {
    setNam([{ value: data.value, label: data.value }]);
  };
  const SetCity = (data) => {
    setCity([{ value: data.value, label: data.value }]);
  };
  const SetDistrict = (data) => {
    setDistrict([{ value: data.value, label: data.value }]);
  };
  const SetContract = (data) => {
    setContract([{ value: data.value, label: data.value }]);
  };

  const close = () => {
    setShow(false);
  };
  return (
    <>
      <Container fluid className="component-create-member">
        <Form>
          <Row className="row-form-create-memeber ">
            <Col xs={12} lg={4} className=" ">
              <Row className="align-items-center">
                <Col xs={4} lg={4} className="text-left mt-3 mb-3">
                  <Form.Label>Segment</Form.Label>
                </Col>
                <Col className="mt-3 mb-3">
                  <Select
                    options={OptionSegment}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetSegment(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className=" pass-segment">
              <Row className="align-items-center">
                <Col xs={4} xl={3} className="mt-3 mb-3 text-left">
                  <Button
                    type="button"
                    className="pick-segment-button"
                    onClick={handleShow}
                  >
                    <p>เลือกรหัส</p>
                  </Button>
                </Col>
                <Col xs={12} sm={8} className="mt-3 mb-3 text-left p-0">
                  <p className="ml-4">Ex. MAJ : MRKCUS 00001</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col xs={12} lg={5} className="text-left ">
                  <Form.Label>คำนำหน้าชื่อ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={OptionNam}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetNam(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={2} className="text-left">
                  <Form.Label>ชื่อ</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xl={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} xl={3} className="text-left">
                  <Form.Label>นามสกุล</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={4} xl={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} xl={3} className="text-left">
                  <Form.Label>ชื่อเล่น</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={5} className="text-left">
                  <Form.Label>ชื่อAKA</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={aka}
                    onChange={(e) => setAka(e.target.value)}
                    className="aka-form"
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
            <Col lg={5} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={3} className="text-left">
                  <Form.Label>เบอร์โทรศัพท์</Form.Label>
                </Col>
                <Col className="">
                  <ReactTagInput
                    placeholder="กรุณากรอกเบอร์โทรศัพท์"
                    editable={true}
                    readOnly={false}
                    removeOnBackspace={true}
                    maxTags={2}
                    tags={tags}
                    onChange={(newTags) => setTags(newTags)}
                    className="input-tage"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={6} className="text-left">
                  <Form.Label>เลขบัตรประชาชน/พาสปอร์ต</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={iD_card}
                    onChange={(e) => setID_card(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={5} className="text-left">
                  <Form.Label>จังหวัด</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={OptionCity}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetCity(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={3} className="text-left">
                  <Form.Label>อำเภอ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={OptionDistrict}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetDistrict(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label>รหัสไปรษณีย์ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label>ช่องทางการติดต่อ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={OptionContract}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetContract(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={4} className="text-left">
                  <Form.Label>ชื่อผู้แนะนำ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    type="text"
                    placeholder=""
                    value={recommender}
                    onChange={(e) => setRecommender(e.target.value)}
                  ></Form.Control>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={5} className="mt-3 mb-3">
              <Row>
                <Col lg={3} className="text-left">
                  <Form.Label>หมายเหตุ </Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '121px' }}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="mt-3 mb-3">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>ความต้องการพิเศษ</Form.Label>
                </Col>
                <Col className="">
                  <Form.Control
                    as="textarea"
                    placeholder=""
                    style={{ height: '121px' }}
                    value={spacial_skill}
                    onChange={(e) => setSpacial_skill(e.target.value)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="justify-content-between mt-5 mb-5">
            <Col xs={6} md={4} lg={3}>
              <Button type="button" className="button">
                <img src={Save} /> &nbsp; บันทึก
              </Button>
            </Col>
            <Col xs={6} md={4} lg={3}>
              <Button type="button" className="button">
                <img src={Return} /> &nbsp; ออก
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <Modal
        className="modal-segment"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header className="modal-header-segment">
          <p>
            <b>เลือกรหัสผ่าน</b>
          </p>
          <button
            type="button"
            className="btn-close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={close}
          >
            <span aria-hidden="true">X</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <Row className="set-row-search-box">
            <Col lg={3} className="d-flex justify-content-center">
              <Form.Control
                type="number"
                placeholder="ค้นหารหัสว่าง"
                value={search_code}
                onChange={(e) => setSearch_code(e.target.value)}
                className="search-code"
              ></Form.Control>
            </Col>
            <Col lg={2} className="d-flex justify-content-center">
              <Button className="button-modal-segment">
                <img src={Search} /> &nbsp; ค้นหา
              </Button>
            </Col>
            <Col lg={2} className="d-flex justify-content-center">
              <Button className="button-modal-segment">คืนค่า</Button>
            </Col>
          </Row>
          <Row className="set-box-value">
            <Col className="colum-value">
              <Button className="put-value-segment">0001</Button>;
            </Col>
            ;
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
}
