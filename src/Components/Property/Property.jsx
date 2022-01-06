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
import { Link } from 'react-router-dom';
import Note from '../../assets/icon/note-car.png';
import View from '../../assets/icon/view-data.png';
import Select, { components } from 'react-select';

export default function Property() {
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
      <Row className="g-0 justify-content-center ">
        <Col className=" mt-3 " style={{ overflow: 'scroll', height: '500px' }}>
          <Table className="table table-responsive table-wash-part ">
            <thead>
              <tr className="t-header-package">
                <th>ชื่อทรัพย์สิน</th>
                <th>จำนวน</th>
                <th>สถานที่เก็บ</th>
                <th>บันทึกโดย</th>

                <th>วันที่อัพเดท</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="t-body-package ">
              <tr>
                <td>ทีวี</td>
                <td>2</td>
                <td>
                  สาขาสวนดอก (ชั้น2) <br />
                  สาขาสวนดอก (ห้องรับรอง)
                </td>
                <td>อวิกา ศรีโพธิ์ทอง</td>
                <td>11/04/2021 18:30</td>
                <td classname="set-button-table-management">
                  <Link to="/property/data-property">
                    <Button type="" className=" button-image m-2">
                      <img src={View} />
                    </Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="g-0 mt-3 mb-3">
        <Col lg={5} className=" set-page">
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <p style={{ margin: 0 }}>แสดง</p>
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
              <Pagination.Item active>{3}</Pagination.Item>

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
