import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/style.scss';
import LogoutModal from './LogoutModal';
import Mr1 from '../assets/icon/Mr1.png';
import Setting from '../assets/icon/setting.png';
import Staff from '../assets/icon/staff.png';
export default function Footer() {
  return (
    <div className="footer">
      <Container fluid>
        <Row>
          <Col className="button-mrk">
            <div className="start-button">
              <img src={Mr1} />
            </div>
          </Col>
          <Col col={6} sm={6} md={4} lg={4} xl={3} className="">
            <div className="set-button">
              <div className="mr-2">
                <LogoutModal />
              </div>
              <button type="button" className="button-profile ">
                <img src={Setting} />
                <img src={Staff} />
                <span className="login-name">admin admin</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
