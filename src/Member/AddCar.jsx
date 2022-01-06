import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import Select from 'react-select';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIcon from '../Components/layout/TabsIcon';
import save from '../assets/icon/new-save.png';
import cancel from '../assets/icon/new-cancel.png';
import delete_button from '../assets/icon/delete.png';
import Service from '../assets/icon/management.png';
import Back from '../assets/icon/back.png';

export default function AddCar(props) {
  const [brand, setBrand] = useState([{ value: 'benz', label: 'เบ้นซ์' }]);
  const [model, setModel] = useState([{ value: 'cxxx', label: 'cxxx' }]);
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [color_car, setColor_car] = useState('');
  const [size_motor, setSize_motor] = useState('');
  const [infographic, setInfographic] = useState([
    { value: 'ป้ายแดง', label: 'ป้ายแดง' },
    { value: 'ป้ายขาว', label: 'ป้ายขาว' },
    { value: 'ไม่มีป้าย', label: 'ไม่มีป้าย' },
  ]);
  const [regis_number, setRegis_number] = useState([{ value: '', label: '' }]);
  const [city, setCity] = useState([{ value: '', label: '' }]);
  const [bucket_number, setBucket_number] = useState('');
  const [mile, setMile] = useState('');
  const [paint_coating, setPaint_coating] = useState('');
  const [image_car, setImage_car] = useState('');
  const [note, setNote] = useState('');
  const history = useHistory();

  function SetRegis_number(data) {
    setRegis_number({ value: data.value, label: data.value });
  }
  function Setcity(data) {
    setCity({ value: data.value, label: data.value });
  }

  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} className="setting-image" />;
    });
  };

  function close() {
    let path = `/`;
    history.push(path);
  }

  return (
    <>
      <NavbarTop />
      <Container fluid className=" package-container Service Stock User bg-mrk">
        <div className="package ">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>ลูกค้า &gt; สร้างข้อมูลรถ</b>
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
                  <b>ลูกค้า &gt; สร้างข้อมูลรถ</b>
                </h5>
              </div>
              <div className="modal-body add-car">
                <Row className="m-0">
                  <TabsIcon />
                </Row>
                <Row>
                  <Col className="d-flex justify-content-start">
                    <p className="title-addcar">เพิ่มข้อมูลรถยนต์</p>
                  </Col>
                </Row>
                <Form>
                  <Row className=" ">
                    <Col>
                      <Row className="row-form-create-memeber align-items-center">
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>ยี่ห้อ</Form.Label>
                            </Col>
                            <Col>
                              <Select
                                // ref={selectPage}
                                options={brand}
                                placeholder=""
                                // defaultValue={city[0]}
                                onChange={(e) => setBrand(brand)}
                                className="select-add-member"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={4} className="text-left">
                              <Form.Label>รุ่นและรหัสรุ่น</Form.Label>
                            </Col>
                            <Col>
                              <Select
                                // ref={selectPage}
                                options={model}
                                placeholder=""
                                // defaultValue={city[0]}
                                onChange={(e) => setModel(model)}
                                className="select-add-member"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>ประเภท</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="text-input"
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="row-form-create-memeber align-items-center">
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>ปี</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>สีรถ</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={color_car}
                                onChange={(e) => setColor_car(e.target.value)}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={4} className="text-left">
                              <Form.Label>ขนาดเครื่องยนต์</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={size_motor}
                                onChange={(e) => setSize_motor(e.target.value)}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="row-form-create-memeber align-items-center">
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>ประเภทป้าย</Form.Label>
                            </Col>
                            <Col>
                              <Select
                                // ref={selectPage}
                                options={infographic}
                                placeholder=""
                                // defaultValue={city[0]}
                                onChange={(e) => setInfographic(infographic)}
                                className="select-add-member"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>เลขทะเบียน</Form.Label>
                            </Col>
                            <Col>
                              <Select
                                options={regis_number}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => SetRegis_number(data)}
                                className="select-list"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>จังหวัด</Form.Label>
                            </Col>
                            <Col>
                              <Select
                                options={city}
                                placeholder=""
                                isClearable={false}
                                isSearchable={false}
                                onChange={(data) => Setcity(data)}
                                className="select-list"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="row-form-create-memeber align-items-center ">
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>หมายเลขตัวถัง</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={bucket_number}
                                onChange={(e) =>
                                  setBucket_number(e.target.value)
                                }
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>เลขไมล์</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={mile}
                                onChange={(e) => setMile(e.target.value)}
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={4} className="mt-2 mb-2">
                          <Row className="align-items-center">
                            <Col lg={3} className="text-left">
                              <Form.Label>ความหนาสีรถยนต์</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                type="text"
                                placeholder=""
                                value={paint_coating}
                                onChange={(e) =>
                                  setPaint_coating(e.target.value)
                                }
                              ></Form.Control>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="row-form-create-memeber align-items-center">
                        <Col lg={9} className="d-flex justify-content-start">
                          <div className="scale-image multi-preview">
                            <div className="result">
                              {renderPhotos(selectedFiles)}
                            </div>
                          </div>
                        </Col>
                        <Col lg={3} className="d-flex justify-content-center">
                          <input
                            type="file"
                            id="file"
                            multiple
                            onChange={handleImageChange}
                          />
                          <div className="label-holder">
                            <label htmlFor="file" className="label">
                              อัพโหลดภาพ
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <Row className="row-form-create-memeber align-items-center">
                        <Col lg={4} className="mt-2 mb-2">
                          <Row>
                            <Col lg={3} className="text-left">
                              <Form.Label>หมายเหตุ</Form.Label>
                            </Col>
                            <Col>
                              <Form.Control
                                as="textarea"
                                placeholder=""
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                rows={3}
                                className="text-area"
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className="justify-content-between">
                        <Col xs={12} lg={6} className="">
                          <Row>
                            <Col xs={12} lg={6} xl={4} className="mt-2 mb-2">
                              <Button
                                type="button"
                                className="btn-upload-image"
                              >
                                <img src={save} />
                                &nbsp; บันทึก
                              </Button>
                            </Col>
                            <Col xs={12} lg={6} xl={4} className="mt-2 mb-2">
                              <Button
                                type="button"
                                className="btn-upload-image"
                              >
                                <img src={delete_button} />
                                &nbsp; ลบ
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12} lg={6} className="">
                          <Row className="justify-content-end">
                            <Col lg={6} xl={4} className="mt-2 mb-2">
                              <Button
                                type="button"
                                className="btn-upload-image"
                              >
                                <img src={cancel} />
                                &nbsp; ยกเลิก
                              </Button>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
