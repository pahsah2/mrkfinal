import React, { useState, useRef, useEffect } from 'react';
import { Label, Input, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import { Container, Row, Col, Button, Form, Dropdown } from 'react-bootstrap';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

import Select from 'react-select';
import note_car from '../../assets/icon/note-car.png';
import add_menu from '../../assets/icon/add_menu.png';
export default function MemberPackage() {
  const [allSerach, setAllSerach] = useState('');

  const [statemodel, setStatemodel] = useState('');
  const [statebrand, setStatebrand] = useState('');
  const [statepage, setStatepage] = useState();

  const handleSelectBrand = (e) => setStatebrand(e);
  const handleSelectModel = (e) => setStatemodel(e);
  const handleSelectPage = (e) => setStatepage(e);
  const onClear = (e) => {
    setAllSerach('');
    // selectSegment.current.select.clearValue();
  };
  const search = () => {};

  return (
    <>
      <div className="member-package">
        <br />

        <div className="align-items-center">
          <Row>
            <Col lg={12} className="set-col-car-package">
              <Col className="set-padding-search">
                <Form.Control
                  id="_input_search"
                  className="search-btn-top"
                  type="text"
                  placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                  value={allSerach}
                  onChange={(e) => setAllSerach(e.target.value)}
                ></Form.Control>
              </Col>

              <Col>
                <Label className="search-label d-block d-lg-none">
                  ยี่ห้อรถ
                </Label>

                
              </Col>
              <Col>
                <Label className="search-label d-block d-lg-none">รุ่นรถ</Label>

                
              </Col>

              <Col style={{ padding: 0 }}>
                <Button
                  className="button-search "
                  style={{ padding: 0, margin: 0 }}
                  onClick={() => search()}
                >
                  ค้นหา <img src="icon/magnifying_glass_4-1 2.png" alt="" />
                </Button>
              </Col>
              <Col style={{ padding: 0 }}>
                <Button
                  className="button-search "
                  style={{ padding: 0, margin: 0 }}
                  onClick={onClear}
                >
                  คืนค่า
                </Button>
              </Col>
            </Col>
          </Row>
        </div>

        <Table responsive className="custom-table-pacekage text-nowrap ">
          <thead>
            <tr>
              <th>ยี่ห้อ</th>
              <th>รุ่น</th>
              <th>ทะเบียน</th>
              <th>สี</th>
              <th>แพคเก็จ</th>
              <th>รับประกัน</th>
              <th>สถานะ</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Honda</td>
              <td>Civic</td>
              <td>กด-252 เชียงใหม่</td>
              <td>ขาว</td>
              <td>ล้างรถ 1 ปี</td>
              <td>-</td>
              <td>อยู่ในบริการ</td>
              {/* <td>
                <Button style={addJobStyle}>
                  <img src="icon/add_icon.png" /> เพิ่มลง JOB
                </Button>
              </td> */}
              <td>
                <Button type="" className="button-view">
                  <img src="icon/iconfinder-eye-4341288_120560 2.png" />
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="set-paginate">
          <div className="box-select-table">
            <span className="box-select-text">แสดง</span>
            <div className="input-dropdown">
              <Form.Control
                type="text"
                placeholder="ทั้งหมด"
                // defaultValue={statepage[0]}
                value={statepage}
                onChange={(e) => setStatepage(e.target.value)}
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
                    <Dropdown.Item eventKey="ทั้งหมด">ทั้งหมด</Dropdown.Item>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="15">15</Dropdown.Item>
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
