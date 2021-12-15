import React, { useState } from 'react';
import {
  Button,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
} from 'reactstrap';
import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import Select from 'react-select';
import note_car from '../../assets/icon/note-car.png';
import add_menu from '../../assets/icon/add_menu.png';
export default function CustomerHistory() {
  const [page, setPage] = useState('');

  const handleSelectPage = (e) => setPage(e);
  return (
    <>
      <div className="customerhistory">
        <Table responsive className="custom-table-info text-nowrap">
          <thead className="thead-custom">
            <tr className="text-center">
              <th>เลขที่บิล</th>
              <th>วันรับบริการ</th>
              <th>รายการ</th>
              <th>สถานะ</th>
              <th>การชำระ</th>
            </tr>
          </thead>
          <tbody className="table-custom">
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
            <tr>
              <td>MRK0001</td>
              <td>06/05/2563</td>
              <td>ติดฟิล์มกระจก</td>
              <td>เสร็จสิ้น</td>
              <td>ชำระแล้ว</td>
            </tr>
          </tbody>
        </Table>
        <div className="set-paginate">
          <div className="box-select-table">
            <span className="box-select-text">แสดง</span>
            <div className="input-dropdown">
              <Form.Control
                type="text"
                placeholder=""
                value={page}
                onChange={(e) => setPage(e.target.value)}
                disabled
              ></Form.Control>
              <Col
                className="d-flex justify-content-end set-dropdown"
                style={{ padding: 0 }}
              >
                <Dropdown onSelect={handleSelectPage} className="dropdown">
                  <Dropdown.Toggle variant="secondary " id="dropdown-basic">
                    {/* {value} */}
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ backgroundColor: '#73a47' }}>
                    <Dropdown.Item eventKey="นาย">นาย</Dropdown.Item>
                    <Dropdown.Item eventKey="นาง">นาง</Dropdown.Item>
                    <Dropdown.Item eventKey="นางสาว">นางสาว</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </div>
            <span className="box-select-text">รายการ</span>
          </div>
          <div className="box-paginate">
            <Pagination aria-label="Page navigation example">
              <PaginationItem disabled>
                <PaginationLink first href="#" />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink next href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink last href="#" />
              </PaginationItem>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
}
