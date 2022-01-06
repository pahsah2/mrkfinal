import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import Delete from '../../../assets/icon/delete.png';
export default function Product() {
  const [isDisabled, setDisabled] = useState(false);
  const [isClearable, setClearable] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [isRtl, setRtl] = useState(false);
  const [isSearchable, setSearchable] = useState(true);

  const [product, setProduct] = useState([{ value: '', label: '' }]);

  const optionProduct = [
    { value: 'ฟ', label: 'ฟ' },
    { value: 'ฟฟ', label: 'ฟ' },
    { value: 'ฟ', label: 'ฟ' },
  ];
  function SetProduct(data) {
    setProduct({ value: data.value, label: data.value });
  }
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Select
              className="basic-single"
              classNamePrefix="select"
              placeholder="ค้นหาสินค้าด้วยรหัสสินค้า, ชื่อสินค้า"
              isDisabled={isDisabled}
              isLoading={isLoading}
              isRtl={isRtl}
              isSearchable={isSearchable}
              
              options={optionProduct}
              onChange={(data) => SetProduct(data)}
            />
          </Col>
        </Row>
        <Row className="mt-3 mb-3 m-0">
          <Col className="set-table-inside p-0">
            <table className="table table-responsive table-wash-part ">
              <thead>
                <tr className="t-header-package">
                  <th>ลำดับ</th>
                  <th>รหัสรายการ</th>
                  <th>ชื่อรายการ</th>
                  <th>จำนวน</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="t-body-package ">
                <tr>
                  <td>1</td>
                  <td>0406010300002</td>
                  <td>น้ำยาเคลือบรถ</td>
                  <td>
                    <Form.Control className="input-table"></Form.Control>
                  </td>
                  <td>
                    <Button type="" className="button-package">
                      <img src={Delete} />
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>0406010300002</td>
                  <td>น้ำยาเคลือบรถ (ชนิดพิเศษ)</td>
                  <td>
                    <Form.Control className="input-table"></Form.Control>
                  </td>
                  <td>
                    <Button type="" className="button-package">
                      <img src={Delete} />
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
