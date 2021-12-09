import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react';
import Select, { components } from 'react-select';
import { Switch } from 'antd';
import Save from '../../assets/icon/flat-style-circle-save.png';
import print from '../../assets/icon/print.png';
import Return from '../../assets/icon/flat-style-circle-turn-on.png';
import Delete from '../../assets/icon/delete-button.png';

import Product_Component from './Order/Product';
import Service_Component from './Order/Service';
import Package_Component from './Order/Package';
export default function Order(props) {
  const [statusService, setStatusService] = useState(false);
  const [tax, setTax] = useState([{ value: '', label: '' }]);
  const [statusJob, setStatusJob] = useState([{ value: '', label: '' }]);

  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };

  const [product, setProduct] = useState(true);
  const [service, setService] = useState(false);
  const [Package, setPackage] = useState(false);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const handleProduct = () => {
    setProduct(true);
    setService(false);
    setPackage(false);
  };
  const handleService = () => {
    setProduct(false);
    setService(true);
    setPackage(false);
  };
  const handlePackage = () => {
    setProduct(false);
    setService(false);
    setPackage(true);
  };

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
  const optionStatusJob = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: 'รออนุมัติ', label: 'รออนุมัติ' },
    { value: 'อนุมัติ', label: 'อนุมัติ' },
    { value: 'ปฎิเสธ', label: 'ปฎิเสธ' },
    { value: 'รอดำเนินการ', label: 'รอดำเนินการ' },
    { value: 'ดำเนินการ', label: 'ดำเนินการ' },
    { value: 'ยกเลิก', label: 'ยกเลิก' },
    { value: 'เสร็จสิ้น', label: 'เสร็จสิ้น' },
  ];
  function SetTax(data) {
    setTax({ value: data.value, label: data.value });
  }
  function SetStatusJob(data) {
    setStatusJob({ value: data.value, label: data.value });
  }
  const handleDropDownSelect = (event, data) => {
    console.log(data.value);
  };

  // Uploadimage ////////////////////////////////
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesAfter, setSelectedFilesAfter] = useState([]);
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
  const removeImage = (photo) => {
    setSelectedFiles((selectedFiles) =>
      selectedFiles.splice(
        selectedFiles.findIndex((item) => item === photo),
        1
      )
    );
    console.log('photo: ', selectedFiles);
  };
  const renderPhotos = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return (
        <div key={photo} className="setting-upload">
          <button onClick={() => removeImage(photo)}>
            <img src={Delete} />
          </button>
          <img src={photo} alt="" className="setting-image" />
        </div>
      );
    });
  };

  const handleImageChangeAfter = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArrayAfter = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFilesAfter((prevImages) => prevImages.concat(filesArrayAfter));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };
  const renderPhotosAfter = (source) => {
    console.log('source: ', source);
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} className="setting-image" />;
    });
  };
  //////////////////////////////////////

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
              <div className="position-select-job">
                <Select
                  options={optionStatusJob}
                  defaultValue={optionStatusJob[0]}
                  isClearable={false}
                  isSearchable={false}
                  onChange={(data) => SetStatusJob(data)}
                  className="select-list"
                />
              </div>
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
                  <Form.Label>ลูกค้าไม่ได้ชำระเอง</Form.Label> &nbsp;
                  <Switch onClick={statusServiceToggler} />
                </Col>
                <Col xs={12} className="mt-3 mb-3">
                  <Form.Control></Form.Control>
                </Col>
                <Col xs={12} className="mt-3 mb-3">
                  <Form.Control></Form.Control>
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
                <Col xs={12} lg={11}>
                  <Form.Label>
                    เลขทะเบียนรถ : กด-252 รายละเอียด : ยี่ห้อ : Honda, รุ่น
                    Civic -1.8 el, สี : ขาว, ป้าย : ธรรมดา, จังหวัด : เชียงใหม่
                    เลขตัวถัง : 484226
                  </Form.Label>
                </Col>
                <Col xs={12} lg={1} className="text-right">
                  <Form.Label>
                    <a
                      href="#"
                      style={{ color: 'black', textDecoration: 'underline' }}
                    >
                      แก้ไข
                    </a>
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
              <Row className="mt-4 mb-4 justify-content-center">
                <Col className="d-flex justify-content-start set-position-radio">
                  {['radio'].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="สินค้า"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                        onChange={handleProduct}
                        checked={product}
                      />
                      <Form.Check
                        inline
                        label="บริการ"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                        onChange={handleService}
                        checked={service}
                      />
                      <Form.Check
                        inline
                        label="แพคเกจ"
                        name="group1"
                        type={type}
                        id={`inline-${type}-3`}
                        onChange={handlePackage}
                        checked={Package}
                      />
                    </div>
                  ))}
                </Col>
              </Row>
              <Row>
                {product && !service && !Package ? <Product_Component /> : ''}
                {!product && service && !Package ? <Service_Component /> : ''}
                {!product && !service && Package ? <Package_Component /> : ''}
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
                <Col
                  xs={12}
                  className="text-left ml-3 mt-3 mb-3 d-flex align-items-center"
                >
                  <Form.Label className=" font-weight-bold">ก่อนทำ</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col lg={10} className="d-flex justify-content-start">
                  <div className="scale-image multi-preview">
                    <div className="result">
                      <Row>{renderPhotos(selectedFiles)}</Row>
                    </div>
                  </div>
                </Col>
                <Col
                  lg={2}
                  className="d-flex justify-content-center align-items-center  mt-3 mb-3"
                >
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
            </Col>
            <Col xs={12} className="mt-3 mb-3">
              <Row>
                <Col
                  xs={12}
                  className="text-left ml-3 mt-3 mb-3 d-flex align-items-center"
                >
                  <Form.Label className=" font-weight-bold">หลังทำ</Form.Label>
                </Col>
              </Row>
              <Row>
                <Col lg={10} className="d-flex justify-content-start">
                  <div className="scale-image multi-preview">
                    <div className="result">
                      {renderPhotosAfter(selectedFilesAfter)}
                    </div>
                  </div>
                </Col>
                <Col
                  lg={2}
                  className="d-flex justify-content-center align-items-center mt-3 mb-3"
                >
                  <input
                    type="file"
                    id="fileAfter"
                    multiple
                    onChange={handleImageChangeAfter}
                  />
                  <div className="label-holder">
                    <label htmlFor="fileAfter" className="label">
                      อัพโหลดภาพ
                    </label>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={12} className="mt-3 mb-3">
              <Row className="align-items-center">
                <Col lg={6}>
                  <Col>
                    <Row className="mt-3 mb-3">
                      <Col xs={12} lg={3} className="text-left">
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
                      <Col xs={12} lg={3} className="text-left">
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
                <Col lg={6}>
                  <Row className="bg-data-sum pt-2 pb-2">
                    <Col xs={12}>
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
                          {['checkbox'].map((type) => (
                            <div key={`inline-${type}`}>
                              <Row>
                                <Col md={5} lg={7} xl={5} className="d-flex">
                                  <Form.Check
                                    inline
                                    label="หักภาษี ณ ที่จ่าย"
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                    className="checkbox-input"
                                  />
                                </Col>
                                <Col xs={8} md={5} className="mt-1 mb-1">
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
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="g-0 pt-5 pb-3 bg-white justify-content-between">
            <Col xs={12} md={10} lg={9}>
              <Row>
                <Col xs={6} md={3} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    <img src={Save} /> &nbsp; บันทึก
                  </Button>
                </Col>
                <Col xs={6} md={3} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    มอบหมายงาน
                  </Button>
                </Col>
                <Col xs={6} md={3} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    <img src={print} /> &nbsp; พิมพ์เอกสาร
                  </Button>
                </Col>
                <Col xs={6} md={3} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    รับรถ
                  </Button>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className="justify-content-end">
                <Col lg={9} className="mt-2 mb-2">
                  <Button type="button" className="button">
                    <img src={Return} /> &nbsp; ออก
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
}