import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Save from '../../assets/icon/flat-style-circle-save.png';
import Test_Image from '../../assets/images/test-image.jpg';
export default function Data() {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const removeSelectedImage = () => {
    setSelectedImage();
  };
  return (
    <>
      <Form className="Property-data ">
        <Row className="set-margin">
          <Col lg={6}>
            <Row>
              <Col lg={4} className="d-flex">
                <Form.Label>ชื่อ</Form.Label>
              </Col>
              <Col>
                <Form.Control className="input"></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4} className="d-flex">
                <Form.Label>หน่วย</Form.Label>
              </Col>
              <Col>
                <Form.Control className="input"></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4} className="d-flex">
                <Form.Label>ภาพตัวอย่าง สินทรัพย์</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  className="input"
                  value={selectedImage}
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                  disabled
                ></Form.Control>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-center set-button-upload">
            <Form.Label className="button-image">
              <input type="file" onChange={imageChange} />
              อัพโหลด
            </Form.Label>
          </Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}></Col>
              <Col>
                <div className="set-image-upload">
                  {selectedImage && (
                    <img src={URL.createObjectURL(selectedImage)} alt="Thumb" />
                  )}
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-center set-button-upload"></Col>
        </Row>
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={4}>
                <Form.Label>หมายเหตุ</Form.Label>
              </Col>
              <Col>
                <Form.Control as="textarea" rows={4} className="input-area" />
              </Col>
            </Row>
          </Col>
          <Col className="d-flex align-items-center"></Col>
        </Row>

        <Row>
          <Col lg={6} className="mt-4">
            <Button type="button " className="button-increase button-save">
              <img src={Save} /> &nbsp; บันทึก
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </Form>
    </>
  );
}
