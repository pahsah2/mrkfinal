import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Actions/userActions';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavbarTop from '../Components/NavbarTop';
import Service from '../assets/icon/management.png';
import Mr_Kleane from '../assets/icon/Mr.Kleane.png'
export default function Login({ location}) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/dashbroad';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
    function close() {
        let path = `/`;
        history.push(path);
      }
  return (
    <>
      <NavbarTop />
      <Container fluid className="bg-mrk Login-Page p-0">
      <div className="border-login">
        <div className="header-login d-none d-sm-block">
        <h5 className="modal-title" id="exampleModalLabel">
                  <img className="logo pr-2" src={Service} />
                  เข้าสู่ระบบ
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={close}
                >
                  <span aria-hidden="true">X</span>
                </button>
        </div>
        <div className="body-login">
        <Row className="align-items-center m-0">
      <Col>
        <Row className="align-items-center">
        <Col xs={12} className="mt-3 mb-3">
            <Row className="align-items-center">
            <Col xs={12} className="d-flex justify-content-center">
              <img src={Mr_Kleane} width="100%"/>
            </Col>
            </Row>
        </Col>
        <Col xs={12} className="mt-3 mb-3">
        <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Control
            type="username"
            placeholder="ชื่อผู้ใช้"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-login"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Control
            type="password"
            placeholder="รหัสผ่าน"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-login"
          ></Form.Control>
        </Form.Group>

        <center>
        <Button type="submit" variant="primary" className="button-login">
          เริ่มงาน
        </Button>
        </center>
        </Form>
        </Col>
        </Row>
      </Col>
      </Row>
        </div>
      </div>
      </Container>
      <Footer />
      
    </>
  );
}
