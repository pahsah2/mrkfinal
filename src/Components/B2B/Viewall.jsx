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

export default function Viewall() {
  const { RangePicker } = DatePicker;
  const [optionsLine, setOptionsLine] = useState({
    colors: ['#4E79A7', '#5D00A4'],

    chart: {
      height: 350,
      type: 'line',
      stacked: false,
    },
    stroke: {
      width: [20, 5],
      curve: 'smooth',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
      },
    },

    fill: {
      opacity: [0.85, 1],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: 'vertical',
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100],
      },
    },
    labels: [
      'มกราคม',
      'กุมภาพันธ์',
      'มีนาคม',
      'เมษายน',
      'พฤษภาคม',
      'มิถุนายน',
      'กรกฎาคม',
      'สิงหาคม',
      'กันยายน',
      'ตุลาคม',
      'พฤศจิกายน',
      'ธันวาคม',
    ],
    markers: {
      size: 0,
    },
    xaxis: {
      type: 'month',
    },
    yaxis: {
      title: {
        text: 'Points',
      },
      min: 0,
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
  });
  const [seriesLine, setSeriesLine] = useState([
    {
      name: 'ยอดขายรายเดือน',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 30],
    },
    {
      name: 'ยอดขายสะสม',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 45],
    },
  ]);

  const [options, setOptions] = useState({
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['ฟิล์มกรองแสง', 'ฟิล์มกันรอย', 'บริการเคลือบเหมา'],
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
    colors: ['#4E79A7', '#F28E2B', '#E15759'],
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
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 0,
      },
    },
    xaxis: {
      type: 'user',
      categories: [
        'นายวันดี มีชัย',
        'นายขยัน อดทน',
        'นายแดง วันดี',
        'นางสาวมะลิ พาพี',
      ],
    },
    legend: {
      position: 'right',
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });
  const [seriesColum, setSeriesColum] = useState([
    {
      name: 'ฟิล์มกรองแสง',
      data: [17000, 12000, 41, 67],
    },
    {
      name: 'ฟิล์มกันรอย',
      data: [6003, 4003, 20, 8],
    },
    {
      name: 'บริการเคลือบเหมา',
      data: [11, 17, 15, 15],
    },
  ]);

  const [optionsLine2, setOptionsLine2] = useState({
    colors: ['#FF0000'],
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
      curve: 'straight',
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
      categories: [
        'มกราคม',
        'กุมภาพันธ์',
        'มีนาคม',
        'เมษายน',
        'พฤษภาคม',
        'มิถุนายน',
        'กรกฎาคม',
        'สิงหาคม',
        'กันยายน',
        'ตุลาคม',
        'พฤศจิกายน',
        'ธันวาคม',
      ],
    },
  });
  const [seriesLine2, setSeriesLine2] = useState([
    {
      name: '',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 150, 160, 12000],
    },
  ]);

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
        <Row className="set-row-b2b">
          <Col lg={6} className="set-col-b2b title-view-all mt-3 mb-3">
            <div className="set-div div-name">
              <p>ภาพรวม</p>
              <p>บริษัท เจริญมอเตอร์เบนซ์ จำกัด</p>
            </div>
          </Col>
          <Col xs={6} lg={3} className="set-col-b2b income mt-3 mb-3">
            <div className="set-div">
              <p>รายรับ</p>
              <p>5,300,000 บาท</p>
            </div>
          </Col>
          <Col xs={6} lg={3} className="set-col-b2b number-car mt-3 mb-3">
            <div className="set-div">
              <p>จำนวนรถ</p>
              <p>150 คัน</p>
            </div>
          </Col>
        </Row>
        <Row className="set-row-chart">
          <div className="set-div-chart  ">
            <Row>
              <Col xs={12} lg={6} className="text-left">
                <p className="sales-title">
                  ยอดขาย บริษัท เจริญมอเตอร์เบนซ์ จำกัด
                </p>
              </Col>
              <Col xs={12} lg={6} className="">
                <Row>
                  <Col className="d-flex justify-content-end align-items-center">
                    <p className="annual-text">รายรับประจำปี</p>
                  </Col>
                  <Col>
                    <DatePicker
                      onChange={onChange_year}
                      picker="year"
                      suffixIcon={<img src={Down} />}
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
                    options={optionsLine}
                    series={seriesLine}
                    type="line"
                    width="60%"
                  />
                </center>
              </Col>
            </Row>
          </div>
        </Row>
        <Row className="set-row-chart">
          <div className="set-div-chart">
            <Row>
              <Col sm={6} lg={6} className="text-left">
                <p className="sales-title">เปรียบเทียบยอดขายแต่ละบริการ</p>
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
                      <p className="sum-sales">รวมยอดขาย 6,121,000 บาท</p>
                      <p className="sum-sales">จำนวน 310 คัน</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Row>
        <Row className="set-row-chart ">
          <div className="set-div-chart bar-chart">
            <Row>
              <Col sm={6} lg={6} className="d-flex justify-content-start">
                <p className="sales-title">ภาพรวมยอดขายพนักงาน</p>
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
        <Row className="set-row-chart ">
          <div className="set-div-chart ">
            <Row>
              <Col lg={3} className="d-flex justify-content-start">
                <p className="sales-title">ยอดขายพนักงาน</p>
              </Col>
              <Col lg={9} className="d-flex justify-content-end mt-5">
                <Row>
                  <Col
                    lg={6}
                    className="d-flex justify-content-end set-text-chart-line mt-3 mb-3"
                  >
                    <Col lg={5}>
                      <p className="text-chart-line">พนักงานขาย</p>
                    </Col>
                    <Input.Group compact>
                      <Select
                        defaultValue="นายวันดี มีชัย"
                        className="input-user"
                      >
                        <Option value="นาย อ">นาย อ</Option>
                        <Option value="นาย ก">นาย ก</Option>
                      </Select>
                    </Input.Group>
                  </Col>
                  <Col
                    lg={6}
                    className="d-flex justify-content-end set-text-chart-line mt-3 mb-3"
                  >
                    <Col lg={5}>
                      <p className="text-chart-line">รายรับประจำปี</p>
                    </Col>
                    <Input.Group compact>
                      <Select defaultValue="2564" className="input-year">
                        <Option value="2563">2563</Option>
                        <Option value="2562">2562</Option>
                      </Select>
                    </Input.Group>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <ReactApexChart
                  options={optionsLine2}
                  series={seriesLine2}
                  type="line"
                  height="80%"
                />
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}
