import React, { Component, useState } from 'react';
import { Input, Label, Button } from 'reactstrap';
import Select from 'react-select';
import ReactTagInput from '@pathofdev/react-tag-input';
import '@pathofdev/react-tag-input/build/index.css';
import { Container, Row, Col, Form, Modal, Dropdown } from 'react-bootstrap';
import Search from '../assets/icon/search.png';
export default function AddOrdinaryPart({ props }) {
  const [tags, setTags] = React.useState([]);
  const [segment, setSegment] = useState('');
  const [nam, setNam] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nickname, setNickname] = useState('');
  const [aka, setAka] = useState('');
  const [phone, setPhone] = useState('');
  const [iD_card, setID_card] = useState('');
  const [city, setCity] = useState('');
  const [district, setDistrict] = useState('');
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
  const handleSelectSegment = (e) => {
    console.log(e);
    setSegment(e);
  };
  const handleSelectNam = (e) => setNam(e);
  // const handleSelectAKA = (e) => setAka(e);
  const handleSelectCity = (e) => setCity(e);
  const handleSelectDistrict = (e) => setDistrict(e);
  const handleSelectContract = (e) => setContract(e);
  const close = () => {
    setShow(false);
  };
  return (
    <>
      <Container fluid className="component-create-member">
        <Row className="row-form-create-memeber">
          <Col lg={4} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-start"
              lg={4}
              style={{ padding: 0 }}
            >
              <Form.Label>Segment</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={segment}
                  onChange={(e) => setSegment(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown onSelect={handleSelectSegment} className="dropdown">
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="MC">MC</Dropdown.Item>
                      <Dropdown.Item eventKey="MRKCUS">MRKCUS</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col lg={6} className="d-flex justify-content-start pass-segment">
            <Button
              type="button"
              className="pick-segment-button"
              onClick={handleShow}
            >
              <p>เลือกรหัส</p>
            </Button>
            <p className="ml-4">Ex. MAJ : MRKCUS 00001</p>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              lg={5}
              className="d-flex justify-content-start nam"
              style={{ padding: 0 }}
            >
              <Form.Label>คำนำหน้าชื่อ</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={nam}
                  onChange={(e) => setNam(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown onSelect={handleSelectNam} className="dropdown">
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="นาย">นาย</Dropdown.Item>
                      <Dropdown.Item eventKey="นาง">นาง</Dropdown.Item>
                      <Dropdown.Item eventKey="นางสาว">นางสาว</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              lg={2}
              className="d-flex justify-content-center"
              style={{ padding: 0 }}
            >
              <Form.Label>ชื่อ</Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-start"
            style={{ padding: 0 }}
          >
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>นามสกุล</Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              lg={3}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>ชื่อเล่น</Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-start nam"
              lg={5}
              style={{ padding: 0 }}
            >
              <Form.Label>ชื่อAKA</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Control
                type="text"
                placeholder=""
                value={aka}
                onChange={(e) => setAka(e.target.value)}
                className="aka-form"
              ></Form.Control>
            </Col>
          </Col>
          <Col lg={5} className="d-flex justify-content-start">
            <Col
              className="d-flex justify-content-center"
              lg={3}
              style={{ padding: 0 }}
            >
              <Form.Label>เบอร์โทรศัพท์</Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
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
          </Col>
          <Col
            lg={4}
            className="d-flex justify-content-start"
            style={{ paddingLeft: 0 }}
          >
            <Col
              className="d-flex justify-content-start"
              lg={6}
              style={{ padding: 0 }}
            >
              <Form.Label>เลขบัตรประชาชน/พาสปอร์ต</Form.Label>
            </Col>
            <Col className="d-flex justify-content-end" style={{ padding: 0 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={iD_card}
                onChange={(e) => setID_card(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              lg={5}
              className="d-flex justify-content-start nam"
              style={{ padding: 0 }}
            >
              <Form.Label>จังหวัด</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown onSelect={handleSelectCity} className="dropdown">
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="เชียงใหม่">
                        เชียงใหม่
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="กรุงเทพ">กรุงเทพ</Dropdown.Item>
                      <Dropdown.Item eventKey="เชียงราย">
                        เชียงราย
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col lg={3} className="d-flex justify-content-start">
            <Col
              lg={3}
              className="d-flex justify-content-center"
              style={{ padding: 0 }}
            >
              <Form.Label>อำเภอ</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown
                    onSelect={handleSelectDistrict}
                    className="dropdown"
                  >
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="เมือง">เมือง</Dropdown.Item>
                      <Dropdown.Item eventKey="ลาดพร้าว">
                        ลาดพร้าว
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="ลาดแก้ว">ลาดแก้ว</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
          <Col
            lg={3}
            className="d-flex justify-content-start"
            style={{ padding: 0 }}
          >
            <Col
              lg={4}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>รหัสไปรษณีย์ </Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <Form.Control
                type="text"
                placeholder=""
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={4} className="d-flex justify-content-start">
            <Col
              lg={4}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>ช่องทางการติดต่อ</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <div className="input-dropdown">
                <Form.Control
                  type="text"
                  placeholder=""
                  value={contract}
                  onChange={(e) => setContract(e.target.value)}
                  disabled
                ></Form.Control>
                <Col
                  className="d-flex justify-content-end set-dropdown"
                  style={{ padding: 0 }}
                >
                  <Dropdown
                    onSelect={handleSelectContract}
                    className="dropdown"
                  >
                    <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                      {/* {value} */}
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                      <Dropdown.Item eventKey="Email">Email</Dropdown.Item>
                      <Dropdown.Item eventKey="Facebook">
                        Facebook
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Twitter">]Twitter</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </div>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={4} className="d-flex justify-content-start">
            <Col
              lg={4}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>ชื่อผู้แนะนำ </Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <Form.Control
                type="text"
                placeholder=""
                value={recommender}
                onChange={(e) => setRecommender(e.target.value)}
              ></Form.Control>
            </Col>
          </Col>
        </Row>
        <Row className="row-form-create-memeber">
          <Col lg={5} className="d-flex justify-content-start">
            <Col
              lg={3}
              className="d-flex justify-content-start mr-2"
              style={{ padding: 0 }}
            >
              <Form.Label>หมายเหตุ </Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: '121px' }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </Col>
          </Col>
          <Col lg={6} className="d-flex justify-content-start">
            <Col
              lg={4}
              className="d-flex justify-content-start"
              style={{ padding: 0 }}
            >
              <Form.Label>ความต้องการพิเศษ</Form.Label>
            </Col>
            <Col
              className="d-flex justify-content-start "
              style={{ padding: 0 }}
            >
              <Form.Control
                as="textarea"
                placeholder=""
                style={{ height: '121px' }}
                value={spacial_skill}
                onChange={(e) => setSpacial_skill(e.target.value)}
              />
            </Col>
          </Col>
        </Row>
        <Row>
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
                <Col
                  lg={2}
                  className="d-flex justify-content-center"
                  style={{ padding: 0 }}
                >
                  <Button className="button-modal-segment">
                    <img src={Search} /> &nbsp; ค้นหา
                  </Button>
                </Col>
                <Col
                  lg={2}
                  className="d-flex justify-content-center"
                  style={{ padding: 0 }}
                >
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
        </Row>
      </Container>
    </>
  );
}
