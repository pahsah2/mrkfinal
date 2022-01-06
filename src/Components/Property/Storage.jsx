import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Pagination,
  Form,
  Table,
} from 'react-bootstrap';
import Note from '../../assets/icon/note-car.png';
import View from '../../assets/icon/iconfinder-eye-4341288_120560 2.png';
import Select, { components } from 'react-select';
import Write from '../../assets/icon/add-staff.png';
import Increase from '../../assets/icon/add-staff.png';

export default function Storage() {
  const [page, setPage] = useState([
    {
      value: 'ทั้งหมด',
      label: 'ทั้งหมด',
    },
    {
      value: '10',
      label: '10',
    },
    {
      value: '15',
      label: '15',
    },
  ]);
  return (
    <>
      <Row className="g-0 justify-content-center">
        <Row className="justify-content-end">
          <Col
            xs={12}
            sm={12}
            md={4}
            lg={3}
            xl={2}
            className="d-flex justify-content-end"
          >
            <Button type="button" className="button-increase">
              <img src={Increase} /> &nbsp; เพิ่มรายการ
            </Button>
          </Col>
        </Row>
        <Row
          className="g-0 m-0 mt-3"
          style={{ overflow: 'scroll', height: '500px' }}
        >
          <Col className="">
            <Table className="table table-responsive table-wash-part ">
              <thead>
                <tr className="t-header-package">
                  <th>วันที่ซื้อ</th>
                  <th>ซื้อจาก</th>
                  <th>ที่เก็บ</th>
                  <th>จำนวน</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="t-body-package ">
                <tr>
                  <td>11/04/2021 </td>
                  <td>เพาเวอร์บาย (สาขา ยูพีซีเชียงใหม่)</td>
                  <td>
                    สาขาสวนดอก (ชั้น2) <br />
                    สาขาสวนดอก (ห้องรับรอง)
                  </td>
                  <td>
                    1 <br /> 1
                  </td>
                  <td classname="">
                    <Button
                      type=""
                      className=" m-2  "
                      style={{ 'box-shadow': 'none' }}
                    >
                      <img src={Write} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Row>
      <Row className="g-0 mt-3 mb-3">
        <Col lg={5} className=" set-page">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <p style={{ margin: 0 }} className="set-text">
                แสดง
              </p>
            </Col>
            <Col lg={7}>
              <Select
                className="text-left select-style"
                aria-label="Default select example"
                placeholder=""
                options={page}
              />
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <p style={{ margin: 0 }}>รายการ</p>
            </Col>
          </Row>
        </Col>

        <Col className="d-flex justify-content-end set-paginate">
          <div className="box-paginate">
            <Pagination>
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>

              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item active>{4}</Pagination.Item>
              <Pagination.Item>{5}</Pagination.Item>
              <Pagination.Item>{6}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Next />
            </Pagination>
          </div>
        </Col>
      </Row>
    </>
  );
}
