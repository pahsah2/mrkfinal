import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Pie from 'react-apexcharts';
import 'antd/dist/antd.css';
import ReactApexChart from 'react-apexcharts';
import { DatePicker, Space, Input, Select, AutoComplete, Cascader } from 'antd';
import moment from 'moment';
import Calendar from '../../assets/icon/Calendar.png';
import Down from '../../assets/icon/down.png';
const { RangePicker } = DatePicker;

export default function MemberOverall() {
  const { RangePicker } = DatePicker;

  const [options, setOptions] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
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
  const [series, setSeries] = useState([44, 55, 50]);

  const [optionsColum, setOptionsColum] = useState({
    colors: ['#422F8A', '#ABA2D2', '#5943BA', '#FF7A33'],
    chart: {
      type: 'bar',
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [1, 1, 1, 4],
    },
    title: {
      text: 'ยอดใช้บริการ คุณ นภาวรรณ ยั่งยืน   ',
      align: 'left',
      offsetX: 110,
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        ' April',
        ' May',
        'June',
        'July',
        'August ',
        ' September ',
        'October ',
        'November ',
        'December',
      ],
    },
    yaxis: [
      {
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#008FFB',
        },
        labels: {
          style: {
            colors: '#008FFB',
          },
        },
        title: {
          text: '',
          style: {
            color: '#008FFB',
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      {
        seriesName: 'Income',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#00E396',
        },
        labels: {
          style: {
            colors: '#00E396',
          },
        },
        title: {
          text: '',
          style: {
            color: '#00E396',
          },
        },
      },
      {
        seriesName: 'Revenue',
        opposite: true,
        axisTicks: {
          show: true,
        },
        axisBorder: {
          show: true,
          color: '#FEB019',
        },
        labels: {
          style: {
            colors: '#FEB019',
          },
        },
        title: {
          text: '',
          style: {
            color: '#FEB019',
          },
        },
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60,
      },
    },
    legend: {
      horizontalAlign: 'left',
      offsetX: 40,
    },
  });
  const [seriesColum, setSeriesColum] = useState([
    {
      name: 'แพคเกจ',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: 'สินค้า',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: 'บริการ',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5],
    },
    {
      name: 'ยอดสะสม',
      type: 'line',
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ]);

  const [seriesBranch, setSeriesBranch] = useState([
    {
      data: [10, 8, 2],
    },
  ]);
  const [optionsBranch, setOptionsBranch] = useState({
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
      categories: ['สาขาสวนดอก', 'สาขาสันทราย', 'สาขาอาเขต'],
    },
  });
  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  function onChange_year(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  const { Option } = Select;

  return (
    <>
      <Container fluid className="view-all-b2b">
        <Row className="mr-4 ml-4 mt-3 mb-3 justify-content-between">
          <Col xs={6} lg={4} xl={3} className="set-col-b2b income mt-3 mb-3">
            <div className="set-div">
              <p className="" style={{ fontSize: '26px' }}>
                <b>คุณ นภาวรรณ ยั่งยืน</b>
              </p>
              <p>
                <b>ถูกแนะนำโดย</b> คุณวันดี มีชัย
              </p>
            </div>
          </Col>
          <Col xs={6} lg={4} xl={2} className="set-col-b2b income mt-3 mb-3">
            <div className="set-div">
              <p>อายุสมาชิก</p>
              <p>2 ปี</p>
            </div>
          </Col>
          <Col xs={6} lg={4} xl={2} className="set-col-b2b income mt-3 mb-3">
            <div className="set-div">
              <p>จำนวนรถ</p>
              <p>2 คัน</p>
            </div>
          </Col>
          <Col
            xs={6}
            lg={4}
            xl={2}
            className="set-col-b2b number-car mt-3 mb-3"
          >
            <div className="set-div">
              <p>แนะนำผู้ใช้</p>
              <p>2 ราย</p>
            </div>
          </Col>
          <Col
            xs={6}
            lg={4}
            xl={2}
            className="set-col-b2b number-car mt-3 mb-3"
          >
            <div className="set-div">
              <p>มูลค่าแนะนำ</p>
              <p>300,000 บาท</p>
            </div>
          </Col>
        </Row>
        <Row className="set-row-chart ">
          <div className="set-div-chart bar-chart">
            <Row>
              <Col sm={6} lg={6} className="d-flex justify-content-start">
                <p className="sales-title">ยอดใช้บริการ คุณ นภาวรรณ ยั่งยืน </p>
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
                    options={optionsColum}
                    series={seriesColum}
                    type="bar"
                    width="80%"
                  />
                </center>
              </Col>
            </Row>
          </div>
        </Row>
        <Row className="">
          <Col>
            <Row className="set-row-chart">
              <div className="set-div-chart">
                <Row>
                  <Col className="text-left">
                    <p className="sales-title">เปรียบเทียบยอดขายแต่ละบริการ</p>
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
                            width="100%"
                          />
                        </center>
                      </Col>
                      <Col xs={12} className="d-flex align-items-center">
                        <div className="sum-all text-left">
                          <p className="sum-sales">รวมยอดขาย 6,121,000 บาท</p>
                          <p className="sum-sales">จำนวน 310 คัน</p>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
          <Col className="set-branch-member">
            <Row className="set-row-chart">
              <div className="set-div-chart">
                <Row>
                  <Col className="text-left">
                    <p className="sales-title">สาขาที่ใช้บริการ</p>
                  </Col>
                </Row>
                <Row>
                  <Col className="">
                    <Row className="justify-content-center">
                      <Col lg={10}>
                        <center>
                          <ReactApexChart
                            options={optionsBranch}
                            series={seriesBranch}
                            type="bar"
                            width="100%"
                          />
                        </center>
                      </Col>
                      <Col xs={12} className="d-flex align-items-center"></Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
