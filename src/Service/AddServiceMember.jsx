import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Dropdown,
  Form,
} from 'react-bootstrap';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import { useHistory } from 'react-router-dom';
import TabsIconAdd from '../Components/layout/TabsIconAdd';
import TabsIcon from '../Components/layout/TabsIcon';
import MenuInput from '../Components/layout/MenuInput';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Write from '../assets/icon/flat-style-circle-write.png';

import Delete from '../assets/icon/deletes.png';
import Increase from '../assets/icon/increase.png';
import { Switch, DatePicker, Space } from 'antd';
import 'antd/dist/antd.css';

import DeleteWash from '../assets/icon/flat-style-circle-delete.png';
import Save from '../assets/icon/flat-style-circle-save.png';
import Turnoff from '../assets/icon/flat-style-circle-turn-on.png';
import DeleteProduct from '../assets/icon/delete.png';

export default function AddServiceMember() {
  const history = useHistory();

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);

  const [showroom, setShowRoom] = useState('');
  const [pass_package, setPass_package] = useState('');
  const [time_service, setTime_service] = useState('');
  const [calendar, setCalendar] = useState('');
  const [number_Service, setNumber_Service] = useState('');
  const [upload_image, setUpload_image] = useState('');
  const [category, setCategory] = useState('');
  // ขนาดรถและราคา
  const [car_size_S, setCar_Size_S] = useState('');
  const [car_size_M, setCar_Size_M] = useState('');
  const [car_size_L, setCar_Size_L] = useState('');
  const [car_truck_cab, setCar_Truck_Cab] = useState('');
  const [car_suv, setCar_Suv] = useState('');
  const [car_truck4Door, setCar_Truck4Door] = useState('');
  const [car_size_XL, setCar_Size_XL] = useState('');
  const [car_van, setCar_Van] = useState('');

  const [time_car_size_S, setTime_car_size_S] = useState('');
  const [time_car_size_M, setTime_car_size_M] = useState('');
  const [time_car_size_L, setTime_car_size_L] = useState('');
  const [time_car_truck_cab, setTime_Car_Truck_Cab] = useState('');
  const [time_car_suv, setTime_car_suv] = useState('');
  const [time_car_truck4Door, setTime_car_truck4Door] = useState('');
  const [time_car_size_XL, setTime_car_size_XL] = useState('');
  const [time_car_van, setTime_car_van] = useState('');
  const [package_Name, setPackage_Name] = useState('');
  // วัสดุ/อุปกรณ์อ้างอิง
  const [size_S, setSize_S] = useState('');
  const [size_M, setSize_M] = useState('');
  const [size_L, setSize_L] = useState('');
  const [truck, setTruck] = useState('');
  const [suv, setSuv] = useState('');
  const [truck4Door, setTruck4Door] = useState('');
  const [size_XL, setSize_XL] = useState('');
  const [van, setVan] = useState('');
  const [statusService, setStatusService] = useState(false);
  const [check_product, setCheck_product] = useState(true);
  const [check_service, setCheck_Service] = useState(false);
  const [check_package, setCheck_Package] = useState(false);
  const [number_Coating, setNumber_Coating] = useState(0);
  const [number_Package_Wash, setNumber_Package_Wash] = useState('');
  const [price_all, setPrice_all] = useState('');
  const [runtime, set_Runtime] = useState('');
  const [statusclose_price_all, setStatusclose_price_all] = useState({
    disabled: true,
  });
  const statusServiceToggler = () => {
    statusService ? setStatusService(false) : setStatusService(true);
  };
  const statusClosePriceall = () => {
    statusclose_price_all
      ? setStatusclose_price_all(false)
      : setStatusclose_price_all(true);
  };
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  const handleSelectShowRoom = (e) => setShowRoom(e);
  const handleSelectCategory = (e) => setCategory(e);
  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>บริการ &gt; เพิ่ม</b>
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={closePackage}
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
                  onClick={closePackage}
                >
                  <img src={Back} />
                </button>
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>บริการ &gt; เพิ่ม</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>
                <Form>
                  <p className="form-title">รายละเอียดบริการ</p>
                  <Form.Group
                    className="package-data"
                    controlId="formBasicEmail"
                  >
                    <Row className="g-0">
                      <Col
                        xs={2}
                        sm={3}
                        md={3}
                        lg={2}
                        xl={2}
                        className="text-title"
                      >
                        <p>ชื่อบริการ</p>
                      </Col>
                      <Col xs={10} md={6} lg={5} xl={4}>
                        <Form.Control
                          type="text"
                          placeholder=""
                          // defaultValue={statepage[0]}
                          value={package_Name}
                          onChange={(e) => setPackage_Name(e.target.value)}
                          className="input-middle-price"
                        ></Form.Control>
                      </Col>
                    </Row>
                    <Row className="g-0 mt-2 mb-2">
                      <Col
                        xs={2}
                        sm={3}
                        md={3}
                        lg={2}
                        xl={2}
                        className="text-title"
                      >
                        <p>หมวดหมู่</p>
                      </Col>
                      <Col xs={10} md={6} lg={5} xl={4}>
                        <div className="input-dropdown-Menu-add">
                          <Form.Control
                            type="text"
                            placeholder="ประเภท
                    "
                            // defaultValue={statepage[0]}
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            disabled
                          ></Form.Control>
                          <Col
                            className="d-flex justify-content-end set-dropdown"
                            style={{ padding: 0 }}
                          >
                            <Dropdown
                              onSelect={handleSelectCategory}
                              className="dropdown w-100"
                            >
                              <Dropdown.Toggle
                                variant="secondary "
                                id="dropdown-basic"
                              >
                                {/* {showroom} */}
                              </Dropdown.Toggle>
                              <Dropdown.Menu
                                style={{ backgroundColor: '#73a47' }}
                              >
                                <Dropdown.Item eventKey="บริการทำความสะอาดรถ">
                                  บริการทำความสะอาดรถ
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="แพคเกจล้างรถ (ระยะเวลา 1 ปี)">
                                  แพคเกจล้างรถ (ระยะเวลา 1 ปี)
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="เหมาบริการ + เคลือบ Wax">
                                  เหมาบริการ + เคลือบ Wax
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="แพคเกจล้างรถ + เคลือบ Wax">
                                  แพคเกจล้างรถ + เคลือบ Wax
                                </Dropdown.Item>
                                <Dropdown.Item eventKey="กล่องสุดคุ้ม น้ำยา Wax+PCS+SC">
                                  กล่องสุดคุ้ม น้ำยา Wax+PCS+SC
                                </Dropdown.Item>
                              </Dropdown.Menu>
                            </Dropdown>
                          </Col>
                        </div>
                      </Col>
                    </Row>
                  </Form.Group>

                  <Row>
                    <Col lg={1} className="colum-open-service">
                      <Switch onClick={statusClosePriceall} />
                    </Col>
                  </Row>
                  {/* ///// */}

                  <Row>
                    <Col lg={6}>
                      <Row>
                        <Col
                          xs={4}
                          sm={3}
                          md={3}
                          lg={4}
                          xl={4}
                          className="text-title"
                        >
                          <p>ราคาเหมา</p>
                        </Col>
                        <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                          <Form.Control
                            type="text"
                            placeholder=""
                            // defaultValue={statepage[0]}
                            value={price_all}
                            onChange={(e) => setPrice_all(e.target.value)}
                            className="input-search-add-wash-part"
                            disabled={
                              setStatusclose_price_all.statusclose_price_all
                                ? 'disabled'
                                : ''
                            }
                          ></Form.Control>
                        </Col>
                        <Col xs={1} sm={2} className="text-bath">
                          <p>บาท</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                      <Row>
                        <Col
                          xs={4}
                          sm={3}
                          md={3}
                          lg={3}
                          xl={3}
                          className="text-title"
                        >
                          <p>เวลาดำเนินการ</p>
                        </Col>
                        <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                          <Form.Control
                            type="text"
                            placeholder=""
                            // defaultValue={statepage[0]}
                            value={runtime}
                            onChange={(e) => set_Runtime(e.target.value)}
                            className="input-search-add-wash-part"
                            disabled={
                              setStatusclose_price_all.statusclose_price_all
                                ? 'disabled'
                                : ''
                            }
                          ></Form.Control>
                        </Col>
                        <Col xs={1} sm={2} className="text-bath">
                          <p>นาที</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                  {/* //// */}
                  <Form.Group
                    className="package-data "
                    controlId="formBasicEmail"
                  >
                    <p className="form-title">ราคาตามขนาดรถ</p>
                    <Row mt-3>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>S</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_size_S}
                              onChange={(e) => setCar_Size_S(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_size_S}
                              onChange={(e) =>
                                setTime_car_size_S(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>M</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_size_M}
                              onChange={(e) => setCar_Size_M(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_size_M}
                              onChange={(e) =>
                                setTime_car_size_M(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>L</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_size_L}
                              onChange={(e) => setCar_Size_L(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_size_L}
                              onChange={(e) =>
                                setTime_car_size_L(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>TRUCK CAB</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_truck_cab}
                              onChange={(e) => setCar_Truck_Cab(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_truck_cab}
                              onChange={(e) =>
                                setTime_Car_Truck_Cab(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>SUV</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_suv}
                              onChange={(e) => setCar_Suv(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_suv}
                              onChange={(e) => setTime_car_suv(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>TRUCK 4 DOOR </p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={car_truck4Door}
                              onChange={(e) =>
                                setCar_Truck4Door(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_truck4Door}
                              onChange={(e) =>
                                setTime_car_truck4Door(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>XL</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={setCar_Size_XL}
                              onChange={(e) => setCar_Size_XL(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_size_XL}
                              onChange={(e) =>
                                setTime_car_size_XL(e.target.value)
                              }
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={4}
                            xl={4}
                            className="text-title"
                          >
                            <p>VAN</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={setCar_Van}
                              onChange={(e) => setCar_Van(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} sm={2} className="text-bath">
                            <p>บาท</p>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6}>
                        <Row>
                          <Col
                            xs={4}
                            sm={3}
                            md={3}
                            lg={3}
                            xl={3}
                            className="text-title"
                          >
                            <p>เวลาดำเนินการ</p>
                          </Col>
                          <Col xs={7} sm={4} md={4} lg={6} xl={4}>
                            <Form.Control
                              type="text"
                              placeholder=""
                              // defaultValue={statepage[0]}
                              value={time_car_van}
                              onChange={(e) => setTime_car_van(e.target.value)}
                              className="input-search-add-wash-part"
                            ></Form.Control>
                          </Col>
                          <Col xs={1} className="text-bath">
                            <p>นาที</p>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
                <Row>
                  <Col className="colum-open-service">
                    <p>เปิด/ปิด ให้บริการ</p>{' '}
                    <Switch onClick={statusServiceToggler} />{' '}
                  </Col>
                </Row>
                <Row className="g-0 d-flex justify-content-center row-delete-mobile">
                  <Button type="submit" className="button-package-save">
                    <img src={Delete} className="" /> &nbsp; ลบแพคเกจ
                  </Button>
                </Row>
                <Row className="g-0 mt-5 mb-5">
                  <Col className="d-flex justify-content-center">
                    <Button type="submit" className="button-package-save">
                      <img src={Save} className="" /> &nbsp; &nbsp; บันทึก
                    </Button>
                    <Button type="submit" className="button-package-save">
                      <img src={Turnoff} className="" /> &nbsp; &nbsp; ออก
                    </Button>
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
