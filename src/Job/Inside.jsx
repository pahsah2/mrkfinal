import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Modal,
  Form,
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
import Product_Component from '../Components/Job/Product';
import Service_Component from '../Components/Job/Service';
import Package_Component from '../Components/Job/Package';

export default function Inside() {
  const history = useHistory();
  const [product, setProduct] = useState(true);
  const [service, setService] = useState(false);
  const [Package, setPackage] = useState(false);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  function close() {
    let path = `/`;
    history.push(path);
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
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Stock Job">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  <b>
                    JOB &gt; ภายในร้าน &gt; &nbsp;
                    {product && !service && !Package ? 'ร้านค้า' : ''}
                    {!product && service && !Package ? 'บริการ' : ''}
                    {!product && !service && Package ? 'แพคเกจ' : ''}
                  </b>
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
                  <b>
                    JOB &gt; ภายในร้าน &gt; &nbsp;
                    {product && !service && !Package ? 'ร้านค้า' : ''}
                    {!product && service && !Package ? 'บริการ' : ''}
                    {!product && !service && Package ? 'แพคเกจ' : ''}
                  </b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabsIcon />
                </Row>

                {/* <Row className="g-0 justify-content-center">
                  <GroupButtonStock />
                </Row> */}
                <Row className="justify-content-center">
                  <Col lg={11}>
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
                      {product && !service && !Package ? (
                        <Product_Component />
                      ) : (
                        ''
                      )}
                      {!product && service && !Package ? (
                        <Service_Component />
                      ) : (
                        ''
                      )}
                      {!product && !service && Package ? (
                        <Package_Component />
                      ) : (
                        ''
                      )}
                    </Row>
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
