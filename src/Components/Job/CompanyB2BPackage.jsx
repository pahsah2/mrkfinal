import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Select, { components } from 'react-select';

import Delete from '../../assets/icon/flat-style-circle-delete.png';
import MainComponent from './CompanyB2BPackage/Index';
import WashPart from './CompanyB2BPackage/WashPart';
import Lightfilter from './CompanyB2BPackage/Lightfilter';
import CoatingService from './CompanyB2BPackage/CoatingService';
import Protective from './CompanyB2BPackage/Protective';
import ServiceFilter from './CompanyB2BPackage/ServiceFilter';
import SpecialPackage from './CompanyB2BPackage/SpecialPackage';

export default function CompanyB2BPackage() {
  const [typepackage, setTypePackage] = useState([{ value: '', label: '' }]);
  const [serviceMore, setServiceMore] = useState(false);

  const optionPackage = [
    { value: 'บริการล้างและเคลือบแว๊กซ์', label: 'บริการล้างและเคลือบแว๊กซ์' },
    { value: 'บริการฟิล์มกรองแสง', label: 'บริการฟิล์มกรองแสง' },
    { value: 'บริการเคลือบเหมา', label: 'บริการเคลือบเหมา' },
    { value: 'บริการเคลือบเฉพาะจุด', label: 'บริการเคลือบเฉพาะจุด' },
    { value: 'บริการฟิล์มกันรอย', label: 'บริการฟิล์มกันรอย' },
    { value: 'แพ็คเกจพิเศษ', label: 'แพ็คเกจพิเศษ' },
  ];

  function SetPackage(data) {
    setTypePackage({ value: data.value, label: data.value });
  }

  const handleServiceMore = () => {
    setServiceMore(!serviceMore);
  };

  return (
    <>
      <Container fluid className="set-height-package">
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={10}>
                <Select
                  options={optionPackage}
                  placeholder="ค้นหาสินค้าด้วยรหัสสินค้า, ชื่อสินค้า"
                  isClearable={false}
                  isSearchable={false}
                  onChange={(data) => SetPackage(data)}
                  className="select-list"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}></Col>
        </Row>

        <Row className="mt-3 mb-3 g-0 justify-content-center">
          {typepackage.value === 'บริการล้างและเคลือบแว๊กซ์' ? (
            <WashPart />
          ) : typepackage.value === 'บริการฟิล์มกรองแสง' ? (
            <Lightfilter />
          ) : typepackage.value === 'บริการเคลือบเหมา' ? (
            <CoatingService />
          ) : typepackage.value === 'บริการเคลือบเฉพาะจุด' ? (
            <Protective />
          ) : typepackage.value === 'บริการฟิล์มกันรอย' ? (
            <ServiceFilter />
          ) : typepackage.value === 'แพ็คเกจพิเศษ' ? (
            <SpecialPackage />
          ) : (
            <MainComponent />
          )}
        </Row>
      </Container>
    </>
  );
}
