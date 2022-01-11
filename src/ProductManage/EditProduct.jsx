import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Pagination,
  Button,
  Table,
  Form,
} from 'react-bootstrap';
import '../assets/css/app.css';
import '../assets/css2/css/app.css';

import '../assets/css2/css/modal.css';
import '../assets/css2/css/employee.css';
import '../assets/css2/css/responsive.css';
import '../assets/css2/css/input.css';
import '../assets/css2/css/table.css';
import '../assets/css2/css/mr.kleane.css';
import Select, { components } from 'react-select';
import view from '../assets/icon/view-data.png';
import Write from '../assets/icon/add-staff.png';
import { useHistory } from 'react-router-dom';
import NavbarTop from '../Components/NavbarTop';
import Footer from '../Components/Footer';
import TabsIcon from '../Components/layout/TabsIcon';
import Back from '../assets/icon/back.png';
import MenuProduct from '../Components/layout/MenuProduct';
import Management from '../assets/icon/management.png';
import Save from '../assets/icon/save.png';
import Return from '../assets/icon/new-re-turn.png';
import { Switch } from 'antd';
export default function AddProduct() {
  const history = useHistory();
  const [statuscProduct, setStatusProduct] = useState(false);
  const [productType, setProductType] = useState([{ value: '', label: '' }]);
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState([
    { value: '', label: '' },
  ]);
  const [productCode, setProductCode] = useState('');
  const [productName, setProductName] = useState('');
  const [unitBuy, setUnitBuy] = useState([{ value: '', label: '' }]);
  const [unitSell, setUnitSell] = useState([{ value: '', label: '' }]);
  const [comment, setComment] = useState('');
  const [pointBuy, setPointBuy] = useState('');
  const [pointLow, setPointLow] = useState([{ value: '', label: '' }]);
  const [page, setPage] = useState([{ value: '', label: '' }]);

  const optionPage = [
    { value: 'ทั้งหมด', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];
  const statusProductToggler = () => {
    statuscProduct ? setStatusProduct(false) : setStatusProduct(true);
  };

  const optionProductType = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];

  const optionProductCategory = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];

  const optionUnitBuy = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];

  const optionUnitSell = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];

  const optionPointLow = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];
  function SetProductType(data) {
    setProductType({ value: data.value, label: data.value });
  }
  function SetProductCategory(data) {
    setProductCategory({ value: data.value, label: data.value });
  }
  function SetUnitBuy(data) {
    setUnitBuy({ value: data.value, label: data.value });
  }
  function SetUnitSell(data) {
    setUnitSell({ value: data.value, label: data.value });
  }
  function SetPointLow(data) {
    setPointLow({ value: data.value, label: data.value });
  }
  function closeProduct() {
    let path = `/`;
    history.push(path);
  }
  function SetNumberPerPage(data) {
    setPage({ value: data.value, label: data.value });
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock User bg-mrk">
        <div className="package">
          <div>
            <div className="modal-dialog modal-xl" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Management} />
                    <b>สินค้า &gt; แก้ไข</b>
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={closeProduct}
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
                    onClick={closeProduct}
                  >
                    <img src={Back} />
                  </button>
                  <h5 className="modal-title" id="exampleModalLabel">
                    <img className="logo pr-2" src={Management} />
                    <b>สินค้า &gt; แก้ไข</b>
                  </h5>
                </div>
                <div className="modal-body set-menu-productmanage">
                  <Row className="g-0 tabsicon justify-content-center ">
                    <TabsIcon />
                  </Row>
                  <Row className="g-0 justify-content-center mb-3 pb-3 border-bottom">
                    <MenuProduct />
                  </Row>
                  <Form>
                    <Row>
                      <Col className="mt-3 text-left">
                        <Form.Label>
                          <b>รายละเอียดสินค้า</b>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0  mt-2 mb-2">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>ประเภทสินค้า</Form.Label>
                          </Col>
                          <Col>
                            <Select
                              options={optionProductType}
                              placeholder=""
                              isClearable={false}
                              isSearchable={false}
                              onChange={(data) => SetProductType(data)}
                              className="select-list"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>ราคา</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              value={productPrice}
                              onChange={(e) => setProductPrice(e.target.value)}
                            ></Form.Control>
                          </Col>
                          <Col xs={1} className="text-left">
                            <Form.Label>บาท</Form.Label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-2 mb-2">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>หมวดหมู่</Form.Label>
                          </Col>
                          <Col>
                            <Select
                              options={optionProductCategory}
                              placeholder=""
                              isClearable={false}
                              isSearchable={false}
                              onChange={(data) => SetProductCategory(data)}
                              className="select-list"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>รหัสสินค้า</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              value={productCode}
                              onChange={(e) => setProductCode(e.target.value)}
                            ></Form.Control>
                          </Col>
                          <Col xs={1}>
                            <Form.Label></Form.Label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-2 mb-2 pb-4 border-bottom">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>ชื่อสินค้า</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              value={productName}
                              onChange={(e) => setProductName(e.target.value)}
                            ></Form.Control>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mt-2 mb-2"></Col>
                    </Row>
                    <Row>
                      <Col className="mt-3 text-left">
                        <Form.Label>
                          <b>ข้อมูลการสั่ง</b>
                        </Form.Label>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-2 mb-2">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>หน่วยซื้อ</Form.Label>
                          </Col>
                          <Col>
                            <Select
                              options={optionUnitBuy}
                              placeholder=""
                              isClearable={false}
                              isSearchable={false}
                              onChange={(data) => SetUnitBuy(data)}
                              className="select-list"
                            />
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>หน่วยขาย</Form.Label>
                          </Col>
                          <Col>
                            <Select
                              options={optionUnitSell}
                              placeholder=""
                              isClearable={false}
                              isSearchable={false}
                              onChange={(data) => SetUnitSell(data)}
                              className="select-list"
                            />
                          </Col>
                          <Col xs={1}>
                            <Form.Label></Form.Label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-2 mb-2 pb-3 ">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>หมายเหตุ</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                            ></Form.Control>
                          </Col>
                        </Row>
                      </Col>
                      <Col className="mt-2 mb-2"></Col>
                    </Row>
                    <Row>
                      <Col className="mt-3 text-left">
                        <Row className="align-items-center justify-content-start">
                          <Col>
                            <Form.Label>
                              <b>แจ้งเตือนจำนวนสินค้า</b>
                            </Form.Label>
                          </Col>
                          <Col>
                            <Switch onClick={statusProductToggler} />
                          </Col>
                        </Row>
                      </Col>
                      <Col></Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-2 mb-2">
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>จุดสั่งซื้อ</Form.Label>
                          </Col>
                          <Col>
                            <Form.Control
                              value={pointBuy}
                              onChange={(e) => setPointBuy(e.target.value)}
                            ></Form.Control>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={6} className="mt-2 mb-2">
                        <Row className="align-items-center">
                          <Col xs={4} className="text-left">
                            <Form.Label>จุดต่ำสุด</Form.Label>
                          </Col>
                          <Col>
                            <Select
                              options={optionPointLow}
                              placeholder=""
                              isClearable={false}
                              isSearchable={false}
                              onChange={(data) => SetPointLow(data)}
                              className="select-list"
                            />
                          </Col>
                          <Col xs={1}>
                            <Form.Label></Form.Label>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="g-0 justify-content-center m-0 mt-5 mb-5">
                      <Col lg={2} className="mt-2 mb-2">
                        <Button type="button" className="button">
                          <img src={Save} /> &nbsp; บันทึก
                        </Button>
                      </Col>
                      <Col lg={2} className="mt-2 mb-2">
                        <Button type="button" className="button">
                          <img src={Return} /> &nbsp; ออก
                        </Button>
                      </Col>
                    </Row>
                  </Form>
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
