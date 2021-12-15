import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/style.scss';
import MRKTOP1 from '../assets/icon/mrk-nav-top1.png';
import MRKTOP2 from '../assets/icon/mrk-nav-top2.png';

export default function NavbarTop() {
  return (
    <div className="nav-top-menu">
      <Container fluid>
        <Row>
          <Col sm={6} md={6} lg={6}>
            <img src={MRKTOP1} className="menu1" />
          </Col>
          <Col sm={6} md={6} lg={6}>
            <img src={MRKTOP2} className="menu2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
