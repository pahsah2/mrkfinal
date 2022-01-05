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
import DRefresh from '../assets/icon/d-refresh.png';
import DSearch from '../assets/icon/d-search.png';
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
export default function Dashboard() {
  const history = useHistory();

  const { RangePicker } = DatePicker;

  const [optionsArea, setOptionsArea] = useState({
    colors: ['#422F8A', '#b4a7d6'],
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
        '2018-09-01T',
        '2018-09-02T',
        '2018-09-03T',
        '2018-09-04T',
        '2018-09-05T',
        '2018-09-06T',
        '2018-09-07T',
        '2018-09-08T',
        '2018-09-09T',
        '2018-09-10T',
        '2018-09-11T',
        '2018-09-12T',
        '2018-09-13T',
        '2018-09-14T',
        '2018-09-15T',
        '2018-09-16T',
        '2018-09-17T',
        '2018-09-18T',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
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

  const [seriesBranch, setSeriesBranch] = useState([
    {
      name: 'สาขาสวนดอก',
      data: [267000, 560200, 280000, 510000, 820000, 109000],
    },
    {
      name: 'สาขาอาเขต',
      data: [500, 1002, 2500, 3200, 340000, 520],
    },
    {
      name: 'สาขาสันทราย',
      data: [1500, 20002, 41500, 6200, 34000, 5200],
    },
  ]);
  const [options, setOptions] = useState({
    colors: ['#ABA2D2', '#5943BA', '#422F8A'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['แพคเกจ', 'สินค้า', 'บริการ'],
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
  const [optionsBranch, setOptionsBranch] = useState({
    colors: ['#422F8A', '#ABA2D2', '#5943BA'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [
      'แพคเกจ A',
      'แพคเกจ B',
      'แพคเกจ C',
      'แพคเกจ D',
      'แพคเกจ E',
      'แพคเกจ F',
    ],
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
  const [optionsTotalBranch, setOptionsTotalBranch] = useState({
    colors: ['#422F8A', '#ABA2D2', '#5943BA'],
    chart: {
      height: 350,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: '',
      align: 'left',
    },
    grid: {
      row: {
        colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2018-09-01T',
        '2018-09-02T',
        '2018-09-03T',
        '2018-09-04T',
        '2018-09-05T',
        '2018-09-06T',
        '2018-09-07T',
        '2018-09-08T',
        '2018-09-09T',
        '2018-09-10T',
        '2018-09-11T',
        '2018-09-12T',
        '2018-09-13T',
        '2018-09-14T',
        '2018-09-15T',
        '2018-09-16T',
        '2018-09-17T',
        '2018-09-18T',
      ],
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy',
      },
    },
  });
  const [optionsProductBranch, setOptionsProductBranch] = useState({
    colors: ['#422F8A', '#ABA2D2', '#5943BA'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [
      'สินค้า A',
      'สินค้า B',
      'สินค้า C',
      'สินค้า D',
      'สินค้า E',
      'สินค้า F',
    ],
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
  const [optionsServiceBranch, setOptionsServiceBranch] = useState({
    colors: ['#422F8A', '#ABA2D2', '#5943BA'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: [
      'บริการ A',
      'บริการ B',
      'บริการ C',
      'บริการ D',
      'บริการ E',
      'บริการ F',
    ],
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
    colors: ['#ABA2D2', '#5943BA', '#422F8A'],
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
    colors: ['#ABA2D2', '#5943BA', '#422F8A'],
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
    colors: ['#ABA2D2', '#5943BA', '#422F8A'],
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
  const [seriesBar, setSeriesBar] = useState([
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100],
    },
  ]);
  const [optionsBar, setOptionsBar] = useState({
    colors: ['#5D00A4'],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'HONDA',
        'BENZ',
        'TOYOTA',
        'BMW ',
        'MAZDA',
        'PORSCHE ',
        'ISUZU',
        'OTHER',
      ],
    },
  });
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
      <Container
        fluid
        className="package-container Service Management Dashboard"
      >
        <div className="package">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Branch_manage} />
                  การจัดการสาขา &gt; ดู
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
                  การจัดการสาขา &gt; ดู
                </h5>
              </div>
              <div className="modal-body ">
                <Row className="g-0 tabsicon justify-content-center ">
                  <TabIconManagement />
                </Row>
                <div className="bg-dashboard ">
                  <Row className="justify-content-end ">
                    <Col className="mt-4 mb-3 d-flex justify-content-end">
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
                    <Col lg={2} xl={2} className="mt-4 mb-3 ">
                      <Row>
                        <Col>
                          <Button
                            className="button-image"
                            style={{ boxshadown: 'none' }}
                          >
                            <img src={DRefresh} />
                          </Button>
                        </Col>

                        <Col>
                          <Button className="button-image">
                            <img src={DSearch} />
                          </Button>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="set-row-chart p-0">
                    <div className="set-div-chart">
                      <Col xs={12} className="p-0">
                        <Row>
                          <Col xs={12} md={6} xl={3} className="mt-3 mb-3">
                            <div className="set-div set-revenue">
                              <h3 className="text-size-appointment">รายรับ</h3>
                              <p className="text-size-appointment">
                                189,256 บาท
                              </p>
                            </div>
                          </Col>
                          <Col xs={12} md={6} xl={3} className="mt-3 mb-3">
                            <div className="set-div set-revenue-component">
                              <Col>
                                <p className="title">ระหว่างดำเนินการ</p>
                              </Col>
                              <Col className="body">
                                <Row>
                                  <Col xs={12}>
                                    <p className="number">89</p>
                                  </Col>
                                  <Col xs={12}>
                                    <p>รายการ</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col>
                                <p className="bottom">มูลค่างาน 45,564 บาท</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={6} xl={3} className="mt-3 mb-3">
                            <div className="set-div set-revenue-component">
                              <Col>
                                <p className="title">รอชำระ</p>
                              </Col>
                              <Col className="body">
                                <Row>
                                  <Col xs={12}>
                                    <p className="number">13</p>
                                  </Col>
                                  <Col xs={12}>
                                    <p>รายการ</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col>
                                <p className="bottom">มูลค่างาน 35,564 บาท</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={6} xl={3} className="mt-3 mb-3">
                            <div className="set-div set-revenue-component">
                              <Col>
                                <p className="title">ชำระแล้ว</p>
                              </Col>
                              <Col className="body">
                                <Row>
                                  <Col xs={12}>
                                    <p className="number">120</p>
                                  </Col>
                                  <Col xs={12}>
                                    <p>รายการ</p>
                                  </Col>
                                </Row>
                              </Col>
                              <Col>
                                <p className="bottom">มูลค่างาน 95,564 บาท</p>
                              </Col>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Row>
                  <Row className="set-row-chart p-0 mt-5">
                    <div className="set-div-chart">
                      <Col xs={12} className="p-0">
                        <Row>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ลูกค้า</p>
                              </Col>
                              <Col>
                                <p className="number">15,889</p>
                              </Col>
                              <Col>
                                <p>ราย</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ลูกค้าใหม่</p>
                              </Col>
                              <Col>
                                <p className="number">158</p>
                              </Col>
                              <Col>
                                <p>ราย</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ลูกค้าเก่า</p>
                              </Col>
                              <Col>
                                <p className="number">320</p>
                              </Col>
                              <Col>
                                <p>ราย</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ไม่มีความเคลื่อนไหว </p>
                              </Col>
                              <Col>
                                <p className="number">120</p>
                              </Col>
                              <Col>
                                <p>ราย</p>
                              </Col>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12} className="p-0">
                        <Row>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>จำนวนรถ</p>
                              </Col>
                              <Col>
                                <p className="number">15,889</p>
                              </Col>
                              <Col>
                                <p>คัน</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>รถใหม่</p>
                              </Col>
                              <Col>
                                <p className="number">158</p>
                              </Col>
                              <Col>
                                <p>คัน</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ใช้บริการ</p>
                              </Col>
                              <Col>
                                <p className="number">320</p>
                              </Col>
                              <Col>
                                <p>คัน</p>
                              </Col>
                            </div>
                          </Col>
                          <Col xs={12} md={4} xl={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <Col>
                                <p>ไม่มีความเคลื่อนไหว </p>
                              </Col>
                              <Col>
                                <p className="number">120</p>
                              </Col>
                              <Col>
                                <p>ราย</p>
                              </Col>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                      <Col xs={12}>
                        <ReactApexChart
                          options={optionsBar}
                          series={seriesBar}
                          type="bar"
                          height={500}
                        />
                      </Col>
                    </div>
                  </Row>
                  <Row className="set-row-chart p-0 mt-5 mb-5">
                    <div className="set-div-chart  ">
                      <Row>
                        <Col xs={12} lg={6} className="text-left">
                          <p className="sales-title">ยอดขาย</p>
                        </Col>
                        <Col xs={12} lg={6} className=""></Col>
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
                  <Row className="set-row-chart p-0 mt-5 ">
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
                              {/* <RangePicker
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
                              /> */}
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
                    <Col xs={12} lg={4} className="mt-5 mb-5">
                      <div className="set-div-chart">
                        <Row>
                          <Col className="text-left ">
                            <p className="sales-title">
                              เปรียบเทียบยอดขายแพคเกจ
                            </p>
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
                    <Col xs={12} lg={4} className="mt-5 mb-5">
                      <div className="set-div-chart">
                        <Row>
                          <Col className="text-left">
                            <p className="sales-title">
                              เปรียบเทียบยอดใช้บริการ
                            </p>
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
                    <Col xs={12} lg={4} className="mt-5 mb-5">
                      <div className="set-div-chart">
                        <Row>
                          <Col className="text-left">
                            <p className="sales-title">
                              เปรียบเทียบยอดขายสินค้า
                            </p>
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
                              <p className="text-size-appointment  text-size-dashboard">
                                2
                              </p>
                            </div>
                          </Col>
                          <Col xs={6} md={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <p className="text-size-appointment">มาวันนัด</p>
                              <p className="text-size-appointment text-size-dashboard">
                                68
                              </p>
                            </div>
                          </Col>
                          <Col xs={6} md={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <p className="text-size-appointment">
                                มาหลังวันนัด
                              </p>
                              <p className="text-size-appointment text-size-dashboard">
                                15
                              </p>
                            </div>
                          </Col>
                          <Col xs={6} md={3} className="mt-3 mb-3">
                            <div className="set-div">
                              <p className="text-size-appointment">ยกเลิก</p>
                              <p className="text-size-appointment text-size-dashboard">
                                15
                              </p>
                            </div>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                  </Row>
                  <Row className="set-row-chart">
                    <div className="set-div-chart">
                      <Row>
                        <Col xs={12} md={6}>
                          <Row>
                            <Col xs={12}>
                              <p className="product-title">สินค้าที่ใกล้หมด</p>
                            </Col>
                            <Col xs={12} className="product-line "></Col>
                            <Col xs={12}>
                              <Row>
                                <Col cols="auto">
                                  <div className="bg-product">
                                    <p>น้ำยาล้างรถ</p>
                                  </div>
                                </Col>
                                <Col cols="auto">
                                  <div className="bg-product">
                                    <p>น้ำยาเช็ดกระจก</p>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="bg-product">
                                    <p>น้ำยาเช็ดคราบ</p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12} md={6}>
                          <Row>
                            <Col xs={12}>
                              <p className="product-title">สินค้าหมด</p>
                            </Col>
                            <Col xs={12} className="product-line "></Col>
                            <Col xs={12}>
                              <Row>
                                <Col>
                                  <div className="bg-product">
                                    <p>น้ำยาเคลือบเงา</p>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="bg-product">
                                    <p>ฟองน้ำเช็ดรถ</p>
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Row>
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
