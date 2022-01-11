import React, { useState, useRef, useEffect } from 'react';
import { Label, Input, Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Dropdow,
  Pagination,
} from 'react-bootstrap';

import Select from 'react-select';
import note_car from '../../assets/icon/note-car.png';
import add_menu from '../../assets/icon/add_menu.png';
import View from '../../assets/icon/view-data.png';
export default function MemberPackage() {
  const [allSerach, setAllSerach] = useState('');

  const [statemodel, setStatemodel] = useState([{ value: '', label: '' }]);
  const [statebrand, setStatebrand] = useState([{ value: '', label: '' }]);
  const [licenseplate, setLicenseplate] = useState([{ value: '', label: '' }]);
  const [statepage, setStatepage] = useState([{ value: '', label: '' }]);

  const [stateplateSearch, setStateplateSearch] = useState({
    plateSearch: 'not plate',
  });

  useEffect(() => {}, []);

  function SetNumberPerPage(data) {
    setStatepage({ value: data.value, label: data.value });
  }
  function Setlicenseplate(data) {
    setLicenseplate({ value: data.value, label: data.value });
  }
  function SetBrand(data) {
    setStatebrand({ value: data.value, label: data.value });
  }
  function SetModel(data) {
    setStatemodel({ value: data.value, label: data.value });
  }
  const onClear = (data) => {
    setAllSerach('');
    // selectSegment.current.select.clearValue();
  };
  const search = () => {};

  const optionLicensePlate = [
    { value: 'แดง', label: 'แดง' },
    { value: 'ขาว', label: 'ขาว' },
    { value: 'ไม่มี', label: 'ไม่มี' },
  ];
  const optionBrand = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];
  const optionModel = [
    { value: '', label: '' },
    { value: '', label: '' },
    { value: '', label: '' },
  ];

  const optionPage = [
    { value: 'all', label: 'ทั้งหมด' },
    { value: '10', label: '10' },
    { value: '15', label: '15' },
  ];

  return (
    <>
      <div className="member-package">
        <br />

        <div className="align-items-center">
          <Row className="justify-content-start align-items-center mb-3 ">
            <Col xs={12} xl={2} className="set-padding-search mt-2 mb-2">
              <Form.Control
                id="_input_search"
                className="input"
                type="text"
                placeholder="ค้นหารหัสลูกค้า,ทะเบียนรถ,เบอร์โทรศัพท์"
                value={allSerach}
                onChange={(e) => setAllSerach(e.target.value)}
              ></Form.Control>
            </Col>

            <Col xs={12} xl={2} className="mt-2 mb-2 text-left">
              <Label className="search-label d-block d-lg-none">ยี่ห้อรถ</Label>
              <Select
                options={optionBrand}
                placeholder="ยี่ห้อรถ"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetBrand(data)}
                className="select-list"
              />
            </Col>
            <Col xs={12} xl={2} className="mt-2 mb-2 text-left">
              <Label className="search-label d-block d-lg-none">รุ่นรถ</Label>
              <Select
                options={optionModel}
                placeholder="รุ่นรถ"
                isClearable={false}
                isSearchable={false}
                onChange={(data) => SetModel(data)}
                className="select-list"
              />
            </Col>

            <Col xs={12} xl={2} className="mt-2 mb-2">
              <Button
                className="button"
                style={{ padding: 0, margin: 0 }}
                onClick={() => search()}
              >
                ค้นหา <img src="icon/magnifying_glass_4-1 2.png" alt="" />
              </Button>
            </Col>
            <Col xs={12} xl={2} className="mt-2 mb-2">
              <Button className="button">
                <img src={add_menu} alt="" /> &nbsp; เพิ่มรายการ
              </Button>
            </Col>
          </Row>
        </div>

        <Row>
          <Col className="" style={{ Overflow: 'scroll', height: '440px' }}>
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
                    <Button type="" className="button-image">
                      <img src={View} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="g-0 mt-3 mb-3">
          <Col lg={4} className=" set-page">
            <Row>
              <Col className="d-flex justify-content-center align-items-center">
                <p style={{ margin: 0 }}>แสดง</p>
              </Col>
              <Col lg={7}>
                <Select
                  className="text-left select-style"
                  aria-label="Default select example"
                  defaultValue={optionPage[0]}
                  options={optionPage}
                  onChange={(data) => SetNumberPerPage(data)}
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
      </div>
    </>
  );
}
