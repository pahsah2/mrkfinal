import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';

import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { Container, Row, Col, Form, Dropdown, Modal } from 'react-bootstrap';
import '../../assets/scss/style.scss';
import save from '../../assets/icon/new-save.png';
import cancel from '../../assets/icon/new-cancel.png';
import Search from '../../assets/icon/search.png';
export default function CustomerInfo() {
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
  const [contract, setContract] = useState([{ value: '', label: '' }]);
  const [recommender, setRecommender] = useState('');
  const [comment, setComment] = useState('');
  const [spacial_skill, setSpacial_skill] = useState('');
  const [isPublished, setIsPublished] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [search_code, setSearch_code] = useState('');

  const close = () => {
    setShow(false);
  };
  const handleSelectSegment = (e) => {
    console.log(e);
    setSegment(e);
  };
  function SetSegment(data) {
    setSegment({ value: data.value, label: data.value });
  }
  function SetNam(data) {
    setNam({ value: data.value, label: data.value });
  }
  function SetCity(data) {
    setCity({ value: data.value, label: data.value });
  }
  function SetDistrict(data) {
    setDistrict({ value: data.value, label: data.value });
  }
  function SetContract(data) {
    setContract({ value: data.value, label: data.value });
  }

  const optionSegment = [{ value: '', label: '' }];
  const optionNam = [
    { value: 'นาย', label: 'นาย' },
    { value: 'นาง', label: 'นาง' },
    { value: 'นางสาว', label: 'นางสาว' },
  ];
  const optionCity = [{ value: '', label: '' }];
  const optionDistrict = [{ value: '', label: '' }];
  const optionContract = [{ value: '', label: '' }];
  const handleSelectNam = (e) => setNam(e);
  // const handleSelectAKA = (e) => setAka(e);
  const handleSelectCity = (e) => setCity(e);
  const handleSelectDistrict = (e) => setDistrict(e);
  const handleSelectContract = (e) => setContract(e);
  return (
    <>
      <Container fluid className="custominfo">
        <Form>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row className="align-items-center m-0">
                <Col className="text-left" lg={4}>
                  <Form.Label>ประเภทสมาชิก</Form.Label>
                </Col>
                <Col className="text-left">
                  <Form.Check
                    value=""
                    type="radio"
                    aria-label="radio 1"
                    label="บุคลคธรรมดา"
                    onChange={(e) => setIsPublished(e.target.value)}
                    checked={isPublished}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={4} className="">
              <Row>
                <Col className="text-left" lg={4}>
                  <Form.Label>Segment</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionSegment}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetSegment(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={6} className="d-flex justify-content-start pass-segment ">
              <Button
                type="button"
                onClick={handleShow}
                className="pick-segment-button"
              >
                <p>เลือกรหัส</p>
              </Button>
              <p className="ml-4">Ex. MAJ : MRKCUS 00001</p>
            </Col>
          </Row>
          <Row className="row-form-create-memeber">
            <Col lg={3} className="">
              <Row>
                <Col lg={5} className="text-left">
                  <Form.Label>คำนำหน้าชื่อ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionNam}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetNam(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row>
                <Col lg={3} className="text-left">
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
            <Col lg={3} className="">
              <Row>
                <Col lg={3} className="text-left">
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
            <Col lg={3} className="">
              <Row>
                <Col lg={3} className="text-left">
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
            <Col lg={3} className="">
              <Row>
                <Col className="text-left" lg={5}>
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
            <Col lg={5} className="">
              <Row>
                <Col className="text-left" lg={3}>
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
            <Col lg={4} className="">
              <Row>
                <Col className="text-left" lg={6}>
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
            <Col lg={3} className="">
              <Row>
                <Col lg={5} className="text-left">
                  <Form.Label>จังหวัด</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionCity}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetCity(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={3} className="">
              <Row>
                <Col lg={3} className="text-left">
                  <Form.Label>อำเภอ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionDistrict}
                    placeholder=""
                    isClearable={false}
                    isSearchable={false}
                    onChange={(data) => SetDistrict(data)}
                    className="select-list"
                  />
                </Col>
              </Row>
            </Col>
            <Col lg={4} className="">
              <Row>
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
            <Col lg={4} className="">
              <Row>
                <Col lg={4} className="text-left">
                  <Form.Label>ช่องทางการติดต่อ</Form.Label>
                </Col>
                <Col className="">
                  <Select
                    options={optionContract}
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
            <Col lg={4} className="">
              <Row>
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
            <Col lg={5} className="">
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
            <Col lg={6} className="">
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
          <Row className="set-row">
            <Button type="" className="btn-modal">
              <img src={save} /> บันทึก
            </Button>
            <Button type="" className="btn-modal">
              <img src={cancel} /> ออก
            </Button>
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
            <span aria-hidden="true">&times;</span>
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
