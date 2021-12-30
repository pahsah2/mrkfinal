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

export default function Dashboard() {
  const { RangePicker } = DatePicker;
  const [optionsArea, setOptionsArea] = useState({
    colors: ['#4E79A7', '#5D00A4', 'rgba(254, 137, 0, 0.5)'],
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
      name: 'ยอดขายสะสม',
      data: [267000, 560200, 280000, 510000, 820000, 109000, 100000],
    },
    {
      name: 'ยอดขายรายวัน',
      data: [17000, 32000, 45000, 32000, 34000, 5200, 4100000],
    },
    {
      name: 'ยอดความเสียหาย',
      data: [500, 1002, 2500, 3200, 340000, 520, 410],
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
        <Col xs={12} className="p-0">
          <Row className="set-row-b2b">
            <Col lg={6} className="set-col-b2b title-view-all mt-3 mb-3">
              <div className="set-div div-name text-left">
                <p>ยอดขาย</p>
                <p>อวิกา ศรีโพธิ์ทอง</p>
                <h3>
                  <b>แผนก Sale</b>
                </h3>
              </div>
            </Col>
            <Col md={6} lg={3} className="set-col-b2b income mt-3 mb-3">
              <div className="set-div">
                <p>ยอดขาย</p>
                <p>5,300,000 บาท</p>
              </div>
            </Col>
            <Col md={6} lg={3} className="set-col-b2b number-car mt-3 mb-3">
              <div className="set-div">
                <p>JOB</p>
                <p>150 คัน</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} className="set-height-profile-dashboard ">
          <Row className="set-row-chart">
            <div className="set-div-chart  ">
              <Row>
                <Col xs={12} lg={6} className="text-left">
                  <p className="sales-title"></p>
                </Col>
                <Col xs={12} lg={6} className="">
                  <Row>
                    <Col className="d-flex justify-content-end align-items-center">
                      <p className="annual-text">รายรับประจำปี</p>
                    </Col>
                    <Col className="">
                      <DatePicker
                        onChange={onChange_year}
                        picker="year"
                        suffixIcon={<img src={Down} />}
                        placeholder=""
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
        </Col>
      </Container>
    </>
  );
}
