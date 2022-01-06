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
import TabIconManagement from '../Components/layout/TabIconManagement';
import MenuManagement from '../Components/layout/MenuManagement';
import Back from '../assets/icon/back.png';
import Staff from '../assets/icon/staff.png';
import Service from '../assets/icon/management.png';
import Branch_manage from '../assets/icon/branch-manage.png';
import Write from '../assets/icon/flat-style-circle-write.png';
import Note from '../assets/icon/address_book.png';
import View from '../assets/icon/view-member.png';
import ReactApexChart from 'react-apexcharts';
import Pie from 'react-apexcharts';
import { DatePicker, Space, Input, Select, AutoComplete, Cascader } from 'antd';
import Down from '../assets/icon/down.png';
import moment from 'moment';
import Calendar from '../assets/icon/Calendar.png';
export default function Index() {
  const history = useHistory();

  const { RangePicker } = DatePicker;

  const [optionsArea, setOptionsArea] = useState({
    colors: ['#4E79A7', '#5D00A4'],
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-19T00:00:00.000Z',
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  });
  const [seriesArea, setSeriesArea] = useState([
    {
      name: 'ยอดขาย',
      data: [267000, 560200, 280000, 510000, 820000, 109000, 100000],
    },
    {
      name: 'ยอดความเสียหาย',
      data: [500, 1002, 2500, 3200, 340000, 520, 410],
    },
  ]);

  const [options, setOptions] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['แพคเกจ', 'บริการ', 'สินค้า'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const [optionsPackage, setOptionsPackage] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['แพคเกจ A', 'แพคเกจ B', 'แพคเกจ C'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });
  const [optionsService, setOptionsService] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['บริการ A', 'บริการ B', 'บริการ C'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });
  const [optionsProduct, setOptionsProduct] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['สินค้า A', 'สินค้า B', 'สินค้า C'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([20, 20, 60]);
  const [seriesPackage, setSeriesPackage] = useState([20, 20, 60]);
  const [seriesService, setSeriesService] = useState([20, 20, 60]);
  const [seriesProduct, setSeriesProduct] = useState([20, 20, 60]);

  const [statepage, setStatepage] = useState('');
  const handleSelectPage = (e) => setStatepage(e);

  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  function onChange_year(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  function closePackage() {
    let path = `/`;
    history.push(path);
  }
  return (
    <>
      <NavbarTop />
      <Container fluid className="package-container Service Management bg-mrk">
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Branch_manage} />
                  <b>การจัดการสาขา &gt; ดู</b>
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
                  <img className="logo pr-2" src={Branch_manage} />
                  <b>การจัดการสาขา &gt; ดู</b>
                </h5>
              </div>
              <div className="modal-body">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabIconManagement />
                </Row>
                <Row className="set-row-chart p-0 mt-4 mb-4">
                  <div className="set-div-chart  ">
                    <Row>
                      <Col xs={12} lg={6} className="text-left">
                        <p className="sales-title">ยอดขายสาขาสวนดอก</p>
                      </Col>
                      <Col xs={12} lg={6} className="">
                        <Row>
                          <Col className="d-flex justify-content-end align-items-center">
                            <p className="annual-text">รายรับประจำปี</p>
                          </Col>
                          <Col className="">
                            <RangePicker
                              ranges={{
                                Today: [moment(), moment()],
                                'This Month': [
                                  moment().startOf('month'),
                                  moment().endOf('month'),
                                ],
                              }}
                              onChange={onChange}
                              suffixIcon={<img src={Calendar} />}
                              separator="-"
                              className="calendar-antd-dashboard"
                              style={{
                                borderRadius: '20px',
                                boxShadow: 'none ',
                                height: '50px',
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row className="">
                      <Col className="">
                        <center>
                          <ReactApexChart
                            options={optionsArea}
                            series={seriesArea}
                            type="area"
                            width="100%"
                          />
                        </center>
                      </Col>
                    </Row>
                  </div>
                </Row>
                <Row className="set-row-chart p-0 mt-4 ">
                  <div className="set-div-chart">
                    <Row>
                      <Col sm={6} lg={6} className="text-left">
                        <p className="sales-title">
                          เปรียบเทียบยอดขายแต่ละบริการ
                        </p>
                      </Col>
                      <Col sm={6} lg={6} className="">
                        <Row>
                          <Col></Col>
                          <Col>
                            <RangePicker
                              ranges={{
                                Today: [moment(), moment()],
                                'This Month': [
                                  moment().startOf('month'),
                                  moment().endOf('month'),
                                ],
                              }}
                              onChange={onChange}
                              suffixIcon={<img src={Calendar} />}
                              separator="-"
                              className="calendar-antd-dashboard"
                              style={{
                                borderRadius: '20px',
                                boxShadow: 'none ',
                                height: '50px',
                              }}
                            />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="">
                        <Row className="justify-content-center">
                          <Col lg={10}>
                            <center>
                              <Pie
                                options={options}
                                series={series}
                                type="pie"
                                width="60%"
                              />
                            </center>
                          </Col>
                          <Col className="d-flex align-items-center">
                            <div className="sum-all text-left">
                              <p className="sum-sales">
                                รวมยอดขาย 6,121,000 บาท
                              </p>
                              <p className="sum-sales">จำนวน 31 รายการ</p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </div>
                </Row>
                <Row className="set-row-chart p-0">
                  <Col xs={12} lg={4} className="mt-4 mb-4">
                    <div className="set-div-chart">
                      <Row>
                        <Col className="text-left ">
                          <p className="sales-title">เปรียบเทียบยอดขายแพคเกจ</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="">
                          <Row className="justify-content-center">
                            <Col lg={10}>
                              <center>
                                <Pie
                                  options={optionsPackage}
                                  series={seriesPackage}
                                  type="pie"
                                  width="90%"
                                />
                              </center>
                            </Col>
                            <Col className="d-flex align-items-center">
                              <div className="sum-all text-left">
                                <p className="sum-sales mt-3">
                                  รวมยอดขาย 6,121,000 บาท
                                </p>
                                <p className="sum-sales">จำนวน 220 รายการ</p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className="mt-4 mb-4">
                    <div className="set-div-chart">
                      <Row>
                        <Col className="text-left">
                          <p className="sales-title">เปรียบเทียบยอดใช้บริการ</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="">
                          <Row className="justify-content-center">
                            <Col lg={10}>
                              <center>
                                <Pie
                                  options={optionsService}
                                  series={seriesService}
                                  type="pie"
                                  width="90%"
                                />
                              </center>
                            </Col>
                            <Col className="d-flex align-items-center">
                              <div className="sum-all text-left">
                                <p className="sum-sales">
                                  รวมยอดขาย 6,121,000 บาท
                                </p>
                                <p className="sum-sales">จำนวน 480 รายการ</p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col xs={12} lg={4} className="mt-4 mb-4">
                    <div className="set-div-chart">
                      <Row>
                        <Col className="text-left">
                          <p className="sales-title">เปรียบเทียบยอดขายสินค้า</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="">
                          <Row className="justify-content-center">
                            <Col lg={10}>
                              <center>
                                <Pie
                                  options={optionsProduct}
                                  series={seriesProduct}
                                  type="pie"
                                  width="90%"
                                />
                              </center>
                            </Col>
                            <Col className="d-flex align-items-center">
                              <div className="sum-all text-left">
                                <p className="sum-sales">
                                  รวมยอดขาย 6,121,000 บาท
                                </p>
                                <p className="sum-sales">จำนวน 100 รายการ</p>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row className="set-row-chart">
                  <div className="set-div-chart">
                    <Col xs={12} className="p-0">
                      <Row className="align-items-center mb-3">
                        <Col className="text-left">
                          <p className="sales-title">นัดหมาย</p>
                        </Col>
                        <Col>
                          <Row>
                            <Col xs={0} lg={5}></Col>
                            <Col>
                              <DatePicker
                                onChange={onChange_year}
                                picker="year"
                                suffixIcon={<img src={Calendar} />}
                                style={{
                                  borderRadius: '20px',
                                  boxShadow: 'none ',
                                  height: '50px',
                                  width: '100%',
                                }}
                              />
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} className="p-0">
                      <Row>
                        <Col xs={6} md={3} className="mt-3 mb-3">
                          <div className="set-div">
                            <p className="text-size-appointment">ก่อนนัด</p>
                            <p className="text-size-appointment">2</p>
                          </div>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mb-3">
                          <div className="set-div">
                            <p className="text-size-appointment">มาวันนัด</p>
                            <p className="text-size-appointment">68</p>
                          </div>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mb-3">
                          <div className="set-div">
                            <p className="text-size-appointment">
                              มาหลังวันนัด
                            </p>
                            <p className="text-size-appointment">15</p>
                          </div>
                        </Col>
                        <Col xs={6} md={3} className="mt-3 mb-3">
                          <div className="set-div">
                            <p className="text-size-appointment">ยกเลิก</p>
                            <p className="text-size-appointment">15</p>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </div>
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
